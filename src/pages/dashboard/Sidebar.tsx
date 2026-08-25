// ─── Sidebar ──────────────────────────────────────────────────────────────────

import { GraduationCap } from "lucide-react";
import { BrandingConfig, Conversation, Section } from "./types";
import { getInitials } from "./utils";

interface Props {
  section: Section;
  setSection: (s: Section) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: (prev: boolean) => boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  headerLabel: string;
  intakeFlow: BrandingConfig["intakeFlow"];
  conversations: Conversation[];
  viewConversation: (phone: string, name: string) => void;
  handleLogout: () => void;
}

export default function Sidebar({
  section, setSection,
  sidebarCollapsed, setSidebarCollapsed,
  mobileOpen, setMobileOpen,
  headerLabel, intakeFlow,
  conversations, viewConversation,
  handleLogout,
}: Props) {
  const staticSections: { key: Section; icon: string; label: string }[] = [
    { key: "overview",      icon: "📊", label: "Overview" },
    { key: "conversations", icon: "💬", label: "Conversations" },
    { key: "inquiries",     icon: "📝", label: "All Inquiries" },
  ];

  return (
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
        {staticSections.map(({ key, icon, label }) => (
          <li
            key={key}
            className={`nav-item${section === key ? " active" : ""}`}
            onClick={() => { setSection(key); setMobileOpen(false); }}
            title={sidebarCollapsed ? label : undefined}
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </li>
        ))}

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

      {!sidebarCollapsed && conversations.length > 0 && (
        <div className="sidebar-recents">
          <div className="sidebar-recents-label">Recents</div>
          {conversations.slice(0, 5).map((conv) => (
            <div
              key={conv.phone}
              className="sidebar-recent-item"
              onClick={() => { viewConversation(conv.phone, conv.name); setMobileOpen(false); }}
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
  );
}
