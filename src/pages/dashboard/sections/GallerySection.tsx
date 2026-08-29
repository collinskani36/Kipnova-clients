// ─── GallerySection ───────────────────────────────────────────────────────────
// Hairstyle image gallery — admin uploads images here; the AI references them
// when customers ask about specific styles on WhatsApp.
//
// Each image maps to a slug (e.g. "knotless_braids") that the AI embeds in its
// response as [SEND_IMAGE: knotless_braids]. The webhook resolves the slug →
// Cloudflare R2 URL → WhatsApp image message.
//
// Props come from useDashboard (gallery slice).

import { useRef, useState } from "react";
import { GalleryImage } from "../types";

interface Props {
  images: GalleryImage[];
  loading: boolean;
  uploading: boolean;
  uploadGalleryImage: (file: File, slug: string, label: string) => Promise<void>;
  deleteGalleryImage: (slug: string) => Promise<void>;
}

// ── Slug helpers ──────────────────────────────────────────────────────────────

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

function toLabel(slug: string): string {
  return slug.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Upload modal ──────────────────────────────────────────────────────────────

interface UploadModalProps {
  onClose: () => void;
  onUpload: (file: File, slug: string, label: string) => Promise<void>;
  uploading: boolean;
  existingSlugs: string[];
}

function UploadModal({ onClose, onUpload, uploading, existingSlugs }: UploadModalProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [label, setLabel] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [error, setError] = useState("");

  function handleFile(f: File) {
    if (!f.type.startsWith("image/")) {
      setError("Only image files are accepted.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setError("Image must be under 5 MB.");
      return;
    }
    setError("");
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  function handleLabelChange(val: string) {
    setLabel(val);
    if (!slugEdited) setSlug(toSlug(val));
  }

  function handleSlugChange(val: string) {
    setSlugEdited(true);
    setSlug(toSlug(val));
  }

  async function handleSubmit() {
    if (!file) { setError("Choose an image first."); return; }
    if (!slug)  { setError("Style ID cannot be empty."); return; }
    if (existingSlugs.includes(slug)) {
      setError(`"${slug}" already exists — uploading will replace that image.`);
      // Still allow — backend does an upsert; just warn. Clear after 1.5 s.
      setTimeout(() => setError(""), 1500);
    }
    await onUpload(file, slug, label || toLabel(slug));
  }

  return (
    <div className="gallery-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="gallery-modal">
        <div className="gallery-modal-header">
          <h3>Add hairstyle image</h3>
          <button className="gallery-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Drop zone */}
        <div
          className={`gallery-dropzone${file ? " has-file" : ""}`}
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files[0];
            if (f) handleFile(f);
          }}
        >
          {preview ? (
            <img src={preview} alt="Preview" className="gallery-dropzone-preview" />
          ) : (
            <>
              <span className="gallery-dropzone-icon">🖼️</span>
              <p>Drop an image here or <span className="gallery-dropzone-link">browse</span></p>
              <p className="gallery-dropzone-hint">JPEG, PNG, WebP · max 5 MB</p>
            </>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
          />
        </div>

        {/* Label */}
        <div className="gallery-field">
          <label className="gallery-field-label">Style name</label>
          <input
            className="gallery-field-input"
            type="text"
            placeholder="e.g. Knotless Braids"
            value={label}
            onChange={(e) => handleLabelChange(e.target.value)}
          />
        </div>

        {/* Slug */}
        <div className="gallery-field">
          <label className="gallery-field-label">
            Style ID <span className="gallery-field-hint">(used by the AI — no spaces)</span>
          </label>
          <input
            className="gallery-field-input gallery-field-mono"
            type="text"
            placeholder="e.g. knotless_braids"
            value={slug}
            onChange={(e) => handleSlugChange(e.target.value)}
          />
        </div>

        {error && <p className="gallery-upload-error">{error}</p>}

        <div className="gallery-modal-actions">
          <button className="gallery-btn-secondary" onClick={onClose} disabled={uploading}>
            Cancel
          </button>
          <button
            className="gallery-btn-primary"
            onClick={handleSubmit}
            disabled={uploading || !file || !slug}
          >
            {uploading ? "Uploading…" : "Save image"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Image card ────────────────────────────────────────────────────────────────

interface CardProps {
  image: GalleryImage;
  onDelete: (slug: string) => void;
}

function ImageCard({ image, onDelete }: CardProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="gallery-card">
      <div className="gallery-card-image-wrap">
        <img src={image.url} alt={image.label} className="gallery-card-image" loading="lazy" />
      </div>
      <div className="gallery-card-body">
        <p className="gallery-card-label">{image.label}</p>
        <p className="gallery-card-slug">{image.slug}</p>
      </div>
      <div className="gallery-card-footer">
        {confirmDelete ? (
          <>
            <span className="gallery-card-confirm-text">Delete?</span>
            <button className="gallery-card-btn gallery-card-btn-danger" onClick={() => onDelete(image.slug)}>
              Yes, delete
            </button>
            <button className="gallery-card-btn" onClick={() => setConfirmDelete(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button
            className="gallery-card-btn gallery-card-btn-danger"
            onClick={() => setConfirmDelete(true)}
          >
            🗑 Remove
          </button>
        )}
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

export default function GallerySection({
  images,
  loading,
  uploading,
  uploadGalleryImage,
  deleteGalleryImage,
}: Props) {
  const [showUpload, setShowUpload] = useState(false);

  async function handleUpload(file: File, slug: string, label: string) {
    await uploadGalleryImage(file, slug, label);
    setShowUpload(false);
  }

  return (
    <div className="section-container">
      {/* Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">Hairstyle Gallery</h2>
          <p className="section-subtitle">
            Images the AI sends to customers when they ask about a specific style.
            Each image maps to a style ID that Bloo uses in conversation.
          </p>
        </div>
        <button className="gallery-btn-primary" onClick={() => setShowUpload(true)}>
          + Add image
        </button>
      </div>

      {/* Body */}
      {loading ? (
        <div className="gallery-loading">
          <div className="app-spinner" />
          <p>Loading gallery…</p>
        </div>
      ) : images.length === 0 ? (
        <div className="gallery-empty">
          <span className="gallery-empty-icon">💇‍♀️</span>
          <p className="gallery-empty-title">No images yet</p>
          <p className="gallery-empty-sub">
            Add your first hairstyle image so Bloo can show customers what you offer.
          </p>
          <button className="gallery-btn-primary" onClick={() => setShowUpload(true)}>
            Add first image
          </button>
        </div>
      ) : (
        <>
          <p className="gallery-count">{images.length} style{images.length !== 1 ? "s" : ""}</p>
          <div className="gallery-grid">
            {images.map((img) => (
              <ImageCard key={img.slug} image={img} onDelete={deleteGalleryImage} />
            ))}
          </div>
        </>
      )}

      {/* Upload modal */}
      {showUpload && (
        <UploadModal
          onClose={() => setShowUpload(false)}
          onUpload={handleUpload}
          uploading={uploading}
          existingSlugs={images.map((i) => i.slug)}
        />
      )}
    </div>
  );
}
