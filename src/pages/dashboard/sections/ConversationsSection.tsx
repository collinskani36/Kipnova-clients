// ─── Conversations Section ────────────────────────────────────────────────────

import { Conversation } from "../types";
import { escapeHtml, getBadgeStyle, getInitials } from "../utils";

interface Props {
  conversations: Conversation[];
  convsLoading: boolean;
  contactLabel: string;
  viewConversation: (phone: string, name: string) => void;
}

export default function ConversationsSection({
  conversations, convsLoading, contactLabel, viewConversation,
}: Props) {
  return (
    <div className="content-section active">
      <div className="header">
        <h2>Recent Conversations</h2>
        <p>View and manage {contactLabel.toLowerCase()} inquiries</p>
      </div>

      <div className="conversations-container">
        {convsLoading ? (
          <div className="loading"><div className="spinner" /><p>Loading conversations…</p></div>
        ) : conversations.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">💬</div>
            <p>No conversations yet</p>
          </div>
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
  );
}
