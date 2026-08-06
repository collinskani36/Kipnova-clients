import { Navigate } from "react-router-dom";
import { useAuth, UserRole } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
  requiredRole: UserRole;
}

export default function ProtectedRoute({ children, requiredRole }: Props) {
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

  if (!user) return <Navigate to="/login" replace />;

  // Superadmin trying to reach /dashboard → send to /superadmin
  if (requiredRole === "admin" && role === "superadmin") {
    return <Navigate to="/superadmin" replace />;
  }

  // Client admin trying to reach /superadmin → send to /dashboard
  if (requiredRole === "superadmin" && role !== "superadmin") {
    return <Navigate to="/login?error=unauthorized" replace />;
  }

  // Not assigned any role (no clientId claim, not superadmin)
  if (!role) return <Navigate to="/login?error=unauthorized" replace />;

  return <>{children}</>;
}
