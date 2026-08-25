// ─── Helpers / Utils ──────────────────────────────────────────────────────────

import { IntakeSession } from "./types";

export const BADGE_PALETTE = [
  { bg: "rgba(16,185,129,0.2)", color: "#10b981" },
  { bg: "rgba(245,158,11,0.2)", color: "#f39c12" },
  { bg: "rgba(59,130,246,0.2)", color: "#3b82f6" },
  { bg: "rgba(139,92,246,0.2)", color: "#a78bfa" },
  { bg: "rgba(236,72,153,0.2)", color: "#ec4899" },
  { bg: "rgba(20,184,166,0.2)", color: "#14b8a6" },
  { bg: "rgba(107,114,128,0.2)", color: "#6b7280" },
];

export function getBadgeStyle(type: string): React.CSSProperties {
  if (!type || type === "general") {
    const c = BADGE_PALETTE[BADGE_PALETTE.length - 1];
    return { background: c.bg, color: c.color };
  }
  let hash = 0;
  for (let i = 0; i < type.length; i++) hash = (hash * 31 + type.charCodeAt(i)) >>> 0;
  const c = BADGE_PALETTE[hash % (BADGE_PALETTE.length - 1)];
  return { background: c.bg, color: c.color };
}

export function formatCategoryLabel(key: string): string {
  const words = key.replace(/[_-]/g, " ").split(" ").filter(Boolean);
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Inquiries";
}

export function escapeHtml(str: string): string {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function formatWhatsAppText(raw: string): string {
  let text = escapeHtml(raw);
  text = text.replace(/```([^`]+)```/g, "<code>$1</code>");
  text = text.replace(/\*(\S(?:[^*\n]*\S)?)\*/g, "<strong>$1</strong>");
  text = text.replace(/_(\S(?:[^_\n]*\S)?)_/g, "<em>$1</em>");
  text = text.replace(/~(\S(?:[^~\n]*\S)?)~/g, "<del>$1</del>");
  return text.replace(/\n/g, "<br>");
}

export function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
}

export function pluralize(word: string): string {
  return word.endsWith("s") ? word : word + "s";
}

export function getApplicationStatus(session: IntakeSession): "Complete" | "Cancelled" | "In Progress" {
  if (session.complete && !session.silenced) return "Complete";
  if (session.silenced) return "Cancelled";
  return "In Progress";
}

export function statusStyle(status: "Complete" | "Cancelled" | "In Progress"): React.CSSProperties {
  if (status === "Complete")  return { background: "rgba(16,185,129,0.15)", color: "#10b981" };
  if (status === "Cancelled") return { background: "rgba(239,68,68,0.15)",  color: "#ef4444" };
  return                             { background: "rgba(245,158,11,0.15)", color: "#f59e0b" };
}
