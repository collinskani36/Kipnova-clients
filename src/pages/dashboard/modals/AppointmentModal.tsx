// ─── AppointmentModal ─────────────────────────────────────────────────────────
// Detail modal for a single appointment.
// Shows all fields, then three status-action buttons at the bottom.
// Status change is a single tap — no save button, optimistic update in useDashboard.
//
// Calendar hook: the full `appointment` object is available here.
// When you wire Google Calendar / phone reminders, add the trigger inside
// updateAppointmentStatus after the PATCH call succeeds.

import { Appointment, AppointmentStatus } from "../../types";

interface Props {
  appointment: Appointment | null;
  onClose: () => void;
  appointmentsFlow: {
    enabled: boolean;
    tabLabel: string;
    tabIcon: string;
    entityLabel: string;
    fieldLabels: Record<string, string>;
  };
  appointmentFieldLabel: (key: string) => string;
  updateAppointmentStatus: (id: string, status: AppointmentStatus) => Promise<void>;
  appointmentStatusUpdating: boolean;
}

function formatTime(seconds: number): string {
  return new Date(seconds * 1000).toLocaleString("en-KE", {
    weekday: "short", day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

const STATUS_ACTIONS: {
  status: AppointmentStatus;
  label: string;
  cls: string;
  activeLabel: string;
}[] = [
  { status: "confirmed", label: "Confirm",        cls: "appt-action--confirm",  activeLabel: "Confirmed ✓" },
  { status: "cancelled", label: "Cancel",          cls: "appt-action--cancel",   activeLabel: "Cancelled"   },
  { status: "pending",   label: "Reset to Pending", cls: "appt-action--pending", activeLabel: "Pending"     },
];

export default function AppointmentModal({
  appointment,
  onClose,
  appointmentsFlow,
  appointmentFieldLabel,
  updateAppointmentStatus,
  appointmentStatusUpdating,
}: Props) {
  if (!appointment) return null;

  const isActive = (s: AppointmentStatus) => appointment.status === s;

  async function handleStatus(status: AppointmentStatus) {
    if (isActive(status) || appointmentStatusUpdating) return;
    await updateAppointmentStatus(appointment.id, status);
  }

  // Fields to render in order — skip id and clientId (internal)
  const displayFields: { key: string; value: string }[] = [
    { key: "customerName",  value: appointment.customerName  },
    { key: "customerPhone", value: appointment.customerPhone },
    { key: "service",       value: appointment.service       },
    { key: "branch",        value: appointment.branch        },
    { key: "requestedTime", value: appointment.requestedTime },
    ...(appointment.createdAt
      ? [{ key: "createdAt", value: formatTime(appointment.createdAt._seconds) }]
      : []),
  ].filter((f) => f.value);

  return (
    <div
      className="appt-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${appointmentsFlow.entityLabel} details`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="appt-modal">
        {/* ── Header ── */}
        <div className="appt-modal__header">
          <div className="appt-modal__header-left">
            <span className="appt-modal__icon" aria-hidden="true">📅</span>
            <div>
              <h3 className="appt-modal__title">
                {appointment.customerName || appointment.customerPhone}
              </h3>
              <p className="appt-modal__subtitle">{appointment.service}</p>
            </div>
          </div>
          <button className="appt-modal__close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* ── Fields ── */}
        <div className="appt-modal__fields">
          {displayFields.map(({ key, value }) => (
            <div key={key} className="appt-modal__field">
              <span className="appt-modal__field-label">{appointmentFieldLabel(key)}</span>
              <span className={`appt-modal__field-value${key === "requestedTime" ? " appt-modal__field-value--time" : ""}`}>
                {value}
              </span>
            </div>
          ))}

          {/* Current status display */}
          <div className="appt-modal__field">
            <span className="appt-modal__field-label">Status</span>
            <span className={`appt-status-badge appt-status-badge--lg status--${appointment.status}`}>
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </span>
          </div>
        </div>

        {/* ── Status actions ── */}
        <div className="appt-modal__actions">
          <p className="appt-modal__actions-label">Update status</p>
          <div className="appt-modal__action-row">
            {STATUS_ACTIONS.map(({ status, label, cls, activeLabel }) => (
              <button
                key={status}
                className={`appt-action-btn ${cls}${isActive(status) ? " active" : ""}`}
                onClick={() => handleStatus(status)}
                disabled={isActive(status) || appointmentStatusUpdating}
                aria-pressed={isActive(status)}
              >
                {isActive(status) ? activeLabel : label}
              </button>
            ))}
          </div>
          {appointmentStatusUpdating && (
            <p className="appt-modal__saving">Saving…</p>
          )}
        </div>
      </div>
    </div>
  );
}
