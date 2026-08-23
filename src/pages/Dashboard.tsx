import { useEffect, useRef, useState, useCallback } from "react";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { apiFetch, API_BASE } from "../config/api";
import "../styles/Dashboard.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stats {
  totalCustomers: number;
  totalInquiries: number;
  recentInquiries: number;
  inquiryTypes: Record<string, number>;
}

interface WaStatus {
  connected: boolean;
  verifiedName?: string;
  displayPhoneNumber?: string;
  wabaId?: string;
  qualityRating?: string;
}

interface Conversation {
  phone: string;
  name: string;
  lastMessage?: { content: string };
  lastContact?: { _seconds: number };
  inquiry_type?: string;
}

interface Message {
  role: "user" | "assistant" | "admin";
  content: string;
  timestamp?: { _seconds: number };
}

interface Takeover {
  active: boolean;
  adminEmail?: string;
}

interface Inquiry {
  customerPhone: string;
  customerName: string;
  inquiryType?: string;
  message: string;
  createdAt?: { _seconds: number };
}

interface AdmissionDocument {
  storageUrl:   string;
  mimeType:     string;
  filename:     string;
  receivedAt:   string;
  publicId?:    string;
  resourceType?: string;
}

interface IntakeSession {
  phone:            string;
  collectedData:    Record<string, string>;
  documents:        Record<string, AdmissionDocument>;
  currentStepIndex: number;
  complete:         boolean;
  silenced:         boolean;
  startedAt?:       { _seconds: number };
  completedAt?:     { _seconds: number };
  stoppedAt?:       { _seconds: number };
  updatedAt?:       { _seconds: number };
}

interface BrandingConfig {
  phoneNumberId?: string;
  dashboard?: {
    title?: string;
    headerLabel?: string;
    colors?: Record<string, string>;
  };
  contactLabel?:   string;
  categoryLabels?: Record<string, string>;
  intakeFlow?: {
    enabled:     boolean;
    tabLabel:    string;
    tabIcon:     string;
    entityLabel: string;
    fieldLabels: Record<string, string>;
  } | null;
}

type Section = "overview" | "conversations" | "inquiries" | "intake" | "analytics";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const BADGE_PALETTE = [
  { bg: "rgba(16,185,129,0.2)", color: "#10b981" },
  { bg: "rgba(245,158,11,0.2)", color: "#f39c12" },
  { bg: "rgba(59,130,246,0.2)", color: "#3b82f6" },
  { bg: "rgba(139,92,246,0.2)", color: "#a78bfa" },
  { bg: "rgba(236,72,153,0.2)", color: "#ec4899" },
  { bg: "rgba(20,184,166,0.2)", color: "#14b8a6" },
  { bg: "rgba(107,114,128,0.2)", color: "#6b7280" },
];

function getBadgeStyle(type: string): React.CSSProperties {
  if (!type || type === "general") {
    const c = BADGE_PALETTE[BADGE_PALETTE.length - 1];
    return { background: c.bg, color: c.color };
  }
  let hash = 0;
  for (let i = 0; i < type.length; i++) hash = (hash * 31 + type.charCodeAt(i)) >>> 0;
  const c = BADGE_PALETTE[hash % (BADGE_PALETTE.length - 1)];
  return { background: c.bg, color: c.color };
}

function formatCategoryLabel(key: string): string {
  const words = key.replace(/[_-]/g, " ").split(" ").filter(Boolean);
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Inquiries";
}

function escapeHtml(str: string): string {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatWhatsAppText(raw: string): string {
  let text = escapeHtml(raw);
  text = text.replace(/```([^`]+)```/g, "<code>$1</code>");
  text = text.replace(/\*(\S(?:[^*\n]*\S)?)\*/g, "<strong>$1</strong>");
  text = text.replace(/_(\S(?:[^_\n]*\S)?)_/g, "<em>$1</em>");
  text = text.replace(/~(\S(?:[^~\n]*\S)?)~/g, "<del>$1</del>");
  return text.replace(/\n/g, "<br>");
}

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const navigate = useNavigate();

  // UI state
  const [section, setSection] = useState<Section>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appReady, setAppReady] = useState(false);

  // Branding
  const [headerLabel, setHeaderLabel] = useState("🤖 AI Assistant");
  const [contactLabel, setContactLabel] = useState("Customer");
  const [categoryLabels, setCategoryLabels] = useState<Record<string, string>>({});
  const [intakeFlow, setIntakeFlow] = useState<BrandingConfig["intakeFlow"]>(null);

  // Overview data
  const [stats, setStats] = useState<Stats | null>(null);
  const [waStatus, setWaStatus] = useState<WaStatus | null>(null);

  // Conversations
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [convsLoading, setConvsLoading] = useState(false);

  // Inquiries
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);

  // Admissions
  const [admissions, setAdmissions] = useState<IntakeSession[]>([]);
  const [admissionsLoading, setAdmissionsLoading] = useState(false);
  const [admissionsCount, setAdmissionsCount] = useState<{ total: number; complete: number } | null>(null);
  const [applicantModal, setApplicantModal] = useState<IntakeSession | null>(null);

  // Chat modal
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPhone, setChatPhone] = useState("");
  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [takeover, setTakeover] = useState<Takeover>({ active: false });
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [takeoverLoading, setTakeoverLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Customer inquiries modal
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryModalPhone, setInquiryModalPhone] = useState("");
  const [inquiryModalName, setInquiryModalName] = useState("");
  const [customerInquiries, setCustomerInquiries] = useState<Inquiry[]>([]);
  const [customerInquiriesLoading, setCustomerInquiriesLoading] = useState(false);

  // ── Init ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    applyClientBranding().then(() => {
      loadStats();
      loadWaStatus();
      loadConversations(); // load on mount so sidebar recents are always available
      loadAdmissionsCount();
      setAppReady(true);
    });

    const interval = setInterval(loadStats, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (section === "conversations") loadConversations();
    if (section === "inquiries")     loadInquiries();
    if (section === "intake")        loadAdmissions();
  }, [section]);

  useEffect(() => {
    if (chatOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  // ── Branding ──────────────────────────────────────────────────────────────

  async function applyClientBranding() {
    try {
      const res = await apiFetch(`${API_BASE}/api/dashboard-config`);
      if (!res.ok) return;
      const cfg: BrandingConfig = await res.json();

      // ── Onboarding guard ──────────────────────────────────────────────────
      // If phoneNumberId is missing, this client hasn't completed Embedded
      // Signup yet. Send them there now so they connect their WhatsApp account
      // before accessing the dashboard.
      if (!cfg.phoneNumberId) {
        navigate("/embedded-signup", { replace: true });
        return;
      }
      // ─────────────────────────────────────────────────────────────────────

      if (!cfg.dashboard) return;

      if (cfg.categoryLabels) setCategoryLabels(cfg.categoryLabels);
      if (cfg.intakeFlow)     setIntakeFlow(cfg.intakeFlow);
      if (cfg.dashboard.title) document.title = cfg.dashboard.title;
      if (cfg.dashboard.headerLabel) setHeaderLabel(cfg.dashboard.headerLabel);
      if (cfg.dashboard.colors) {
        const root = document.documentElement;
        Object.entries(cfg.dashboard.colors).forEach(([key, value]) => {
          root.style.setProperty("--" + key, value);
        });
      }
      if (cfg.contactLabel) setContactLabel(cfg.contactLabel);
    } catch {
      // Branding unavailable — use defaults, still render
    }
  }

  // ── Data loaders ──────────────────────────────────────────────────────────

  async function loadStats() {
    try {
      const res = await apiFetch(`${API_BASE}/api/stats`);
      const data: Stats = await res.json();
      setStats(data);
    } catch {
      // Silently fail — stats will stay null
    }
  }

  async function loadWaStatus() {
    try {
      const res = await apiFetch(`${API_BASE}/api/whatsapp-status`);
      if (!res.ok) throw new Error();
      const data: WaStatus = await res.json();
      setWaStatus(data);
    } catch {
      setWaStatus({ connected: false });
    }
  }

  async function loadConversations() {
    setConvsLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/conversations`);
      const data = await res.json();
      setConversations(data.conversations || []);
    } catch {
      setConversations([]);
    } finally {
      setConvsLoading(false);
    }
  }

  async function loadInquiries() {
    setInquiriesLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/inquiries`);
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch {
      setInquiries([]);
    } finally {
      setInquiriesLoading(false);
    }
  }

  // ── Intake flow loaders ───────────────────────────────────────────────────

  async function loadAdmissionsCount() {
    try {
      const res = await apiFetch(`${API_BASE}/api/admissions/count`);
      if (!res.ok) return;
      const data = await res.json();
      setAdmissionsCount(data);
    } catch {
      // silently fail — count stays null
    }
  }

  async function loadAdmissions() {
    setAdmissionsLoading(true);
    try {
      const res  = await apiFetch(`${API_BASE}/api/admissions`);
      const data = await res.json();
      setAdmissions(data.sessions || []);
    } catch {
      setAdmissions([]);
    } finally {
      setAdmissionsLoading(false);
    }
  }

  // Converts a snake_case key to a human-readable label.
  // Uses the client's fieldLabels config first, then auto-formats.
  function fieldLabel(key: string): string {
    if (intakeFlow?.fieldLabels?.[key]) return intakeFlow.fieldLabels[key];
    return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  // Returns the first text value from collectedData (used as the "name" column).
  // Looks for common name keys first, then falls back to the first key.
  function getPrimaryLabel(session: IntakeSession): string {
    const nameKeys = ["full_name", "name", "full name", "customer_name"];
    for (const k of nameKeys) {
      if (session.collectedData[k]) return session.collectedData[k];
    }
    const first = Object.values(session.collectedData)[0];
    return first || session.phone;
  }

  function getApplicationStatus(session: IntakeSession): "Complete" | "Cancelled" | "In Progress" {
    if (session.complete && !session.silenced) return "Complete";
    if (session.silenced)                      return "Cancelled";
    return "In Progress";
  }

  function statusStyle(status: "Complete" | "Cancelled" | "In Progress"): React.CSSProperties {
    if (status === "Complete")  return { background: "rgba(16,185,129,0.15)", color: "#10b981" };
    if (status === "Cancelled") return { background: "rgba(239,68,68,0.15)",  color: "#ef4444" };
    return                             { background: "rgba(245,158,11,0.15)", color: "#f59e0b" };
  }

  // ── Chat modal ────────────────────────────────────────────────────────────

  async function viewConversation(phone: string, name: string) {
    setChatPhone(phone);
    setChatName(name);
    setMessages([]);
    setReplyText("");
    setChatOpen(true);

    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${phone}`);
      const data = await res.json();
      setTakeover(data.takeover || { active: false });
      setMessages(data.messages || []);
    } catch {
      setMessages([]);
    }
  }

  async function takeOverConversation() {
    setTakeoverLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${chatPhone}/takeover`, { method: "POST" });
      if (!res.ok) throw new Error();
      setTakeover({ active: true, adminEmail: auth.currentUser?.email || "You" });
    } catch {
      alert("Could not take over this conversation — please try again.");
    } finally {
      setTakeoverLoading(false);
    }
  }

  async function handBackToAI() {
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${chatPhone}/release`, { method: "POST" });
      if (!res.ok) throw new Error();
      setTakeover({ active: false });
    } catch {
      alert("Could not hand this conversation back to the AI — please try again.");
    }
  }

  async function sendAdminReply() {
    if (!replyText.trim() || !chatPhone) return;
    setSendingReply(true);
    const msg = replyText.trim();
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${chatPhone}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      if (!res.ok) throw new Error();
      setReplyText("");
      setMessages((prev) => [...prev, { role: "admin", content: msg }]);
      setTakeover({ active: true, adminEmail: auth.currentUser?.email || "You" });
    } catch {
      alert("Could not send that message — please try again.");
    } finally {
      setSendingReply(false);
    }
  }

  // ── Customer inquiries modal ───────────────────────────────────────────────

  async function viewCustomerInquiries(phone: string, name: string) {
    setInquiryModalPhone(phone);
    setInquiryModalName(name);
    setInquiryModalOpen(true);
    setCustomerInquiriesLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/inquiries`);
      const data = await res.json();
      const filtered = (data.inquiries as Inquiry[])
        .filter((i) => i.customerPhone === phone)
        .sort((a, b) => (b.createdAt?._seconds || 0) - (a.createdAt?._seconds || 0));
      setCustomerInquiries(filtered);
    } catch {
      setCustomerInquiries([]);
    } finally {
      setCustomerInquiriesLoading(false);
    }
  }

  // ── Inquiries grouping ────────────────────────────────────────────────────

  const groupedInquiries = useCallback(() => {
    const map: Record<string, { name: string; phone: string; inquiries: Inquiry[] }> = {};
    inquiries.forEach((inq) => {
      if (!map[inq.customerPhone]) {
        map[inq.customerPhone] = { name: inq.customerName, phone: inq.customerPhone, inquiries: [] };
      }
      map[inq.customerPhone].inquiries.push(inq);
    });
    return Object.values(map)
      .map((g) => {
        g.inquiries.sort((a, b) => (b.createdAt?._seconds || 0) - (a.createdAt?._seconds || 0));
        return g;
      })
      .sort((a, b) => (b.inquiries[0].createdAt?._seconds || 0) - (a.inquiries[0].createdAt?._seconds || 0));
  }, [inquiries]);

  // ── Logout ────────────────────────────────────────────────────────────────

  async function handleLogout() {
    await signOut(auth);
    navigate("/login", { replace: true });
  }

  // ── WA copy ───────────────────────────────────────────────────────────────

  const [waCopied, setWaCopied] = useState(false);
  function copyWabaId() {
    if (!waStatus?.wabaId) return;
    navigator.clipboard.writeText(waStatus.wabaId).then(() => {
      setWaCopied(true);
      setTimeout(() => setWaCopied(false), 1500);
    });
  }

  const pluralize = (word: string) => (word.endsWith("s") ? word : word + "s");

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Loading overlay */}
      <div className={`app-loading-overlay${appReady ? " hidden" : ""}`}>
        <div className="app-spinner" />
      </div>

      <div className="dashboard">
        {/* Mobile sidebar overlay */}
        <div
          className={`sidebar-overlay${mobileOpen ? " active" : ""}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* ── Sidebar ── */}
        <aside className={`sidebar${sidebarCollapsed ? " collapsed" : ""}${mobileOpen ? " mobile-open" : ""}`}>
          <div className="sidebar-header">
            <div className="logo">
              <GraduationCap className="logo-cap-icon" size={22} strokeWidth={2} />
              <div className="logo-text">
                <h1>{headerLabel}</h1>
                <p>Admin Dashboard</p>
              </div>
            </div>
          </div>

          <ul className="nav">
            {(["overview", "conversations", "inquiries"] as Section[]).map((s) => {
              const icons: Record<string, string> = {
                overview:      "📊",
                conversations: "💬",
                inquiries:     "📝",
              };
              const labels: Record<string, string> = {
                overview:      "Overview",
                conversations: "Conversations",
                inquiries:     "All Inquiries",
              };
              return (
                <li
                  key={s}
                  className={`nav-item${section === s ? " active" : ""}`}
                  onClick={() => { setSection(s); setMobileOpen(false); }}
                  title={sidebarCollapsed ? labels[s] : undefined}
                >
                  <span className="nav-icon">{icons[s]}</span>
                  <span className="nav-label">{labels[s]}</span>
                </li>
              );
            })}

            {/* Intake tab — only rendered if this client has an intake flow configured */}
            {intakeFlow?.enabled && (
              <li
                className={`nav-item${section === "intake" ? " active" : ""}`}
                onClick={() => { setSection("intake"); setMobileOpen(false); }}
                title={sidebarCollapsed ? intakeFlow.tabLabel : undefined}
              >
                <span className="nav-icon">{intakeFlow.tabIcon}</span>
                <span className="nav-label">{intakeFlow.tabLabel}</span>
              </li>
            )}

            <li
              className={`nav-item${section === "analytics" ? " active" : ""}`}
              onClick={() => { setSection("analytics"); setMobileOpen(false); }}
              title={sidebarCollapsed ? "Analytics" : undefined}
            >
              <span className="nav-icon">📈</span>
              <span className="nav-label">Analytics</span>
            </li>
          </ul>

          {/* ── Recents ── */}
          {!sidebarCollapsed && conversations.length > 0 && (
            <div className="sidebar-recents">
              <div className="sidebar-recents-label">Recents</div>
              {conversations.slice(0, 5).map((conv) => (
                <div
                  key={conv.phone}
                  className="sidebar-recent-item"
                  onClick={() => {
                    viewConversation(conv.phone, conv.name);
                    setMobileOpen(false);
                  }}
                >
                  <div className="sidebar-recent-avatar">{getInitials(conv.name)}</div>
                  <div className="sidebar-recent-info">
                    <div className="sidebar-recent-name">{conv.name}</div>
                    <div className="sidebar-recent-preview">
                      {conv.lastMessage
                        ? conv.lastMessage.content.replace(/[*_~`]/g, "").substring(0, 35)
                        : "No messages yet"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="sidebar-footer">
            <a
              href="#"
              className="logout-link"
              onClick={(e) => { e.preventDefault(); handleLogout(); }}
              title={sidebarCollapsed ? "Log Out" : undefined}
            >
              <span className="nav-icon">🚪</span>
              <span className="nav-label">Log Out</span>
            </a>

            <button
              className="sidebar-collapse-btn"
              onClick={() => setSidebarCollapsed((v) => !v)}
              aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <span className="collapse-arrow">{sidebarCollapsed ? "▶" : "◀"}</span>
            </button>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="main-content">
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Toggle menu">
            ☰
          </button>

          {/* ── Overview ── */}
          <div className={`content-section${section === "overview" ? " active" : ""}`}>
            <div className="header">
              <h2>Dashboard Overview</h2>
              <p>Real-time statistics and recent activity</p>
            </div>

            {/* WA Status Card */}
            <div className="wa-status-card">
              <div className="wa-status-top">
                <div className="wa-status-identity">
                  <div className="wa-status-icon">📱</div>
                  <div className="wa-status-name">
                    WhatsApp Business Account
                    <span>{waStatus ? (waStatus.verifiedName || "Unnamed number") : "Loading…"}</span>
                  </div>
                </div>
                <div className={`wa-status-pill${waStatus?.connected ? " is-connected" : " is-error"}`}>
                  <span className="wa-status-dot" />
                  <span>{waStatus ? (waStatus.connected ? "Connected" : "Unavailable") : "Checking…"}</span>
                </div>
              </div>
              <div className="wa-status-grid">
                <div>
                  <div className="wa-status-field-label">Phone Number</div>
                  <div className="wa-status-field-value is-mono">{waStatus?.displayPhoneNumber || "—"}</div>
                </div>
                <div>
                  <div className="wa-status-field-label">WABA ID</div>
                  <div className="wa-status-field-value is-mono">
                    <span>{waStatus?.wabaId || "—"}</span>
                    <button className="wa-copy-btn" onClick={copyWabaId}>{waCopied ? "Copied" : "Copy"}</button>
                  </div>
                </div>
                <div>
                  <div className="wa-status-field-label">Quality Rating</div>
                  <div className="wa-status-field-value">
                    <span className={`wa-quality-badge wa-quality-${(waStatus?.qualityRating || "unknown").toLowerCase()}`}>
                      {(waStatus?.qualityRating || "unknown").toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-value">{stats?.totalCustomers ?? "-"}</div>
                <div className="stat-label">Total {pluralize(contactLabel)}</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💬</div>
                <div className="stat-value">{stats?.totalInquiries ?? "-"}</div>
                <div className="stat-label">Total Inquiries</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-value">{stats?.recentInquiries ?? "-"}</div>
                <div className="stat-label">Last 7 Days</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-value">AI</div>
                <div className="stat-label">Status: Active</div>
              </div>
              {intakeFlow?.enabled && (
                <div
                  className="stat-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSection("intake")}
                  title={`View ${intakeFlow.tabLabel}`}
                >
                  <div className="stat-icon">{intakeFlow.tabIcon}</div>
                  <div className="stat-value">{admissionsCount?.total ?? "-"}</div>
                  <div className="stat-label">
                    {intakeFlow.tabLabel}
                    {admissionsCount && admissionsCount.complete > 0 && (
                      <span style={{ display: "block", fontSize: "0.72rem", color: "#10b981", marginTop: "0.2rem" }}>
                        {admissionsCount.complete} complete
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Chart */}
            <div className="chart-container">
              <h3 className="chart-title">Inquiries by Type</h3>
              {stats?.inquiryTypes && (() => {
                const total = Object.values(stats.inquiryTypes).reduce((a, b) => a + b, 0);
                return Object.entries(stats.inquiryTypes).map(([type, count]) => (
                  <div className="chart-bar" key={type}>
                    <div className="chart-label">
                      {categoryLabels[type] || formatCategoryLabel(type)}
                    </div>
                    <div className="chart-bar-fill" style={{ width: `${total > 0 ? (count / total) * 100 : 0}%` }}>
                      <span className="chart-value">{count}</span>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* ── Conversations ── */}
          <div className={`content-section${section === "conversations" ? " active" : ""}`}>
            <div className="header">
              <h2>Recent Conversations</h2>
              <p>View and manage {contactLabel.toLowerCase()} inquiries</p>
            </div>
            <div className="conversations-container">
              {convsLoading ? (
                <div className="loading"><div className="spinner" /><p>Loading conversations…</p></div>
              ) : conversations.length === 0 ? (
                <div className="empty-state"><div className="empty-state-icon">💬</div><p>No conversations yet</p></div>
              ) : conversations.map((conv) => {
                const initials = getInitials(conv.name);
                const preview = conv.lastMessage
                  ? escapeHtml(conv.lastMessage.content.replace(/[*_~`]/g, "")).substring(0, 50)
                  : "No messages yet";
                const time = conv.lastContact
                  ? new Date(conv.lastContact._seconds * 1000).toLocaleString()
                  : "";
                const badgeType = conv.inquiry_type || "general";
                return (
                  <div
                    key={conv.phone}
                    className="conversation-item"
                    onClick={() => viewConversation(conv.phone, conv.name)}
                  >
                    <div className="conversation-avatar">{initials}</div>
                    <div className="conversation-info">
                      <div className="conversation-header">
                        <span className="conversation-name">{conv.name}</span>
                        <span className="conversation-time">{time}</span>
                      </div>
                      <div className="conversation-preview">
                        <span className="preview-text">{preview}</span>
                        <span className="inquiry-badge" style={getBadgeStyle(badgeType)}>{badgeType}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Inquiries ── */}
          <div className={`content-section${section === "inquiries" ? " active" : ""}`}>
            <div className="header">
              <h2>All Inquiries</h2>
              <p>Complete inquiry history grouped by {contactLabel.toLowerCase()}</p>
            </div>
            {/* Desktop table */}
            <div className="table-container inquiry-table-desktop">
              <table>
                <thead>
                  <tr>
                    <th>{contactLabel}</th>
                    <th>Phone</th>
                    <th>Total Inquiries</th>
                    <th>Last Inquiry Type</th>
                    <th>Last Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiriesLoading ? (
                    <tr><td colSpan={5} style={{ textAlign: "center", padding: "2rem" }}>
                      <div className="spinner" style={{ margin: "0 auto 1rem" }} />
                      Loading inquiries…
                    </td></tr>
                  ) : groupedInquiries().map((group) => {
                    const latest = group.inquiries[0];
                    const time = latest.createdAt
                      ? new Date(latest.createdAt._seconds * 1000).toLocaleString()
                      : "Unknown";
                    const badgeType = latest.inquiryType || "general";
                    return (
                      <tr key={group.phone} onClick={() => viewCustomerInquiries(group.phone, group.name)}>
                        <td>{group.name}</td>
                        <td>{group.phone}</td>
                        <td><span className="inquiry-count">{group.inquiries.length}</span></td>
                        <td><span className="inquiry-badge" style={getBadgeStyle(badgeType)}>{badgeType}</span></td>
                        <td>{time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile card list */}
            <div className="inquiry-cards-mobile">
              {inquiriesLoading ? (
                <div className="loading"><div className="spinner" /><p>Loading inquiries…</p></div>
              ) : groupedInquiries().length === 0 ? (
                <div className="empty-state"><div className="empty-state-icon">📝</div><p>No inquiries yet</p></div>
              ) : groupedInquiries().map((group) => {
                const latest = group.inquiries[0];
                const time = latest.createdAt
                  ? new Date(latest.createdAt._seconds * 1000).toLocaleString()
                  : "Unknown";
                const badgeType = latest.inquiryType || "general";
                return (
                  <div
                    key={group.phone}
                    className="conversation-item"
                    onClick={() => viewCustomerInquiries(group.phone, group.name)}
                  >
                    <div className="conversation-avatar">{getInitials(group.name)}</div>
                    <div className="conversation-info">
                      <div className="conversation-header">
                        <span className="conversation-name">{group.name}</span>
                        <span className="inquiry-count" style={{ marginLeft: 0 }}>{group.inquiries.length}</span>
                      </div>
                      <div className="conversation-preview">
                        <span className="preview-text">{group.phone}</span>
                        <span className="inquiry-badge" style={getBadgeStyle(badgeType)}>{badgeType}</span>
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>{time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Intake Flow (Admissions / Loan Applications / Registrations / etc.) ── */}
          {/* Only rendered when this client has an intake flow configured.            */}
          {intakeFlow?.enabled && (
            <div className={`content-section${section === "intake" ? " active" : ""}`}>
              <div className="header">
                <h2>{intakeFlow.tabIcon} {intakeFlow.tabLabel}</h2>
                <p>{intakeFlow.entityLabel} submissions received via WhatsApp</p>
              </div>

              {/* Desktop table */}
              <div className="table-container inquiry-table-desktop">
                <table>
                  <thead>
                    <tr>
                      <th>{intakeFlow.entityLabel}</th>
                      <th>WhatsApp</th>
                      <th>Fields Collected</th>
                      <th>Documents</th>
                      <th>Status</th>
                      <th>Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admissionsLoading ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center", padding: "2rem" }}>
                          <div className="spinner" style={{ margin: "0 auto 1rem" }} />
                          Loading {intakeFlow.tabLabel.toLowerCase()}…
                        </td>
                      </tr>
                    ) : admissions.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "var(--text-dim)" }}>
                          No {intakeFlow.tabLabel.toLowerCase()} yet. Contacts send <strong>APPLY</strong> on WhatsApp to begin.
                        </td>
                      </tr>
                    ) : admissions.map((s) => {
                      const status    = getApplicationStatus(s);
                      const docCount  = Object.keys(s.documents).length;
                      const fieldCount = Object.keys(s.collectedData).length;
                      const primary   = getPrimaryLabel(s);
                      const date      = s.startedAt
                        ? new Date(s.startedAt._seconds * 1000).toLocaleDateString()
                        : "—";
                      return (
                        <tr key={s.phone} style={{ cursor: "pointer" }} onClick={() => setApplicantModal(s)}>
                          <td>{primary}</td>
                          <td style={{ fontFamily: "monospace", fontSize: "0.85rem" }}>{s.phone}</td>
                          <td><span className="inquiry-count">{fieldCount}</span></td>
                          <td><span className="inquiry-count">{docCount}</span></td>
                          <td><span className="inquiry-badge" style={statusStyle(status)}>{status}</span></td>
                          <td style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>{date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile card list */}
              <div className="inquiry-cards-mobile">
                {admissionsLoading ? (
                  <div className="loading"><div className="spinner" /><p>Loading {intakeFlow.tabLabel.toLowerCase()}…</p></div>
                ) : admissions.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-state-icon">{intakeFlow.tabIcon}</div>
                    <p>No {intakeFlow.tabLabel.toLowerCase()} yet</p>
                  </div>
                ) : admissions.map((s) => {
                  const status  = getApplicationStatus(s);
                  const primary = getPrimaryLabel(s);
                  const date    = s.startedAt
                    ? new Date(s.startedAt._seconds * 1000).toLocaleDateString()
                    : "—";
                  const firstField = Object.entries(s.collectedData)[1]; // second field as subtitle
                  return (
                    <div
                      key={s.phone}
                      className="conversation-item"
                      onClick={() => setApplicantModal(s)}
                    >
                      <div className="conversation-avatar">
                        {getInitials(primary)}
                      </div>
                      <div className="conversation-info">
                        <div className="conversation-header">
                          <span className="conversation-name">{primary}</span>
                          <span className="inquiry-badge" style={statusStyle(status)}>{status}</span>
                        </div>
                        <div className="conversation-preview">
                          {firstField && (
                            <span className="preview-text">
                              {fieldLabel(firstField[0])}: {firstField[1]}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>{date}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Analytics ── */}
          <div className={`content-section${section === "analytics" ? " active" : ""}`}>
            <div className="header">
              <h2>Analytics</h2>
              <p>Detailed insights and trends</p>
            </div>
            <div className="stats-grid">
              {stats?.inquiryTypes && Object.entries(stats.inquiryTypes).length > 0
                ? Object.entries(stats.inquiryTypes)
                    .sort((a, b) => b[1] - a[1])
                    .map(([type, count]) => (
                      <div className="stat-card" key={type}>
                        <div className="stat-value">{count}</div>
                        <div className="stat-label">{categoryLabels[type] || formatCategoryLabel(type)}</div>
                      </div>
                    ))
                : <div className="stat-card">
                    <div className="stat-value">0</div>
                    <div className="stat-label">No Inquiries Yet</div>
                  </div>
              }
            </div>
          </div>
        </main>
      </div>

      {/* ── Chat Modal ── */}
      {chatOpen && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setChatOpen(false); }}>
          <div className="chat-modal-wrapper">
            <div className="chat-modal-topbar">
              <h2>Conversation Details</h2>
              <button className="btn btn-secondary" onClick={() => setChatOpen(false)}>Close</button>
            </div>
            <div className="chat-container">
              <div className="chat-header">
                <button className="chat-back-btn" onClick={() => setChatOpen(false)} aria-label="Back">←</button>
                <div className="chat-header-info">
                  <div className="conversation-avatar" style={{ width: 36, height: 36, fontSize: "0.85rem" }}>
                    {getInitials(chatName)}
                  </div>
                  <div>
                    <div className="conversation-name">{chatName}</div>
                    <div className="chat-phone">{chatPhone}</div>
                  </div>
                </div>
              </div>

              <div className="chat-status-bar">
                <span className={`chat-status-pill${takeover.active ? " is-takeover" : ""}`}>
                  {takeover.active
                    ? `🙋 ${takeover.adminEmail || "An admin"} is handling this`
                    : "🤖 AI is replying"}
                </span>
                {takeover.active ? (
                  <button className="chat-handback-btn" onClick={handBackToAI}>Hand back to AI</button>
                ) : (
                  <button
                    className="chat-handback-btn takeover-btn"
                    onClick={takeOverConversation}
                    disabled={takeoverLoading}
                  >
                    🙋 Take over
                  </button>
                )}
              </div>

              <div className="chat-messages">
                {messages.length === 0 ? (
                  <div className="empty-state"><p>No messages yet</p></div>
                ) : messages.map((msg, i) => {
                  const time = msg.timestamp
                    ? new Date(msg.timestamp._seconds * 1000).toLocaleString()
                    : "";
                  const avatar = msg.role === "user"
                    ? getInitials(chatName)
                    : msg.role === "admin" ? "🙋" : "AI";
                  return (
                    <div key={i} className={`message ${msg.role}`}>
                      <div className="message-avatar">{avatar}</div>
                      <div>
                        <div
                          className="message-content"
                          dangerouslySetInnerHTML={{ __html: formatWhatsAppText(msg.content) }}
                        />
                        <div className="message-time">{time}</div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-reply-bar">
                <textarea
                  className="chat-reply-input"
                  rows={1}
                  placeholder="Type a message… (sending takes over from the AI)"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendAdminReply();
                    }
                  }}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.style.height = "auto";
                    el.style.height = Math.min(el.scrollHeight, 120) + "px";
                  }}
                />
                <button
                  className="chat-send-btn"
                  onClick={sendAdminReply}
                  disabled={sendingReply || !replyText.trim()}
                  aria-label="Send"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Customer Inquiries Modal ── */}
      {inquiryModalOpen && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setInquiryModalOpen(false); }}>
          <div className="inquiry-modal-wrapper">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div>
                <h2 style={{ color: "var(--text)", fontSize: "1.1rem" }}>{inquiryModalName}</h2>
                <p style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>{inquiryModalPhone}</p>
              </div>
              <button className="btn btn-secondary" onClick={() => setInquiryModalOpen(false)}>Close</button>
            </div>
            <div className="inquiry-modal-body">
              {customerInquiriesLoading ? (
                <div className="loading"><div className="spinner" /><p>Loading inquiries…</p></div>
              ) : customerInquiries.length === 0 ? (
                <div className="empty-state"><p>No inquiries found</p></div>
              ) : customerInquiries.map((inq, i) => {
                const time = inq.createdAt
                  ? new Date(inq.createdAt._seconds * 1000).toLocaleString()
                  : "Unknown";
                const badgeType = inq.inquiryType || "general";
                return (
                  <div key={i} className="inquiry-detail-item">
                    <div className="inquiry-type">
                      <span className="inquiry-badge" style={getBadgeStyle(badgeType)}>{badgeType}</span>
                      <span style={{ marginLeft: "1rem", color: "var(--text-dim)", fontSize: "0.8rem" }}>
                        Inquiry #{customerInquiries.length - i}
                      </span>
                    </div>
                    <div className="inquiry-message">{escapeHtml(inq.message)}</div>
                    <div className="inquiry-time">{time}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* ── Applicant / Intake Detail Modal ── */}
      {applicantModal && intakeFlow && (() => {
        const s       = applicantModal;
        const status  = getApplicationStatus(s);
        const docs    = Object.entries(s.documents);
        const fields  = Object.entries(s.collectedData);
        const primary = getPrimaryLabel(s);
        const startDate = s.startedAt
          ? new Date(s.startedAt._seconds * 1000).toLocaleString()
          : "—";
        const endDate = s.completedAt
          ? new Date(s.completedAt._seconds * 1000).toLocaleString()
          : s.stoppedAt
            ? new Date(s.stoppedAt._seconds * 1000).toLocaleString()
            : null;

        return (
          <div
            className="modal-backdrop"
            onClick={(e) => { if (e.target === e.currentTarget) setApplicantModal(null); }}
          >
            <div className="inquiry-modal-wrapper" style={{ maxWidth: 620 }}>

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                <div>
                  <h2 style={{ color: "var(--text)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                    {primary}
                  </h2>
                  <p style={{ color: "var(--text-dim)", fontSize: "0.82rem", margin: 0, fontFamily: "monospace" }}>{s.phone}</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <span className="inquiry-badge" style={statusStyle(status)}>{status}</span>
                  <button className="btn btn-secondary" onClick={() => setApplicantModal(null)}>Close</button>
                </div>
              </div>

              <div className="inquiry-modal-body" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* All collected fields — rendered dynamically from collectedData keys */}
                <div style={{
                  background: "var(--surface)", borderRadius: 8, padding: "1rem",
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem 1.5rem"
                }}>
                  {fields.length === 0 ? (
                    <div style={{ gridColumn: "1/-1", color: "var(--text-dim)", fontSize: "0.85rem" }}>
                      No data collected yet.
                    </div>
                  ) : fields.map(([key, value]) => (
                    <div key={key}>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>
                        {fieldLabel(key)}
                      </div>
                      <div style={{ fontSize: "0.9rem", color: "var(--text)", wordBreak: "break-word" }}>
                        {value || "—"}
                      </div>
                    </div>
                  ))}

                  {/* Timestamps always shown at the bottom */}
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>Started</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>{startDate}</div>
                  </div>
                  {endDate && (
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>
                        {status === "Cancelled" ? "Cancelled At" : "Completed At"}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>{endDate}</div>
                    </div>
                  )}
                </div>

                {/* Documents — rendered dynamically from documents keys */}
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Submitted Documents {docs.length > 0 && `(${docs.length})`}
                  </div>
                  {docs.length === 0 ? (
                    <div style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>No documents submitted.</div>
                  ) : docs.map(([stepId, doc]) => {
                    const isImage = doc.mimeType?.startsWith("image/");
                    return (
                      <div
                        key={stepId}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          background: "var(--surface)", borderRadius: 8,
                          padding: "0.75rem 1rem", marginBottom: "0.5rem", gap: "0.75rem"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", minWidth: 0 }}>
                          <span style={{ fontSize: "1.4rem" }}>{isImage ? "🖼️" : "📄"}</span>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontSize: "0.85rem", color: "var(--text)", fontWeight: 500 }}>
                              {fieldLabel(stepId)}
                            </div>
                            <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {doc.filename} · {new Date(doc.receivedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <a
                          href={doc.storageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ whiteSpace: "nowrap", fontSize: "0.8rem", padding: "0.35rem 0.8rem", textDecoration: "none" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          ⬇ Download
                        </a>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}