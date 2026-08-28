// ─── AppointmentsSection ──────────────────────────────────────────────────────
// Appointments tab — card grid with status filter row.
// Premium feel: dark cards, gold accent, animated status badges.
// Calendar integration hook-ready: the full Appointment object is passed
// into AppointmentModal so future calendar/reminder wiring has everything it needs.

import { useState } from "react";
import { Appointment, AppointmentStatus } from "../../types";

interface Props {
  appointmentsFlow: {
    enabled: boolean;
    tabLabel: string;
    tabIcon: string;
    entityLabel: string;
    fieldLabels: Record<string, string>;
  };
  appointments: Appointment[];
  appointmentsLoading: boolean;
  setAppointmentModal: (a: Appointment | null) => void;
}

type Filter = "all" | AppointmentStatus;

const STATUS_FILTERS: { key: Filter; label: string }[] = [
  { key: "all",       label: "All"       },
  { key: "pending",   label: "Pending"   },
  { key: "confirmed", label: "Confirmed" },
  { key: "cancelled", label: "Cancelled" },
];

function formatTime(seconds: number): string {
  return new Date(seconds * 1000).toLocaleString("en-KE", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

export default function AppointmentsSection({
  appointmentsFlow,
  appointments,
  appointmentsLoading,
  setAppointmentModal,
}: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = filter === "all"
    ? appointments
    : appointments.filter((a) => a.status === filter);

  // Counts for filter badges
  const counts: Record<Filter, number> = {
    all:       appointments.length,
    pending:   appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    cancelled: appointments.filter((a) => a.status === "cancelled").length,
  };

  return (
    <section className="appointments-section">
      {/* ── Header ── */}
      <div className="appointments-header">
        <div className="appointments-title-row">
          <h2 className="appointments-heading">
            {appointmentsFlow.tabIcon} {appointmentsFlow.tabLabel}
          </h2>
          <span className="appointments-total-badge">{appointments.length}</span>
        </div>
        <p className="appointments-subheading">
          Manage and confirm customer bookings. Tap any card to update its status.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="appt-filter-row" role="tablist" aria-label="Filter appointments by status">
        {STATUS_FILTERS.map(({ key, label }) => (
          <button
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={`appt-filter-btn appt-filter-btn--${key}${filter === key ? " active" : ""}`}
            onClick={() => setFilter(key)}
          >
            {label}
            <span className="appt-filter-count">{counts[key]}</span>
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      {appointmentsLoading ? (
        <div className="appointments-loading">
          <div className="appt-spinner" />
          <span>Loading appointments…</span>
        </div>
      ) : visible.length === 0 ? (
        <div className="appointments-empty">
          <span className="appointments-empty-icon">📅</span>
          <p className="appointments-empty-title">
            {filter === "all"
              ? `No ${appointmentsFlow.entityLabel.toLowerCase()}s yet`
              : `No ${filter} appointments`}
          </p>
          {filter === "all" && (
            <p className="appointments-empty-hint">
              Appointments are captured automatically when customers send{" "}
              <code>Appointment: [time]</code> on WhatsApp.
            </p>
          )}
        </div>
      ) : (
        <div className="appt-grid">
          {visible.map((appt) => (
            <AppointmentCard
              key={appt.id}
              appointment={appt}
              onClick={() => setAppointmentModal(appt)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// ─── AppointmentCard ──────────────────────────────────────────────────────────

interface CardProps {
  appointment: Appointment;
  onClick: () => void;
}

const STATUS_META: Record<AppointmentStatus, { label: string; cls: string }> = {
  pending:   { label: "Pending",   cls: "status--pending"   },
  confirmed: { label: "Confirmed", cls: "status--confirmed" },
  cancelled: { label: "Cancelled", cls: "status--cancelled" },
};

function AppointmentCard({ appointment: a, onClick }: CardProps) {
  const meta = STATUS_META[a.status] ?? STATUS_META.pending;

  return (
    <button className="appt-card" onClick={onClick} aria-label={`View appointment for ${a.customerName}`}>
      {/* Status stripe */}
      <span className={`appt-card__stripe appt-card__stripe--${a.status}`} aria-hidden="true" />

      <div className="appt-card__body">
        {/* Top row: name + status badge */}
        <div className="appt-card__top">
          <span className="appt-card__name">{a.customerName || a.customerPhone}</span>
          <span className={`appt-status-badge ${meta.cls}`}>{meta.label}</span>
        </div>

        {/* Service */}
        {a.service && (
          <p className="appt-card__service">{a.service}</p>
        )}

        {/* Time — most prominent field */}
        <p className="appt-card__time">
          <span className="appt-card__time-icon" aria-hidden="true">⏰</span>
          {a.requestedTime}
        </p>

        {/* Footer: branch + booked-at */}
        <div className="appt-card__footer">
          {a.branch && (
            <span className="appt-card__branch">
              <span aria-hidden="true">📍</span> {a.branch}
            </span>
          )}
          {a.createdAt && (
            <span className="appt-card__booked-at">
              {formatTime(a.createdAt._seconds)}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
