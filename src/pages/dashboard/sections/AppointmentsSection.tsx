// ─── AppointmentsSection ──────────────────────────────────────────────────────

import { useState } from "react";
import { Appointment, AppointmentStatus } from "../types";

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

  const counts: Record<Filter, number> = {
    all:       appointments.length,
    pending:   appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    cancelled: appointments.filter((a) => a.status === "cancelled").length,
  };

  return (
    <section className="appt-section">
      {/* ── Header ── */}
      <div className="appt-section__header">
        <div className="appt-section__title-row">
          <h2 className="appt-section__heading">
            {appointmentsFlow.tabIcon}&nbsp;{appointmentsFlow.tabLabel}
          </h2>
          <span className="appt-section__total">{appointments.length}</span>
        </div>
        <p className="appt-section__sub">
          Manage and confirm customer bookings. Tap any card to update its status.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="appt-filters" role="tablist">
        {STATUS_FILTERS.map(({ key, label }) => (
          <button
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={`appt-filter${filter === key ? " appt-filter--active" : ""} appt-filter--${key}`}
            onClick={() => setFilter(key)}
          >
            <span className="appt-filter__label">{label}</span>
            <span className="appt-filter__count">{counts[key]}</span>
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      {appointmentsLoading ? (
        <div className="appt-loading">
          <div className="appt-spinner" />
          <span>Loading appointments…</span>
        </div>
      ) : visible.length === 0 ? (
        <div className="appt-empty">
          <span className="appt-empty__icon">📅</span>
          <p className="appt-empty__title">
            {filter === "all"
              ? `No ${appointmentsFlow.entityLabel.toLowerCase()}s yet`
              : `No ${filter} appointments`}
          </p>
          {filter === "all" && (
            <p className="appt-empty__hint">
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

const STATUS_META: Record<AppointmentStatus, { label: string }> = {
  pending:   { label: "Pending"   },
  confirmed: { label: "Confirmed" },
  cancelled: { label: "Cancelled" },
};

function AppointmentCard({ appointment: a, onClick }: CardProps) {
  const meta = STATUS_META[a.status] ?? STATUS_META.pending;

  return (
    <button
      className="appt-card"
      onClick={onClick}
      aria-label={`View appointment for ${a.customerName}`}
    >
      {/* Left status stripe */}
      <span className={`appt-card__stripe appt-card__stripe--${a.status}`} aria-hidden="true" />

      <div className="appt-card__body">
        {/* Row 1: name + status pill */}
        <div className="appt-card__top">
          <span className="appt-card__name">{a.customerName || a.customerPhone}</span>
          <span className={`appt-pill appt-pill--${a.status}`}>{meta.label}</span>
        </div>

        {/* Row 2: service (only if populated) */}
        {a.service && a.service !== "service" && (
          <p className="appt-card__service">{a.service}</p>
        )}

        {/* Row 3: time — most prominent */}
        <p className="appt-card__time">
          <span aria-hidden="true">⏰</span>
          {a.requestedTime}
        </p>

        {/* Row 4: branch + booked-at */}
        <div className="appt-card__footer">
          {a.branch && a.branch !== "branch" && (
            <span className="appt-card__branch">
              <span aria-hidden="true">📍</span>&nbsp;{a.branch}
            </span>
          )}
          {a.createdAt && (
            <span className="appt-card__date">{formatTime(a.createdAt._seconds)}</span>
          )}
        </div>
      </div>
    </button>
  );
}

