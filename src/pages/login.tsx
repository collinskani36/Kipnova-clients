import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const unauthorizedError = searchParams.get("error") === "unauthorized";
  const redirectTo = searchParams.get("redirect") || null;

  useEffect(() => {
    let cancelled = false;

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (cancelled) return;

      try {
        if (user) {
          const tokenResult = await user.getIdTokenResult();
          if (cancelled) return;

          const claims = tokenResult.claims as Record<string, unknown>;

          if (claims.role === "superadmin") {
            navigate("/superadmin", { replace: true });
          } else if (claims.clientId) {
            navigate(redirectTo || "/dashboard", { replace: true });
          } else {
            setChecking(false);
          }
        } else {
          setChecking(false);
        }
      } catch {
        // If anything fails (network, token), just show the login form
        if (!cancelled) setChecking(false);
      }
    });

    // Safety net — if Firebase takes more than 5 seconds, show login form anyway
    const timeout = setTimeout(() => {
      if (!cancelled) setChecking(false);
    }, 5000);

    return () => {
      cancelled = true;
      unsub();
      clearTimeout(timeout);
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const tokenResult = await credential.user.getIdTokenResult();
      const claims = tokenResult.claims as Record<string, unknown>;

      if (claims.role === "superadmin") {
        navigate("/superadmin", { replace: true });
      } else if (claims.clientId) {
        navigate(redirectTo || "/dashboard", { replace: true });
      } else {
        await auth.signOut();
        setError("Your account has no client assigned. Contact your administrator.");
      }
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password" ||
        code === "auth/user-not-found"
      ) {
        setError("Invalid email or password.");
      } else {
        setError("Sign in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="login-page" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 36, height: 36,
          border: "3px solid rgba(255,255,255,0.15)",
          borderTopColor: "#3b82f6",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite"
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Nova</h1>
          <p>Client Dashboard</p>
        </div>

        {unauthorizedError && (
          <div className="login-error">
            You don't have permission to access that page.
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <a href="/" className="back-home">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}