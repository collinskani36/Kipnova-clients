// ─── Overview Section ─────────────────────────────────────────────────────────

import { BrandingConfig, Stats, WaStatus } from "../types";
import { formatCategoryLabel, pluralize } from "../utils";
import { Section } from "../types";

interface Props {
  stats: Stats | null;
  waStatus: WaStatus | null;
  waCopied: boolean;
  copyWabaId: () => void;
  contactLabel: string;
  categoryLabels: Record<string, string>;
  intakeFlow: BrandingConfig["intakeFlow"];
  admissionsCount: { total: number; complete: number } | null;
  setSection: (s: Section) => void;
}

export default function OverviewSection({
  stats, waStatus, waCopied, copyWabaId,
  contactLabel, categoryLabels, intakeFlow,
  admissionsCount, setSection,
}: Props) {
  return (
    <div className="content-section active">
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

      {/* Stats Grid */}
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

      {/* Inquiries by Type Chart */}
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
  );
}
