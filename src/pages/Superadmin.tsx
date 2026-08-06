import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { apiFetch, API_BASE } from "../config/api";
import "../styles/Superadmin.css";

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

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtUSD = (n: number) => `$${(n || 0).toFixed(4)}`;
const fmtKES = (n: number) => `KES ${(n || 0).toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;
const fmtNum = (n: number) => (n || 0).toLocaleString("en-KE");

function qualityClass(rating?: string): string {
  if (!rating) return "quality-unknown";
  const r = rating.toLowerCase();
  if (r === "green") return "quality-green";
  if (r === "yellow") return "quality-yellow";
  if (r === "red") return "quality-red";
  return "quality-unknown";
}

function monthLabel(monthStr: string): string {
  const [y, m] = monthStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Superadmin() {
  const navigate = useNavigate();
  const [appReady, setAppReady] = useState(false);
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [tableError, setTableError] = useState("");

  // Detail panel
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [activeClientId, setActiveClientId] = useState<string | null>(null);
  const [detail, setDetail] = useState<ClientDetail | null>(null);

  // Billing
  const [monthlyFeeInput, setMonthlyFeeInput] = useState<number>(0);
  const [savingBilling, setSavingBilling] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

  // ── Init ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    loadClients().then(() => setAppReady(true));
  }, []);

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
      const res = await apiFetch(`${API_BASE}/api/superadmin/clients/${activeClientId}/billing`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ monthlyFee: monthlyFeeInput }),
      });
      if (!res.ok) throw new Error("Failed to save");
      setSaveConfirm(true);
      // Keep table in sync without full reload
      setClients((prev) =>
        prev.map((c) => c.clientId === activeClientId ? { ...c, monthlyFee: monthlyFeeInput } : c)
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

  // ── Summary stats ──────────────────────────────────────────────────────────

  const totalRevenue = clients.reduce((s, c) => s + (c.monthlyFee || 0), 0);
  const totalCost = clients.reduce((s, c) => s + (c.currentMonthUsage.cost || 0), 0);
  const totalCalls = clients.reduce((s, c) => s + (c.currentMonthUsage.callCount || 0), 0);

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Loading overlay */}
      <div className={`sa-loading-overlay${appReady ? " hidden" : ""}`}>
        <div className="sa-spinner" />
      </div>

      {/* ── Topbar ── */}
      <div className="sa-topbar">
        <h1>
          Kipnova <span className="sa-tag">Superadmin</span>
        </h1>
        <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
          Sign out
        </a>
      </div>

      {/* ── Main ── */}
      <div className="sa-main">

        {/* Summary cards */}
        <div className="sa-summary-grid">
          <div className="sa-summary-card">
            <div className="sa-label">Clients</div>
            <div className="sa-value">{clients.length}</div>
          </div>
          <div className="sa-summary-card">
            <div className="sa-label">Monthly Revenue</div>
            <div className="sa-value">{fmtKES(totalRevenue)}</div>
            <div className="sa-sub">Flat fees billed to clients</div>
          </div>
          <div className="sa-summary-card">
            <div className="sa-label">AI Cost This Month</div>
            <div className="sa-value">{fmtUSD(totalCost)}</div>
            <div className="sa-sub">apifree.ai usage — your cost, not client-billed</div>
          </div>
          <div className="sa-summary-card">
            <div className="sa-label">AI Calls This Month</div>
            <div className="sa-value">{fmtNum(totalCalls)}</div>
          </div>
        </div>

        {/* Clients table */}
        <div className="sa-section-title">Clients</div>
        <table>
          <thead>
            <tr>
              <th>Business</th>
              <th>Status</th>
              <th>WABA</th>
              <th>Customers</th>
              <th>Inquiries</th>
              <th>AI Calls (mo)</th>
              <th>AI Cost (mo)</th>
              <th>Monthly Fee</th>
            </tr>
          </thead>
          <tbody>
            {tableError ? (
              <tr><td colSpan={8} className="sa-error-text">{tableError}</td></tr>
            ) : clients.length === 0 ? (
              <tr><td colSpan={8} className="sa-empty-state">No clients yet.</td></tr>
            ) : clients.map((c) => (
              <tr key={c.clientId} onClick={() => openClientDetail(c.clientId)}>
                <td data-label="Business"><strong>{c.businessName}</strong></td>
                <td data-label="Status">
                  <span className={`sa-status-badge sa-status-${c.status}`}>{c.status}</span>
                </td>
                <td data-label="WABA">
                  {c.wabaId
                    ? <><span className="sa-quality-dot sa-quality-unknown" />Connected</>
                    : <span style={{ color: "var(--text-dim)" }}>Not set up</span>}
                </td>
                <td data-label="Customers">{fmtNum(c.totalCustomers)}</td>
                <td data-label="Inquiries">{fmtNum(c.totalInquiries)}</td>
                <td data-label="AI Calls (mo)">{fmtNum(c.currentMonthUsage.callCount)}</td>
                <td data-label="AI Cost (mo)">{fmtUSD(c.currentMonthUsage.cost)}</td>
                <td data-label="Monthly Fee">{fmtKES(c.monthlyFee)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Detail slide-over ── */}
      <div className={`sa-detail-overlay${detailOpen ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeDetail(); }}>
        <div className="sa-detail-panel">
          <div className="sa-sheet-handle" />
          <div className="sa-detail-header">
            <div>
              <h2>{detail?.client.businessName || "—"}</h2>
              {detail && (
                <span className={`sa-status-badge sa-status-${detail.client.status}`}>
                  {detail.client.status}
                </span>
              )}
            </div>
            <button className="sa-close-btn" onClick={closeDetail}>✕</button>
          </div>

          <div className="sa-detail-body">
            {detailLoading && <div className="sa-loading-text">Loading…</div>}
            {detailError && <div className="sa-error-text">{detailError}</div>}

            {detail && (() => {
              const wa = detail.whatsappStatus || {} as WaStatus;
              const maxCost = Math.max(...detail.usageHistory.map((m) => m.cost), 0.01);

              return (
                <>
                  {/* WhatsApp */}
                  <div className="sa-detail-section">
                    <h3>WhatsApp Business Account</h3>
                    {wa.connected ? (
                      <div className="sa-kv-grid">
                        <div className="sa-kv-item"><div className="sa-k">Verified name</div><div className="sa-v">{wa.verifiedName || "—"}</div></div>
                        <div className="sa-kv-item"><div className="sa-k">Number</div><div className="sa-v">{wa.displayPhoneNumber || "—"}</div></div>
                        <div className="sa-kv-item">
                          <div className="sa-k">Quality rating</div>
                          <div className="sa-v">
                            <span className={`sa-quality-dot ${qualityClass(wa.qualityRating)}`} />
                            {wa.qualityRating || "Unknown"}
                          </div>
                        </div>
                        <div className="sa-kv-item"><div className="sa-k">Verification</div><div className="sa-v">{wa.verificationStatus || "—"}</div></div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.85rem", color: "var(--error)" }}>
                        Not connected{wa.error ? ` — ${wa.error}` : ""}
                      </div>
                    )}
                  </div>

                  {/* Activity */}
                  <div className="sa-detail-section">
                    <h3>Activity</h3>
                    <div className="sa-kv-grid">
                      <div className="sa-kv-item"><div className="sa-k">Total customers</div><div className="sa-v">{fmtNum(detail.totalCustomers)}</div></div>
                      <div className="sa-kv-item"><div className="sa-k">Total inquiries</div><div className="sa-v">{fmtNum(detail.totalInquiries)}</div></div>
                    </div>
                  </div>

                  {/* Billing */}
                  <div className="sa-detail-section">
                    <h3>Billing</h3>
                    <div className="sa-billing-row">
                      <input
                        type="number"
                        min={0}
                        value={monthlyFeeInput}
                        onChange={(e) => setMonthlyFeeInput(parseFloat(e.target.value))}
                        disabled={savingBilling}
                      />
                      <button onClick={saveBilling} disabled={savingBilling}>
                        {savingBilling ? "Saving…" : "Save"}
                      </button>
                    </div>
                    <div className="sa-billing-hint">
                      Flat monthly fee charged to this client (KES). Independent of the AI cost figures below, which reflect what this client costs you, not what they're billed.
                    </div>
                    {saveConfirm && <div className="sa-save-confirm">Saved ✓</div>}
                  </div>

                  {/* Admin accounts */}
                  <div className="sa-detail-section">
                    <h3>Admin accounts</h3>
                    {detail.adminUsers.length === 0 ? (
                      <div style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
                        No admin accounts found for this client.
                      </div>
                    ) : detail.adminUsers.map((a, i) => (
                      <div key={i} className="sa-admin-row">
                        <span>{a.email}</span>
                        {a.disabled
                          ? <span className="sa-disabled-tag">DISABLED</span>
                          : <span style={{ color: "var(--text-dim)", fontSize: "0.75rem" }}>
                              {a.lastSignIn
                                ? "Last in: " + new Date(a.lastSignIn).toLocaleDateString()
                                : "Never signed in"}
                            </span>}
                      </div>
                    ))}
                  </div>

                  {/* AI Usage */}
                  <div className="sa-detail-section">
                    <h3>AI usage — last 6 months</h3>
                    <div className="sa-chart-bars">
                      {detail.usageHistory.map((m) => (
                        <div key={m.month} className="sa-chart-bar-wrap">
                          <div
                            className="sa-chart-bar"
                            style={{ height: `${Math.max((m.cost / maxCost) * 100, 2)}%` }}
                            title={fmtUSD(m.cost)}
                          />
                          <div className="sa-m-label">{monthLabel(m.month)}</div>
                        </div>
                      ))}
                    </div>
                    <table className="sa-usage-table">
                      <thead>
                        <tr><th>Month</th><th>Calls</th><th>Tokens</th><th>Cost</th></tr>
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
