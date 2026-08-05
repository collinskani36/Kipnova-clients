import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import EmbeddedSignup from "./pages/EmbeddedSignup";
import Login from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/embedded-signup"
          element={<EmbeddedSignup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}