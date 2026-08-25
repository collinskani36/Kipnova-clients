// ─── Customer Inquiries Modal ─────────────────────────────────────────────────

import { Inquiry } from "../types";
import { getBadgeStyle, escapeHtml } from "../utils";

interface Props {
  open: boolean;
  onClose: () => void;
  phone: string;
  name: string;
  inquiries: Inquiry[];
  loading: boolean;
}

export default function InquiryModal({ open, onClose, phone, name, inquiries, loading }: Props) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="inquiry-modal-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div>
            <h2 style={{ color: "var(--text)", fontSize: "1.1rem" }}>{name}</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>{phone}</p>
          </div>
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>

        <div className="inquiry-modal-body">
          {loading ? (
            <div className="loading"><div className="spinner" /><p>Loading inquiries…</p></div>
          ) : inquiries.length === 0 ? (
            <div className="empty-state"><p>No inquiries found</p></div>
          ) : inquiries.map((inq, i) => {
            const time = inq.createdAt
              ? new Date(inq.createdAt._seconds * 1000).toLocaleString()
              : "Unknown";
            const badgeType = inq.inquiryType || "general";
            return (
              <div key={i} className="inquiry-detail-item">
                <div className="inquiry-type">
                  <span className="inquiry-badge" style={getBadgeStyle(badgeType)}>{badgeType}</span>
                  <span style={{ marginLeft: "1rem", color: "var(--text-dim)", fontSize: "0.8rem" }}>
                    Inquiry #{inquiries.length - i}
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
  );
}
