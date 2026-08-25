// ─── Applicant / Intake Detail Modal ──────────────────────────────────────────

import { BrandingConfig, IntakeSession } from "../types";
import { getApplicationStatus, statusStyle } from "../utils";

interface Props {
  session: IntakeSession | null;
  onClose: () => void;
  intakeFlow: NonNullable<BrandingConfig["intakeFlow"]>;
  getPrimaryLabel: (s: IntakeSession) => string;
  fieldLabel: (key: string) => string;
}

export default function ApplicantModal({ session, onClose, intakeFlow, getPrimaryLabel, fieldLabel }: Props) {
  if (!session) return null;

  const s       = session;
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
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="inquiry-modal-wrapper" style={{ maxWidth: 620 }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
          <div>
            <h2 style={{ color: "var(--text)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>{primary}</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "0.82rem", margin: 0, fontFamily: "monospace" }}>{s.phone}</p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span className="inquiry-badge" style={statusStyle(status)}>{status}</span>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>

        <div className="inquiry-modal-body" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Collected fields */}
          <div style={{
            background: "var(--surface)", borderRadius: 8, padding: "1rem",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem 1.5rem",
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

            {/* Timestamps */}
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

          {/* Documents */}
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
                    padding: "0.75rem 1rem", marginBottom: "0.5rem", gap: "0.75rem",
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
}
