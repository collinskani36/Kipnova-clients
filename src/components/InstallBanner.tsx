interface InstallBannerProps {
  businessName: string;
  clientId: string;
  primaryColor?: string;
  // Hoisted from Dashboard so the hook runs on first render,
  // before branding loads, ensuring beforeinstallprompt is never missed.
  showBanner: boolean;
  onInstall: () => void;
  onDismiss: () => void;
}

export default function InstallBanner({ businessName, primaryColor, showBanner, onInstall, onDismiss }: InstallBannerProps) {
  if (!showBanner) return null;

  const accentColor = primaryColor || "#2563eb";

  return (
    <div style={{
      position: "fixed",
      bottom: "1.25rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999,
      background: "#1a1d27",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "1rem",
      padding: "0.85rem 1.1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.85rem",
      boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
      maxWidth: "calc(100vw - 2rem)",
      width: "360px",
    }}>
      <img
        src="/nova-icon-192.png"
        alt={businessName}
        style={{ width: 40, height: 40, borderRadius: "10px", flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.2 }}>
          Install {businessName}
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", marginTop: "0.15rem" }}>
          Add to your home screen for quick access
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
        <button
          onClick={onDismiss}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.5)",
            borderRadius: "0.5rem",
            padding: "0.4rem 0.65rem",
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
        >
          Not now
        </button>
        <button
          onClick={onInstall}
          style={{
            background: accentColor,
            border: "none",
            color: "#fff",
            borderRadius: "0.5rem",
            padding: "0.4rem 0.85rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Install
        </button>
      </div>
    </div>
  );
}