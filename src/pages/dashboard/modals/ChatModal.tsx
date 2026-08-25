// ─── Chat Modal ───────────────────────────────────────────────────────────────

import { RefObject } from "react";
import { Message, Takeover } from "../types";
import { formatWhatsAppText, getInitials } from "../utils";

interface Props {
  chatOpen: boolean;
  setChatOpen: (v: boolean) => void;
  chatPhone: string;
  chatName: string;
  messages: Message[];
  takeover: Takeover;
  replyText: string;
  setReplyText: (v: string) => void;
  sendingReply: boolean;
  takeoverLoading: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
  takeOverConversation: () => void;
  handBackToAI: () => void;
  sendAdminReply: () => void;
}

export default function ChatModal({
  chatOpen, setChatOpen,
  chatPhone, chatName,
  messages, takeover,
  replyText, setReplyText,
  sendingReply, takeoverLoading,
  messagesEndRef,
  takeOverConversation, handBackToAI, sendAdminReply,
}: Props) {
  if (!chatOpen) return null;

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setChatOpen(false); }}>
      <div className="chat-modal-wrapper">
        <div className="chat-modal-topbar">
          <h2>Conversation Details</h2>
          <button className="chat-modal-close-btn" onClick={() => setChatOpen(false)} aria-label="Close">✕</button>
        </div>

        <div className="chat-container">
          {/* Header */}
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

          {/* Status bar */}
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

          {/* Messages */}
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

          {/* Reply bar */}
          <div className="chat-reply-bar">
            <textarea
              className="chat-reply-input"
              rows={1}
              placeholder="Type message..(sending takes over from the AI)"
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
  );
}
