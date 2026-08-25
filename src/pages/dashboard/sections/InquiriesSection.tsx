// ─── Inquiries Section ────────────────────────────────────────────────────────

import { Inquiry } from "../types";
import { getBadgeStyle, getInitials } from "../utils";

interface InquiryGroup {
  name: string;
  phone: string;
  inquiries: Inquiry[];
}

interface Props {
  groups: InquiryGroup[];
  inquiriesLoading: boolean;
  contactLabel: string;
  viewCustomerInquiries: (phone: string, name: string) => void;
}

export default function InquiriesSection({
  groups, inquiriesLoading, contactLabel, viewCustomerInquiries,
}: Props) {
  return (
    <div className="content-section active">
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
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "2rem" }}>
                  <div className="spinner" style={{ margin: "0 auto 1rem" }} />
                  Loading inquiries…
                </td>
              </tr>
            ) : groups.map((group) => {
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
        ) : groups.length === 0 ? (
          <div className="empty-state"><div className="empty-state-icon">📝</div><p>No inquiries yet</p></div>
        ) : groups.map((group) => {
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
  );
}
