import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import EmbeddedSignup from "./pages/EmbeddedSignup";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Superadmin from "./pages/Superadmin";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/embedded-signup" element={<EmbeddedSignup />} />

        {/* /login: redirect to dashboard if already authenticated */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/superadmin"
          element={
            <ProtectedRoute requiredRole="superadmin">
              <Superadmin />
            </ProtectedRoute>
          }
        />

        {/* PWA fallback: unknown routes go to /login, not the landing page */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

