import { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // Firebase Authentication
    console.log({
      email,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Kipnova</h1>
          <p>Client Dashboard</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Sign In
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