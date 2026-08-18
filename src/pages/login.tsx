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

  // If Firebase already has a saved session, skip login entirely
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        const claims = tokenResult.claims as Record<string, unknown>;

        if (claims.role === "superadmin") {
          navigate("/superadmin", { replace: true });
        } else if (claims.clientId) {
          navigate(redirectTo || "/dashboard", { replace: true });
        } else {
          // Logged in but no role — show login form so they can use a proper account
          setChecking(false);
        }
      } else {
        setChecking(false);
      }
    });

    return () => unsub();
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
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        setError("Invalid email or password.");
      } else {
        setError("Sign in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Show nothing while checking saved session — avoids flash of login form
  if (checking) {
    return (
      <div className="login-page">
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Loading…</div>
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