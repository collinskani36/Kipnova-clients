import React from "react";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      <header className="nav">
        <div className="logo">Kipnova</div>
        <a className="signin" href="/login">Sign In</a>
      </header>

      <main className="hero">
        <section className="left">
          <span className="badge">Official Meta WhatsApp Platform</span>
          <h1>The AI Receptionist for Modern Businesses</h1>
          <p>
            Connect your WhatsApp Business using Meta's official Embedded Signup
            and let Kipnova automate enquiries, bookings and customer support.
          </p>

          <div className="buttons">
            {/* Get Started now goes to /login first — the client must be
                authenticated before reaching the Embedded Signup page so
                their Meta token is saved to the correct Firebase client. */}
            <a href="/login" className="primary">Get Started</a>
            <a href="/login" className="secondary">Existing Client</a>
          </div>

          <div className="stats">
            <div className="card"><strong>5 min</strong><span>Setup</span></div>
            <div className="card"><strong>24/7</strong><span>AI Replies</span></div>
            <div className="card"><strong>Secure</strong><span>Meta OAuth</span></div>
          </div>
        </section>

        <section className="phone">
          <div className="phone-frame">
            <div className="screen">
              <div className="msg leftmsg">Hi, do you offer appointments?</div>
              <div className="msg rightmsg">Yes! What day works for you?</div>
              <div className="msg leftmsg">Tomorrow morning.</div>
              <div className="msg rightmsg">Done. You're booked ✅</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
