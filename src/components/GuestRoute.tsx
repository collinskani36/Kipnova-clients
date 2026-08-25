// ─── GuestRoute ───────────────────────────────────────────────────────────────
// Wraps routes that should only be visible to unauthenticated users (e.g. /login).
// If Firebase has already resolved a session, redirect to the correct destination.
// While loading, shows the same spinner as ProtectedRoute for consistency.

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

export default function GuestRoute({ children }: Props) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        position: "fixed", inset: 0, background: "#0f172a",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <div style={{
          width: 36, height: 36,
          border: "3px solid rgba(255,255,255,0.25)",
          borderTopColor: "#fff",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite"
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Not logged in — show the guest page (login)
  if (!user || !role) return <>{children}</>;

  // Logged in — send to the right place
  if (role === "superadmin") return <Navigate to="/superadmin" replace />;
  return <Navigate to="/dashboard" replace />;
}
