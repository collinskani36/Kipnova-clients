import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { apiFetch, API_BASE } from "../config/api";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClientSummary {
  clientId: string;
  businessName: string;
  status: "active" | "trial" | "suspended";
  wabaId?: string;
  totalCustomers: number;
  totalInquiries: number;
  monthlyFee: number;
  currentMonthUsage: { callCount: number; cost: number };
}

interface AdminUser {
  email: string;
  disabled: boolean;
  lastSignIn?: string;
}

interface UsageMonth {
  month: string;
  callCount: number;
  totalTokens: number;
  cost: number;
}

interface WaStatus {
  connected: boolean;
  verifiedName?: string;
  displayPhoneNumber?: string;
  qualityRating?: string;
  verificationStatus?: string;
  error?: string;
}

interface ClientDetail {
  client: { businessName: string; status: string; monthlyFee: number };
  whatsappStatus: WaStatus;
  adminUsers: AdminUser[];
  usageHistory: UsageMonth[];
  totalCustomers: number;
  totalInquiries: number;
}

interface HealthData {
  status: "ok" | "degraded";
  uptime: number;
  firestore: { ok: boolean; latencyMs: number | null };
  memory: { heapUsedMB: number; heapTotalMB: number; rssMB: number };
  clients: Array<{
    clientId: string;
    businessName: string;
    whatsapp: WaStatus;
  }>;
  errorsSinceRestart: number;
  checkedAt: string;
}

interface ErrorEntry {
  id: string;
  timestamp: string;
  clientId: string;
  context: string;
  message: string;
  status: number | null;
}

interface ErrorLog {
  errors: ErrorEntry[];
  total: number;
  maxSize: number;
}

type Tab = "clients" | "health" | "errors";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtUSD = (n: number) => `$${(n || 0).toFixed(4)}`;
const fmtKES = (n: number) =>
  `KES ${(n || 0).toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;
const fmtNum = (n: number) => (n || 0).toLocaleString("en-KE");

function fmtUptime(s: number) {
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s % 60}s`;
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function qualityClass(rating?: string) {
  if (!rating) return "q-unknown";
  const r = rating.toLowerCase();
  if (r === "green") return "q-green";
  if (r === "yellow") return "q-yellow";
  if (r === "red") return "q-red";
  return "q-unknown";
}

function monthLabel(monthStr: string) {
  const [y, m] = monthStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusDot({ ok, pulse }: { ok: boolean; pulse?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: ok ? "#22c55e" : "#ef4444",
        boxShadow: ok
          ? pulse
            ? "0 0 0 0 #22c55e"
            : "0 0 6px #22c55e88"
          : "0 0 6px #ef444488",
        animation: pulse && ok ? "pulse-dot 2s infinite" : "none",
        flexShrink: 0,
      }}
    />
  );
}

function Pill({
  label,
  variant,
}: {
  label: string;
  variant: "active" | "trial" | "suspended" | "ok" | "degraded";
}) {
  const colors: Record<string, string> = {
    active: "#22c55e22,#22c55e",
    trial: "#f59e0b22,#f59e0b",
    suspended: "#ef444422,#ef4444",
    ok: "#22c55e22,#22c55e",
    degraded: "#ef444422,#ef4444",
  };
  const [bg, color] = (colors[variant] || "##ffffff22,#888").split(",");
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 99,
        background: bg,
        color,
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        border: `1px solid ${color}44`,
      }}
    >
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Superadmin() {
  const navigate = useNavigate();
  const [appReady, setAppReady] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("clients");

  // Clients tab
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [tableError, setTableError] = useState("");
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [activeClientId, setActiveClientId] = useState<string | null>(null);
  const [detail, setDetail] = useState<ClientDetail | null>(null);
  const [monthlyFeeInput, setMonthlyFeeInput] = useState<number>(0);
  const [savingBilling, setSavingBilling] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

  // Health tab
  const [health, setHealth] = useState<HealthData | null>(null);
  const [healthLoading, setHealthLoading] = useState(false);
  const [healthError, setHealthError] = useState("");
  const [lastHealthRefresh, setLastHealthRefresh] = useState<Date | null>(null);

  // Errors tab
  const [errorLog, setErrorLog] = useState<ErrorLog | null>(null);
  const [errorLogLoading, setErrorLogLoading] = useState(false);
  const [newErrorCount, setNewErrorCount] = useState(0);
  const [lastSeenErrors, setLastSeenErrors] = useState(0);
  const [clearingErrors, setClearingErrors] = useState(false);

  // ── Init ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    loadClients().then(() => setAppReady(true));
  }, []);

  // Auto-refresh health every 30s when on health tab
  useEffect(() => {
    if (activeTab !== "health") return;
    loadHealth();
    const interval = setInterval(loadHealth, 30000);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Load errors when switching to errors tab
  useEffect(() => {
    if (activeTab === "errors") {
      loadErrors();
      setNewErrorCount(0);
    }
  }, [activeTab]);

  // Poll error count every 60s to show badge
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await apiFetch(`${API_BASE}/api/superadmin/errors?limit=1`);
        if (!res.ok) return;
        const data: ErrorLog = await res.json();
        if (activeTab !== "errors") {
          setNewErrorCount(Math.max(0, data.total - lastSeenErrors));
        }
      } catch (_) {}
    }, 60000);
    return () => clearInterval(interval);
  }, [activeTab, lastSeenErrors]);

  // ── Data ──────────────────────────────────────────────────────────────────

  async function loadClients() {
    try {
      const res = await apiFetch(`${API_BASE}/api/superadmin/clients`);
      if (!res.ok) throw new Error("Failed to load clients");
      const data = await res.json();
      setClients(data.clients);
    } catch (err: unknown) {
      setTableError((err as Error).message);
    }
  }

  const loadHealth = useCallback(async () => {
    setHealthLoading(true);
    setHealthError("");
    try {
      const res = await apiFetch(`${API_BASE}/api/superadmin/health`);
      if (!res.ok) throw new Error("Failed to load health data");
      const data: HealthData = await res.json();
      setHealth(data);
      setLastHealthRefresh(new Date());
    } catch (err: unknown) {
      setHealthError((err as Error).message);
    } finally {
      setHealthLoading(false);
    }
  }, []);

  async function loadErrors() {
    setErrorLogLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/superadmin/errors?limit=50`);
      if (!res.ok) throw new Error("Failed to load errors");
      const data: ErrorLog = await res.json();
      setErrorLog(data);
      setLastSeenErrors(data.total);
    } catch (err: unknown) {
      console.error(err);
    } finally {
      setErrorLogLoading(false);
    }
  }

  async function clearErrors() {
    if (!confirm("Clear all errors from the log?")) return;
    setClearingErrors(true);
    try {
      await apiFetch(`${API_BASE}/api/superadmin/errors`, { method: "DELETE" });
      setErrorLog({ errors: [], total: 0, maxSize: 100 });
      setNewErrorCount(0);
      setLastSeenErrors(0);
    } catch (_) {}
    setClearingErrors(false);
  }

  async function openClientDetail(clientId: string) {
    setActiveClientId(clientId);
    setDetailOpen(true);
    setDetailLoading(true);
    setDetailError("");
    setDetail(null);
    document.body.style.overflow = "hidden";
    try {
      const res = await apiFetch(`${API_BASE}/api/superadmin/clients/${clientId}`);
      if (!res.ok) throw new Error("Failed to load client details");
      const data: ClientDetail = await res.json();
      setDetail(data);
      setMonthlyFeeInput(data.client.monthlyFee);
    } catch (err: unknown) {
      setDetailError((err as Error).message);
    } finally {
      setDetailLoading(false);
    }
  }

  function closeDetail() {
    setDetailOpen(false);
    document.body.style.overflow = "";
  }

  async function saveBilling() {
    if (!activeClientId || !detail) return;
    if (isNaN(monthlyFeeInput) || monthlyFeeInput < 0) {
      alert("Enter a valid, non-negative monthly fee.");
      return;
    }
    setSavingBilling(true);
    setSaveConfirm(false);
    try {
      const res = await apiFetch(
        `${API_BASE}/api/superadmin/clients/${activeClientId}/billing`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ monthlyFee: monthlyFeeInput }),
        }
      );
      if (!res.ok) throw new Error("Failed to save");
      setSaveConfirm(true);
      setClients((prev) =>
        prev.map((c) =>
          c.clientId === activeClientId
            ? { ...c, monthlyFee: monthlyFeeInput }
            : c
        )
      );
      setTimeout(() => setSaveConfirm(false), 3000);
    } catch (err: unknown) {
      alert("Could not save: " + (err as Error).message);
    } finally {
      setSavingBilling(false);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/login", { replace: true });
  }

  // ── Summary stats ─────────────────────────────────────────────────────────

  const totalRevenue = clients.reduce((s, c) => s + (c.monthlyFee || 0), 0);
  const totalCost = clients.reduce(
    (s, c) => s + (c.currentMonthUsage.cost || 0),
    0
  );
  const totalCalls = clients.reduce(
    (s, c) => s + (c.currentMonthUsage.callCount || 0),
    0
  );

  // ─── Styles ───────────────────────────────────────────────────────────────

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0a0a0f;
      --surface: #111118;
      --surface2: #16161f;
      --border: #ffffff0f;
      --border2: #ffffff18;
      --text: #e8e8f0;
      --text-dim: #6b6b80;
      --text-muted: #3a3a4a;
      --accent: #7c6af7;
      --accent-dim: #7c6af722;
      --green: #22c55e;
      --red: #ef4444;
      --yellow: #f59e0b;
      --font: 'Inter', system-ui, sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    body { background: var(--bg); color: var(--text); font-family: var(--font); }

    @keyframes pulse-dot {
      0% { box-shadow: 0 0 0 0 #22c55e66; }
      70% { box-shadow: 0 0 0 6px #22c55e00; }
      100% { box-shadow: 0 0 0 0 #22c55e00; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    /* Loading */
    .sa-loading-overlay {
      position: fixed; inset: 0; background: var(--bg);
      display: flex; align-items: center; justify-content: center;
      z-index: 1000; transition: opacity 0.3s;
    }
    .sa-loading-overlay.hidden { opacity: 0; pointer-events: none; }
    .sa-spinner {
      width: 32px; height: 32px; border: 2px solid var(--border2);
      border-top-color: var(--accent); border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Layout */
    .sa-shell { display: flex; flex-direction: column; min-height: 100vh; }

    /* Topbar */
    .sa-topbar {
      position: sticky; top: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 28px; height: 56px;
      background: var(--bg); border-bottom: 1px solid var(--border);
      backdrop-filter: blur(12px);
    }
    .sa-topbar-left { display: flex; align-items: center; gap: 12px; }
    .sa-logo {
      font-size: 1rem; font-weight: 700; letter-spacing: -0.02em;
      color: var(--text);
    }
    .sa-logo span { color: var(--accent); }
    .sa-role-tag {
      font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--accent);
      background: var(--accent-dim); padding: 2px 8px;
      border-radius: 99px; border: 1px solid var(--accent)33;
    }
    .sa-signout {
      font-size: 0.8rem; color: var(--text-dim); text-decoration: none;
      padding: 6px 14px; border-radius: 6px; border: 1px solid var(--border2);
      transition: all 0.15s;
    }
    .sa-signout:hover { color: var(--text); border-color: var(--border2); background: var(--surface); }

    /* Tab nav */
    .sa-tabnav {
      display: flex; gap: 2px; padding: 16px 28px 0;
      border-bottom: 1px solid var(--border);
    }
    .sa-tab {
      position: relative; display: flex; align-items: center; gap: 6px;
      padding: 8px 16px; border-radius: 6px 6px 0 0;
      font-size: 0.82rem; font-weight: 500; color: var(--text-dim);
      cursor: pointer; border: none; background: none;
      transition: color 0.15s;
    }
    .sa-tab:hover { color: var(--text); }
    .sa-tab.active {
      color: var(--text);
      background: var(--surface);
      border: 1px solid var(--border);
      border-bottom: 1px solid var(--surface);
      margin-bottom: -1px;
    }
    .sa-tab-badge {
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 16px; height: 16px; padding: 0 4px;
      background: var(--red); color: #fff;
      font-size: 0.65rem; font-weight: 700; border-radius: 99px;
    }

    /* Main content */
    .sa-content { flex: 1; padding: 28px; animation: fadeIn 0.2s ease; }

    /* Summary cards */
    .sa-kpis {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px; margin-bottom: 28px;
    }
    .sa-kpi {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; padding: 18px 20px;
    }
    .sa-kpi-label {
      font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase; color: var(--text-dim); margin-bottom: 8px;
    }
    .sa-kpi-value {
      font-size: 1.6rem; font-weight: 700; letter-spacing: -0.03em;
      color: var(--text);
    }
    .sa-kpi-sub { font-size: 0.72rem; color: var(--text-dim); margin-top: 4px; }

    /* Section title */
    .sa-section-title {
      font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--text-dim);
      margin-bottom: 12px;
    }

    /* Table */
    .sa-table-wrap {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; overflow: hidden;
    }
    table { width: 100%; border-collapse: collapse; }
    thead tr { border-bottom: 1px solid var(--border); }
    th {
      padding: 10px 16px; text-align: left;
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase; color: var(--text-dim);
    }
    tbody tr {
      border-bottom: 1px solid var(--border);
      cursor: pointer; transition: background 0.1s;
    }
    tbody tr:last-child { border-bottom: none; }
    tbody tr:hover { background: var(--surface2); }
    td {
      padding: 12px 16px; font-size: 0.83rem; color: var(--text);
      vertical-align: middle;
    }

    /* Error text */
    .sa-error-msg {
      font-size: 0.82rem; color: var(--red); padding: 12px 16px;
    }
    .sa-empty { font-size: 0.82rem; color: var(--text-dim); padding: 20px 16px; }

    /* ── Health tab ── */
    .sa-health-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px; margin-bottom: 24px;
    }
    .sa-health-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; padding: 18px 20px;
      display: flex; flex-direction: column; gap: 6px;
    }
    .sa-health-card-label {
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.07em;
      text-transform: uppercase; color: var(--text-dim);
    }
    .sa-health-card-value {
      font-size: 1.3rem; font-weight: 700; letter-spacing: -0.02em;
    }
    .sa-health-card-sub { font-size: 0.75rem; color: var(--text-dim); }
    .sa-status-row {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.82rem; font-weight: 600;
    }
    .sa-mem-bar-wrap {
      height: 6px; border-radius: 3px;
      background: var(--border2); overflow: hidden; margin-top: 6px;
    }
    .sa-mem-bar {
      height: 100%; border-radius: 3px;
      background: linear-gradient(90deg, var(--accent), #a78bfa);
      transition: width 0.5s ease;
    }
    .sa-client-health-list {
      display: flex; flex-direction: column; gap: 8px;
    }
    .sa-client-health-row {
      display: flex; align-items: center; justify-content: space-between;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 8px; padding: 12px 16px;
    }
    .sa-client-health-name {
      font-size: 0.85rem; font-weight: 600;
    }
    .sa-client-health-meta {
      font-size: 0.75rem; color: var(--text-dim); margin-top: 2px;
    }
    .sa-health-refresh {
      font-size: 0.72rem; color: var(--text-dim);
      display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
    }
    .sa-refresh-btn {
      background: var(--surface); border: 1px solid var(--border2);
      color: var(--text-dim); font-size: 0.75rem; padding: 4px 12px;
      border-radius: 6px; cursor: pointer; transition: all 0.15s;
    }
    .sa-refresh-btn:hover { color: var(--text); border-color: var(--accent)44; }

    /* ── Errors tab ── */
    .sa-errors-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 16px;
    }
    .sa-clear-btn {
      background: none; border: 1px solid var(--red)44;
      color: var(--red); font-size: 0.75rem; padding: 5px 14px;
      border-radius: 6px; cursor: pointer; transition: all 0.15s;
    }
    .sa-clear-btn:hover { background: var(--red)11; }
    .sa-error-row {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 8px; padding: 14px 16px; margin-bottom: 8px;
    }
    .sa-error-row-header {
      display: flex; align-items: center; gap: 10px;
      flex-wrap: wrap; margin-bottom: 6px;
    }
    .sa-error-context {
      font-family: var(--mono); font-size: 0.75rem;
      color: var(--accent); font-weight: 500;
    }
    .sa-error-client {
      font-size: 0.7rem; color: var(--text-dim);
      background: var(--surface2); padding: 1px 8px; border-radius: 4px;
    }
    .sa-error-time { font-size: 0.7rem; color: var(--text-muted); margin-left: auto; }
    .sa-error-message {
      font-family: var(--mono); font-size: 0.78rem; color: var(--red);
      line-height: 1.5; word-break: break-word;
    }
    .sa-error-status {
      display: inline-block; font-size: 0.68rem; font-weight: 700;
      color: var(--yellow); background: #f59e0b11;
      padding: 1px 6px; border-radius: 4px; margin-left: 6px;
    }
    .sa-no-errors {
      text-align: center; padding: 48px;
      color: var(--text-dim); font-size: 0.9rem;
    }
    .sa-no-errors-icon { font-size: 2rem; margin-bottom: 12px; }

    /* ── Detail panel ── */
    .sa-overlay {
      position: fixed; inset: 0; background: #00000088;
      z-index: 200; display: flex; justify-content: flex-end;
      opacity: 0; pointer-events: none; transition: opacity 0.2s;
    }
    .sa-overlay.open { opacity: 1; pointer-events: all; }
    .sa-panel {
      width: 480px; max-width: 95vw; height: 100vh;
      background: var(--surface); border-left: 1px solid var(--border);
      overflow-y: auto; display: flex; flex-direction: column;
      transform: translateX(100%); transition: transform 0.25s ease;
    }
    .sa-overlay.open .sa-panel { transform: translateX(0); animation: slideIn 0.25s ease; }
    .sa-panel-header {
      position: sticky; top: 0; z-index: 10;
      display: flex; align-items: flex-start; justify-content: space-between;
      padding: 20px 24px 16px; background: var(--surface);
      border-bottom: 1px solid var(--border);
    }
    .sa-panel-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; }
    .sa-close {
      background: none; border: none; color: var(--text-dim);
      font-size: 1.1rem; cursor: pointer; padding: 4px 8px;
      border-radius: 4px; transition: color 0.15s;
      flex-shrink: 0; margin-left: 12px; margin-top: 2px;
    }
    .sa-close:hover { color: var(--text); }
    .sa-panel-body { padding: 20px 24px; flex: 1; }
    .sa-panel-section { margin-bottom: 28px; }
    .sa-panel-section h3 {
      font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--text-dim);
      margin-bottom: 14px; padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .sa-kv { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .sa-kv-item { background: var(--surface2); border-radius: 8px; padding: 12px; }
    .sa-kv-k { font-size: 0.7rem; color: var(--text-dim); margin-bottom: 4px; }
    .sa-kv-v { font-size: 0.85rem; font-weight: 600; }
    .sa-billing-row { display: flex; gap: 10px; margin-bottom: 8px; }
    .sa-billing-row input {
      flex: 1; background: var(--surface2); border: 1px solid var(--border2);
      color: var(--text); padding: 8px 12px; border-radius: 6px;
      font-size: 0.85rem; font-family: var(--mono);
      outline: none; transition: border-color 0.15s;
    }
    .sa-billing-row input:focus { border-color: var(--accent)66; }
    .sa-billing-row button {
      background: var(--accent); color: #fff; border: none;
      padding: 8px 18px; border-radius: 6px; font-size: 0.82rem;
      font-weight: 600; cursor: pointer; transition: opacity 0.15s;
    }
    .sa-billing-row button:disabled { opacity: 0.5; }
    .sa-billing-hint { font-size: 0.75rem; color: var(--text-dim); line-height: 1.5; }
    .sa-save-confirm { font-size: 0.8rem; color: var(--green); margin-top: 8px; }
    .sa-admin-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 12px; background: var(--surface2); border-radius: 6px;
      margin-bottom: 6px; font-size: 0.82rem;
    }
    .sa-disabled-tag {
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
      color: var(--red); background: #ef444411; padding: 2px 6px; border-radius: 4px;
    }
    /* Bar chart */
    .sa-bars {
      display: flex; align-items: flex-end; gap: 6px;
      height: 80px; margin-bottom: 12px;
    }
    .sa-bar-col { display: flex; flex-direction: column; align-items: center; flex: 1; gap: 4px; }
    .sa-bar {
      width: 100%; border-radius: 3px 3px 0 0;
      background: linear-gradient(180deg, var(--accent), #7c6af766);
      transition: height 0.4s ease; min-height: 2px;
    }
    .sa-bar-label { font-size: 0.65rem; color: var(--text-dim); }
    .sa-usage-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    .sa-usage-table th {
      font-size: 0.68rem; text-align: left; padding: 6px 8px;
      color: var(--text-dim); border-bottom: 1px solid var(--border);
    }
    .sa-usage-table td { font-size: 0.78rem; padding: 6px 8px; font-family: var(--mono); }
    .sa-quality-dot {
      display: inline-block; width: 7px; height: 7px;
      border-radius: 50%; margin-right: 5px; vertical-align: middle;
    }
    .q-green { background: var(--green); }
    .q-yellow { background: var(--yellow); }
    .q-red { background: var(--red); }
    .q-unknown { background: var(--text-muted); }

    /* Skeleton loader */
    .sa-skel {
      background: linear-gradient(90deg, var(--surface) 25%, var(--surface2) 50%, var(--surface) 75%);
      background-size: 200% 100%;
      animation: skel 1.4s infinite; border-radius: 6px;
    }
    @keyframes skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

    @media (max-width: 640px) {
      .sa-topbar { padding: 0 16px; }
      .sa-tabnav { padding: 12px 16px 0; }
      .sa-content { padding: 16px; }
      .sa-panel { width: 100vw; }
      th { display: none; }
      td { display: flex; justify-content: space-between; padding: 8px 12px; }
      td::before { content: attr(data-label); color: var(--text-dim); font-size: 0.72rem; }
    }
  `;

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      <style>{css}</style>

      {/* Loading */}
      <div className={`sa-loading-overlay${appReady ? " hidden" : ""}`}>
        <div className="sa-spinner" />
      </div>

      <div className="sa-shell">
        {/* Topbar */}
        <div className="sa-topbar">
          <div className="sa-topbar-left">
            <div className="sa-logo">
              Kipnova <span>·</span>
            </div>
            <div className="sa-role-tag">Superadmin</div>
          </div>
          <a
            href="#"
            className="sa-signout"
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
            }}
          >
            Sign out
          </a>
        </div>

        {/* Tab nav */}
        <div className="sa-tabnav">
          {(
            [
              { id: "clients", label: "Clients" },
              { id: "health", label: "System Health" },
              { id: "errors", label: "Error Log" },
            ] as { id: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              className={`sa-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {tab.id === "errors" && newErrorCount > 0 && (
                <span className="sa-tab-badge">{newErrorCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="sa-content">
          {/* ── Clients tab ── */}
          {activeTab === "clients" && (
            <>
              <div className="sa-kpis">
                <div className="sa-kpi">
                  <div className="sa-kpi-label">Total Clients</div>
                  <div className="sa-kpi-value">{clients.length}</div>
                </div>
                <div className="sa-kpi">
                  <div className="sa-kpi-label">Monthly Revenue</div>
                  <div className="sa-kpi-value">{fmtKES(totalRevenue)}</div>
                  <div className="sa-kpi-sub">Flat fees billed</div>
                </div>
                <div className="sa-kpi">
                  <div className="sa-kpi-label">AI Cost This Month</div>
                  <div className="sa-kpi-value">{fmtUSD(totalCost)}</div>
                  <div className="sa-kpi-sub">Your cost, not client-billed</div>
                </div>
                <div className="sa-kpi">
                  <div className="sa-kpi-label">AI Calls This Month</div>
                  <div className="sa-kpi-value">{fmtNum(totalCalls)}</div>
                </div>
              </div>

              <div className="sa-section-title">All Clients</div>
              <div className="sa-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Business</th>
                      <th>Status</th>
                      <th>WhatsApp</th>
                      <th>Customers</th>
                      <th>Inquiries</th>
                      <th>AI Calls</th>
                      <th>AI Cost</th>
                      <th>Monthly Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableError ? (
                      <tr>
                        <td colSpan={8} className="sa-error-msg">
                          {tableError}
                        </td>
                      </tr>
                    ) : clients.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="sa-empty">
                          No clients yet.
                        </td>
                      </tr>
                    ) : (
                      clients.map((c) => (
                        <tr
                          key={c.clientId}
                          onClick={() => openClientDetail(c.clientId)}
                        >
                          <td data-label="Business">
                            <strong>{c.businessName}</strong>
                          </td>
                          <td data-label="Status">
                            <Pill
                              label={c.status}
                              variant={c.status}
                            />
                          </td>
                          <td data-label="WhatsApp">
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              }}
                            >
                              <StatusDot ok={!!c.wabaId} />
                              {c.wabaId ? "Connected" : "Not set up"}
                            </span>
                          </td>
                          <td data-label="Customers">
                            {fmtNum(c.totalCustomers)}
                          </td>
                          <td data-label="Inquiries">
                            {fmtNum(c.totalInquiries)}
                          </td>
                          <td data-label="AI Calls">
                            {fmtNum(c.currentMonthUsage.callCount)}
                          </td>
                          <td data-label="AI Cost">
                            {fmtUSD(c.currentMonthUsage.cost)}
                          </td>
                          <td data-label="Monthly Fee">
                            {fmtKES(c.monthlyFee)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ── Health tab ── */}
          {activeTab === "health" && (
            <>
              <div className="sa-health-refresh">
                <span>
                  {lastHealthRefresh
                    ? `Last checked: ${timeAgo(lastHealthRefresh.toISOString())}`
                    : "Loading…"}
                </span>
                <button
                  className="sa-refresh-btn"
                  onClick={loadHealth}
                  disabled={healthLoading}
                >
                  {healthLoading ? "Checking…" : "↻ Refresh"}
                </button>
              </div>

              {healthError && (
                <div
                  className="sa-error-msg"
                  style={{ marginBottom: 16 }}
                >
                  {healthError}
                </div>
              )}

              {!health && healthLoading && (
                <div className="sa-health-grid">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="sa-health-card">
                      <div
                        className="sa-skel"
                        style={{ height: 14, width: "60%", marginBottom: 10 }}
                      />
                      <div
                        className="sa-skel"
                        style={{ height: 28, width: "40%" }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {health && (
                <>
                  <div className="sa-health-grid">
                    {/* Overall status */}
                    <div className="sa-health-card">
                      <div className="sa-health-card-label">Server Status</div>
                      <div className="sa-status-row">
                        <StatusDot ok={health.status === "ok"} pulse />
                        <span
                          style={{
                            color:
                              health.status === "ok"
                                ? "var(--green)"
                                : "var(--red)",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                          }}
                        >
                          {health.status === "ok" ? "Healthy" : "Degraded"}
                        </span>
                      </div>
                      <div className="sa-health-card-sub">
                        Uptime: {fmtUptime(health.uptime)}
                      </div>
                    </div>

                    {/* Firestore */}
                    <div className="sa-health-card">
                      <div className="sa-health-card-label">Firestore</div>
                      <div className="sa-status-row">
                        <StatusDot ok={health.firestore.ok} />
                        <span
                          style={{
                            color: health.firestore.ok
                              ? "var(--green)"
                              : "var(--red)",
                            fontWeight: 700,
                          }}
                        >
                          {health.firestore.ok ? "Connected" : "Unreachable"}
                        </span>
                      </div>
                      {health.firestore.latencyMs !== null && (
                        <div className="sa-health-card-sub">
                          Latency: {health.firestore.latencyMs}ms
                        </div>
                      )}
                    </div>

                    {/* Memory */}
                    <div className="sa-health-card">
                      <div className="sa-health-card-label">Memory</div>
                      <div
                        className="sa-health-card-value"
                        style={{ fontSize: "1.1rem" }}
                      >
                        {health.memory.heapUsedMB}
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-dim)",
                            fontWeight: 400,
                          }}
                        >
                          {" "}
                          / {health.memory.heapTotalMB} MB heap
                        </span>
                      </div>
                      <div className="sa-mem-bar-wrap">
                        <div
                          className="sa-mem-bar"
                          style={{
                            width: `${Math.min(
                              (health.memory.heapUsedMB /
                                health.memory.heapTotalMB) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="sa-health-card-sub">
                        RSS: {health.memory.rssMB} MB
                      </div>
                    </div>

                    {/* Errors */}
                    <div className="sa-health-card">
                      <div className="sa-health-card-label">
                        Errors Since Restart
                      </div>
                      <div
                        className="sa-health-card-value"
                        style={{
                          color:
                            health.errorsSinceRestart > 0
                              ? "var(--red)"
                              : "var(--green)",
                        }}
                      >
                        {health.errorsSinceRestart}
                      </div>
                      <div className="sa-health-card-sub">
                        {health.errorsSinceRestart > 0
                          ? "Check Error Log tab"
                          : "All clear"}
                      </div>
                    </div>
                  </div>

                  {/* Per-client WhatsApp status */}
                  <div className="sa-section-title" style={{ marginTop: 8 }}>
                    WhatsApp Connection — Per Client
                  </div>
                  <div className="sa-client-health-list">
                    {health.clients.map((c) => (
                      <div key={c.clientId} className="sa-client-health-row">
                        <div>
                          <div className="sa-client-health-name">
                            {c.businessName}
                          </div>
                          <div className="sa-client-health-meta">
                            {c.whatsapp.connected
                              ? `${c.whatsapp.verifiedName || ""} · ${c.whatsapp.displayPhoneNumber || ""}`
                              : c.whatsapp.error || "Not connected"}
                          </div>
                        </div>
                        <div
                          style={{ display: "flex", alignItems: "center", gap: 10 }}
                        >
                          {c.whatsapp.connected && c.whatsapp.qualityRating && (
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "0.75rem",
                                color: "var(--text-dim)",
                              }}
                            >
                              <span
                                className={`sa-quality-dot ${qualityClass(c.whatsapp.qualityRating)}`}
                              />
                              {c.whatsapp.qualityRating}
                            </span>
                          )}
                          <StatusDot ok={c.whatsapp.connected} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* ── Errors tab ── */}
          {activeTab === "errors" && (
            <>
              <div className="sa-errors-header">
                <div>
                  <div className="sa-section-title" style={{ marginBottom: 0 }}>
                    Error Log
                  </div>
                  {errorLog && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-dim)",
                        marginTop: 4,
                      }}
                    >
                      {errorLog.total} error
                      {errorLog.total !== 1 ? "s" : ""} captured since last
                      restart · max {errorLog.maxSize}
                    </div>
                  )}
                </div>
                <button
                  className="sa-clear-btn"
                  onClick={clearErrors}
                  disabled={clearingErrors || !errorLog?.total}
                >
                  {clearingErrors ? "Clearing…" : "Clear log"}
                </button>
              </div>

              {errorLogLoading && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="sa-skel"
                      style={{ height: 72, borderRadius: 8 }}
                    />
                  ))}
                </div>
              )}

              {!errorLogLoading && errorLog?.errors.length === 0 && (
                <div className="sa-no-errors">
                  <div className="sa-no-errors-icon">✓</div>
                  No errors logged since last restart.
                </div>
              )}

              {!errorLogLoading &&
                errorLog?.errors.map((err) => (
                  <div key={err.id} className="sa-error-row">
                    <div className="sa-error-row-header">
                      <span className="sa-error-context">{err.context}</span>
                      <span className="sa-error-client">{err.clientId}</span>
                      {err.status && (
                        <span className="sa-error-status">
                          HTTP {err.status}
                        </span>
                      )}
                      <span className="sa-error-time">
                        {timeAgo(err.timestamp)}
                      </span>
                    </div>
                    <div className="sa-error-message">{err.message}</div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>

      {/* ── Detail slide-over ── */}
      <div
        className={`sa-overlay${detailOpen ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDetail();
        }}
      >
        <div className="sa-panel">
          <div className="sa-panel-header">
            <div>
              <div className="sa-panel-title">
                {detail?.client.businessName || "—"}
              </div>
              {detail && (
                <Pill
                  label={detail.client.status}
                  variant={detail.client.status as any}
                />
              )}
            </div>
            <button className="sa-close" onClick={closeDetail}>
              ✕
            </button>
          </div>

          <div className="sa-panel-body">
            {detailLoading && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[80, 120, 100, 80].map((h, i) => (
                  <div
                    key={i}
                    className="sa-skel"
                    style={{ height: h, borderRadius: 8 }}
                  />
                ))}
              </div>
            )}
            {detailError && (
              <div className="sa-error-msg">{detailError}</div>
            )}

            {detail &&
              (() => {
                const wa = detail.whatsappStatus || ({} as WaStatus);
                const maxCost = Math.max(
                  ...detail.usageHistory.map((m) => m.cost),
                  0.01
                );

                return (
                  <>
                    {/* WhatsApp */}
                    <div className="sa-panel-section">
                      <h3>WhatsApp Business</h3>
                      {wa.connected ? (
                        <div className="sa-kv">
                          <div className="sa-kv-item">
                            <div className="sa-kv-k">Verified name</div>
                            <div className="sa-kv-v">
                              {wa.verifiedName || "—"}
                            </div>
                          </div>
                          <div className="sa-kv-item">
                            <div className="sa-kv-k">Number</div>
                            <div className="sa-kv-v">
                              {wa.displayPhoneNumber || "—"}
                            </div>
                          </div>
                          <div className="sa-kv-item">
                            <div className="sa-kv-k">Quality</div>
                            <div className="sa-kv-v">
                              <span
                                className={`sa-quality-dot ${qualityClass(wa.qualityRating)}`}
                              />
                              {wa.qualityRating || "Unknown"}
                            </div>
                          </div>
                          <div className="sa-kv-item">
                            <div className="sa-kv-k">Verification</div>
                            <div className="sa-kv-v">
                              {wa.verificationStatus || "—"}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            fontSize: "0.83rem",
                            color: "var(--red)",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <StatusDot ok={false} />
                          Not connected
                          {wa.error ? ` — ${wa.error}` : ""}
                        </div>
                      )}
                    </div>

                    {/* Activity */}
                    <div className="sa-panel-section">
                      <h3>Activity</h3>
                      <div className="sa-kv">
                        <div className="sa-kv-item">
                          <div className="sa-kv-k">Total customers</div>
                          <div className="sa-kv-v">
                            {fmtNum(detail.totalCustomers)}
                          </div>
                        </div>
                        <div className="sa-kv-item">
                          <div className="sa-kv-k">Total inquiries</div>
                          <div className="sa-kv-v">
                            {fmtNum(detail.totalInquiries)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Billing */}
                    <div className="sa-panel-section">
                      <h3>Billing</h3>
                      <div className="sa-billing-row">
                        <input
                          type="number"
                          min={0}
                          value={monthlyFeeInput}
                          onChange={(e) =>
                            setMonthlyFeeInput(parseFloat(e.target.value))
                          }
                          disabled={savingBilling}
                          placeholder="Monthly fee (KES)"
                        />
                        <button
                          onClick={saveBilling}
                          disabled={savingBilling}
                        >
                          {savingBilling ? "Saving…" : "Save"}
                        </button>
                      </div>
                      <div className="sa-billing-hint">
                        Flat monthly fee charged to this client (KES).
                        Independent of AI cost figures below.
                      </div>
                      {saveConfirm && (
                        <div className="sa-save-confirm">Saved ✓</div>
                      )}
                    </div>

                    {/* Admin accounts */}
                    <div className="sa-panel-section">
                      <h3>Admin Accounts</h3>
                      {detail.adminUsers.length === 0 ? (
                        <div
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--text-dim)",
                          }}
                        >
                          No admin accounts found.
                        </div>
                      ) : (
                        detail.adminUsers.map((a, i) => (
                          <div key={i} className="sa-admin-row">
                            <span style={{ fontSize: "0.82rem" }}>
                              {a.email}
                            </span>
                            {a.disabled ? (
                              <span className="sa-disabled-tag">DISABLED</span>
                            ) : (
                              <span
                                style={{
                                  color: "var(--text-dim)",
                                  fontSize: "0.72rem",
                                }}
                              >
                                {a.lastSignIn
                                  ? "Last in: " +
                                    new Date(
                                      a.lastSignIn
                                    ).toLocaleDateString()
                                  : "Never signed in"}
                              </span>
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    {/* AI usage */}
                    <div className="sa-panel-section">
                      <h3>AI Usage — Last 6 Months</h3>
                      <div className="sa-bars">
                        {detail.usageHistory.map((m) => (
                          <div key={m.month} className="sa-bar-col">
                            <div
                              className="sa-bar"
                              style={{
                                height: `${Math.max(
                                  (m.cost / maxCost) * 100,
                                  2
                                )}%`,
                              }}
                              title={fmtUSD(m.cost)}
                            />
                            <div className="sa-bar-label">
                              {monthLabel(m.month)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <table className="sa-usage-table">
                        <thead>
                          <tr>
                            <th>Month</th>
                            <th>Calls</th>
                            <th>Tokens</th>
                            <th>Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          {detail.usageHistory.map((m) => (
                            <tr key={m.month}>
                              <td>{monthLabel(m.month)}</td>
                              <td>{fmtNum(m.callCount)}</td>
                              <td>{fmtNum(m.totalTokens)}</td>
                              <td>{fmtUSD(m.cost)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                );
              })()}
          </div>
        </div>
      </div>
    </>
  );
}