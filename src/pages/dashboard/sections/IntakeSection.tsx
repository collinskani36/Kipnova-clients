// ─── Intake / Admissions Section ──────────────────────────────────────────────

import { BrandingConfig, IntakeSession } from "../types";
import { getInitials, getApplicationStatus, statusStyle } from "../utils";

interface Props {
  intakeFlow: NonNullable<BrandingConfig["intakeFlow"]>;
  admissions: IntakeSession[];
  admissionsLoading: boolean;
  setApplicantModal: (s: IntakeSession) => void;
  getPrimaryLabel: (s: IntakeSession) => string;
  fieldLabel: (key: string) => string;
}

export default function IntakeSection({
  intakeFlow, admissions, admissionsLoading,
  setApplicantModal, getPrimaryLabel, fieldLabel,
}: Props) {
  return (
    <div className="content-section active">
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
              const status     = getApplicationStatus(s);
              const docCount   = Object.keys(s.documents).length;
              const fieldCount = Object.keys(s.collectedData).length;
              const primary    = getPrimaryLabel(s);
              const date       = s.startedAt
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
          const status    = getApplicationStatus(s);
          const primary   = getPrimaryLabel(s);
          const date      = s.startedAt
            ? new Date(s.startedAt._seconds * 1000).toLocaleDateString()
            : "—";
          const firstField = Object.entries(s.collectedData)[1];
          return (
            <div
              key={s.phone}
              className="conversation-item"
              onClick={() => setApplicantModal(s)}
            >
              <div className="conversation-avatar">{getInitials(primary)}</div>
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
  );
}
