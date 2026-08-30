// ─── ServicesSection ──────────────────────────────────────────────────────────
// Service menu manager — admin adds, edits, and toggles availability of every
// service the business offers. The AI reads this live from Firestore so price
// changes take effect on the next customer message, no deploy needed.
//
// Each service has one or more variants (sub-options with individual prices).
// Single-price services: one variant with an empty label → shows "KES 500"
// Multi-variant services: e.g. Knotless Braids Small / Large → shows both prices
//
// Props come from useDashboard (services slice).

import { useState } from "react";
import { Service, ServiceVariant } from "../types";

// ── Constants ─────────────────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  "hair_services",
  "barber_services",
  "skin_beauty",
  "nails",
  "tattoo",
];

const CATEGORY_LABELS: Record<string, string> = {
  hair_services:   "Hair Services",
  barber_services: "Barbershop",
  skin_beauty:     "Skin & Beauty",
  nails:           "Nails",
  tattoo:          "Tattoo",
};

const CATEGORY_ICONS: Record<string, string> = {
  hair_services:   "💇‍♀️",
  barber_services: "💈",
  skin_beauty:     "✨",
  nails:           "💅",
  tattoo:          "🖋️",
};

// ── Props ─────────────────────────────────────────────────────────────────────

interface Props {
  services: Service[];
  loading: boolean;
  saving: boolean;
  upsertService: (service: Service) => Promise<void>;
  deleteService: (serviceId: string) => Promise<void>;
  toggleAvailable: (service: Service) => Promise<void>;
}

// ── Blank service factory ─────────────────────────────────────────────────────

function blankService(category = "hair_services"): Service {
  return {
    id: "",
    name: "",
    category,
    variants: [{ label: "", price: 0 }],
    priceOnRequest: false,
    available: true,
    sortOrder: 999,
  };
}

// ── Slug helper ───────────────────────────────────────────────────────────────

function toId(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s/&+]+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .replace(/_+/g, "_");
}

// ── Format price ──────────────────────────────────────────────────────────────

function fmt(price: number): string {
  return `KES ${Number(price).toLocaleString()}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Add / Edit Modal
// ─────────────────────────────────────────────────────────────────────────────

interface ModalProps {
  initial: Service;
  onClose: () => void;
  onSave: (s: Service) => Promise<void>;
  saving: boolean;
  isNew: boolean;
}

function ServiceModal({ initial, onClose, onSave, saving, isNew }: ModalProps) {
  const [form, setForm] = useState<Service>({ ...initial, variants: initial.variants.map(v => ({ ...v })) });
  const [idEdited, setIdEdited] = useState(!isNew);
  const [error, setError] = useState("");

  function setField<K extends keyof Service>(key: K, val: Service[K]) {
    setForm(f => ({ ...f, [key]: val }));
  }

  function handleNameChange(val: string) {
    setField("name", val);
    if (!idEdited) setField("id", toId(val));
  }

  function setVariant(i: number, key: keyof ServiceVariant, val: string | number) {
    setForm(f => {
      const variants = f.variants.map((v, idx) =>
        idx === i ? { ...v, [key]: key === "price" ? Number(val) : val } : v
      );
      return { ...f, variants };
    });
  }

  function addVariant() {
    setForm(f => ({ ...f, variants: [...f.variants, { label: "", price: 0 }] }));
  }

  function removeVariant(i: number) {
    setForm(f => ({ ...f, variants: f.variants.filter((_, idx) => idx !== i) }));
  }

  async function handleSave() {
    if (!form.name.trim()) { setError("Service name is required."); return; }
    if (!form.id.trim())   { setError("Service ID is required."); return; }
    if (!form.priceOnRequest && form.variants.some(v => v.price < 0)) {
      setError("Prices must be 0 or greater."); return;
    }
    setError("");
    await onSave(form);
  }

  return (
    <div
      className="svc-modal-backdrop"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="svc-modal">
        {/* Header */}
        <div className="svc-modal-header">
          <h3>{isNew ? "Add service" : "Edit service"}</h3>
          <button className="svc-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Name */}
        <div className="svc-field">
          <label className="svc-field-label">Service name</label>
          <input
            className="svc-field-input"
            placeholder="e.g. Knotless Braids"
            value={form.name}
            onChange={e => handleNameChange(e.target.value)}
          />
        </div>

        {/* ID */}
        <div className="svc-field">
          <label className="svc-field-label">
            Service ID <span className="svc-field-hint">(auto-generated, must be unique)</span>
          </label>
          <input
            className="svc-field-input svc-field-mono"
            placeholder="e.g. knotless_braids"
            value={form.id}
            onChange={e => { setIdEdited(true); setField("id", toId(e.target.value)); }}
            disabled={!isNew}
          />
        </div>

        {/* Category */}
        <div className="svc-field">
          <label className="svc-field-label">Category</label>
          <select
            className="svc-field-input svc-field-select"
            value={form.category}
            onChange={e => setField("category", e.target.value)}
          >
            {CATEGORY_ORDER.map(cat => (
              <option key={cat} value={cat}>
                {CATEGORY_ICONS[cat]} {CATEGORY_LABELS[cat]}
              </option>
            ))}
          </select>
        </div>

        {/* Price on request toggle */}
        <label className="svc-toggle-row">
          <input
            type="checkbox"
            checked={form.priceOnRequest}
            onChange={e => setField("priceOnRequest", e.target.checked)}
          />
          <span className="svc-toggle-label">Price on consultation</span>
          <span className="svc-toggle-hint">AI will say "confirm with branch" instead of a price</span>
        </label>

        {/* Variants */}
        {!form.priceOnRequest && (
          <div className="svc-variants">
            <div className="svc-variants-header">
              <span className="svc-field-label">Pricing</span>
              <button className="svc-add-variant-btn" onClick={addVariant}>
                + Add variant
              </button>
            </div>

            {form.variants.map((v, i) => (
              <div key={i} className="svc-variant-row">
                <input
                  className="svc-field-input svc-variant-label-input"
                  placeholder={form.variants.length === 1 ? "Leave blank if no sub-option" : "e.g. Small, Large, Basic"}
                  value={v.label}
                  onChange={e => setVariant(i, "label", e.target.value)}
                />
                <div className="svc-variant-price-wrap">
                  <span className="svc-variant-currency">KES</span>
                  <input
                    className="svc-field-input svc-variant-price-input"
                    type="number"
                    min="0"
                    step="50"
                    placeholder="0"
                    value={v.price || ""}
                    onChange={e => setVariant(i, "price", e.target.value)}
                  />
                </div>
                {form.variants.length > 1 && (
                  <button
                    className="svc-remove-variant-btn"
                    onClick={() => removeVariant(i)}
                    aria-label="Remove variant"
                  >✕</button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Available */}
        <label className="svc-toggle-row">
          <input
            type="checkbox"
            checked={form.available}
            onChange={e => setField("available", e.target.checked)}
          />
          <span className="svc-toggle-label">Currently available</span>
          <span className="svc-toggle-hint">Unavailable services are hidden from the AI</span>
        </label>

        {error && <p className="svc-error">{error}</p>}

        {/* Actions */}
        <div className="svc-modal-actions">
          <button className="svc-btn-secondary" onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button className="svc-btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? "Saving…" : isNew ? "Add service" : "Save changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Service row
// ─────────────────────────────────────────────────────────────────────────────

interface RowProps {
  service: Service;
  onEdit: (s: Service) => void;
  onDelete: (id: string) => void;
  onToggle: (s: Service) => void;
}

function ServiceRow({ service, onEdit, onDelete, onToggle }: RowProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  function renderPrice() {
    if (service.priceOnRequest) return <span className="svc-price-request">On consultation</span>;
    if (!service.variants || service.variants.length === 0) return <span className="svc-price-dim">—</span>;
    if (service.variants.length === 1 && !service.variants[0].label) {
      return <span className="svc-price-single">{fmt(service.variants[0].price)}</span>;
    }
    return (
      <div className="svc-price-variants">
        {service.variants.map((v, i) => (
          <span key={i} className="svc-price-chip">
            {v.label && <span className="svc-price-chip-label">{v.label}</span>}
            {fmt(v.price)}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`svc-row${service.available ? "" : " svc-row--unavailable"}`}>
      <div className="svc-row-main">
        <div className="svc-row-info">
          <span className="svc-row-name">{service.name}</span>
          <span className="svc-row-id">{service.id}</span>
        </div>
        <div className="svc-row-price">{renderPrice()}</div>
      </div>

      <div className="svc-row-actions">
        {/* Available toggle */}
        <button
          className={`svc-avail-btn${service.available ? " svc-avail-btn--on" : " svc-avail-btn--off"}`}
          onClick={() => onToggle(service)}
          title={service.available ? "Mark unavailable" : "Mark available"}
        >
          {service.available ? "● Live" : "○ Off"}
        </button>

        {/* Edit */}
        <button className="svc-action-btn" onClick={() => onEdit(service)}>
          ✏️ Edit
        </button>

        {/* Delete */}
        {confirmDelete ? (
          <>
            <button
              className="svc-action-btn svc-action-btn--danger"
              onClick={() => onDelete(service.id)}
            >
              Confirm delete
            </button>
            <button className="svc-action-btn" onClick={() => setConfirmDelete(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button
            className="svc-action-btn svc-action-btn--danger-ghost"
            onClick={() => setConfirmDelete(true)}
          >
            🗑
          </button>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesSection({
  services,
  loading,
  saving,
  upsertService,
  deleteService,
  toggleAvailable,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("hair_services");
  const [modal, setModal] = useState<{ service: Service; isNew: boolean } | null>(null);

  // Filter to active category
  const visible = services.filter(s => s.category === activeCategory);

  // Category counts for tab badges
  const counts: Record<string, number> = {};
  for (const cat of CATEGORY_ORDER) counts[cat] = services.filter(s => s.category === cat).length;

  function openAdd() {
    setModal({ service: blankService(activeCategory), isNew: true });
  }

  function openEdit(s: Service) {
    setModal({ service: { ...s, variants: s.variants.map(v => ({ ...v })) }, isNew: false });
  }

  async function handleSave(s: Service) {
    await upsertService(s);
    setModal(null);
  }

  return (
    <div className="section-container">
      {/* Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">Services & Pricing</h2>
          <p className="section-subtitle">
            The AI reads this list live — update a price here and it takes effect
            on the next customer message, no redeploy needed.
          </p>
        </div>
        <button className="svc-btn-primary" onClick={openAdd}>
          + Add service
        </button>
      </div>

      {/* Category tabs */}
      <div className="svc-tabs">
        {CATEGORY_ORDER.map(cat => (
          <button
            key={cat}
            className={`svc-tab${activeCategory === cat ? " svc-tab--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            <span className="svc-tab-icon">{CATEGORY_ICONS[cat]}</span>
            <span className="svc-tab-label">{CATEGORY_LABELS[cat]}</span>
            {counts[cat] > 0 && (
              <span className="svc-tab-count">{counts[cat]}</span>
            )}
          </button>
        ))}
      </div>

      {/* Service list */}
      {loading ? (
        <div className="svc-loading">
          <div className="app-spinner" />
          <p>Loading services…</p>
        </div>
      ) : visible.length === 0 ? (
        <div className="svc-empty">
          <span className="svc-empty-icon">{CATEGORY_ICONS[activeCategory]}</span>
          <p className="svc-empty-title">No {CATEGORY_LABELS[activeCategory]} services yet</p>
          <p className="svc-empty-sub">Add one so the AI knows what to quote customers.</p>
          <button className="svc-btn-primary" onClick={openAdd}>
            Add service
          </button>
        </div>
      ) : (
        <div className="svc-list">
          <div className="svc-list-header">
            <span>Service</span>
            <span>Pricing</span>
            <span>Actions</span>
          </div>
          {visible.map(s => (
            <ServiceRow
              key={s.id}
              service={s}
              onEdit={openEdit}
              onDelete={deleteService}
              onToggle={toggleAvailable}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {modal && (
        <ServiceModal
          initial={modal.service}
          isNew={modal.isNew}
          onClose={() => setModal(null)}
          onSave={handleSave}
          saving={saving}
        />
      )}
    </div>
  );
}
