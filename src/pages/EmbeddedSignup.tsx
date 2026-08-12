import { useState } from "react";
import "../styles/EmbeddedSignup.css";

import useFacebookSdk from "../hooks/useFacebookSdk";
import { launchEmbeddedSignup } from "../services/meta";
import { auth } from "../config/firebase";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://app.kipnovatech.co.ke";

export default function EmbeddedSignup() {
  const sdkReady = useFacebookSdk();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [done, setDone] = useState(false);

  async function handleSignup() {
    if (!sdkReady) {
      alert("Facebook SDK is still loading...");
      return;
    }

    try {
      setLoading(true);
      setStatus("Opening Meta Embedded Signup...");

      const response: any = await launchEmbeddedSignup();

      console.log("========== META RESPONSE ==========");
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
      console.log("===================================");

      // --- Extract the code Meta returned ---
      const code = response?.authResponse?.code;

      if (!code) {
        // User closed the popup without completing, or Meta returned no code
        setStatus("");
        alert("Signup was cancelled or did not complete. Please try again.");
        return;
      }

      setStatus("Signup completed. Connecting your WhatsApp account...");

      // Get the logged-in admin's Firebase ID token so the backend
      // knows which clientId to save the WABA details under
      const currentUser = auth.currentUser;
      if (!currentUser) {
        alert("You are not logged in. Please log in and try again.");
        return;
      }
      const idToken = await currentUser.getIdToken();

      // Send code to backend for exchange + Firestore save
      const exchangeRes = await fetch(`${BACKEND_URL}/api/meta/exchange`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ code }),
      });

      const exchangeData = await exchangeRes.json();

      if (!exchangeRes.ok) {
        console.error("Exchange failed:", exchangeData);
        alert(
          `Failed to connect WhatsApp account: ${
            exchangeData?.error || "Unknown error"
          }. Please try again or contact support.`
        );
        setStatus("");
        return;
      }

      console.log("✅ Exchange successful:", exchangeData);
      setDone(true);
      setStatus("Your WhatsApp Business account is now connected to Kipnova!");
    } catch (err) {
      console.error(err);
      alert("Embedded Signup cancelled or failed.");
      setStatus("");
    } finally {
      setLoading(false);
    }
  }

  // Success screen shown after exchange completes
  if (done) {
    return (
      <div className="es-page">
        <div className="panel">
          <div className="badge">Connected ✓</div>
          <h1>You're all set!</h1>
          <p>
            Your WhatsApp Business account has been successfully connected to
            Kipnova. You can now close this page or head to your dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="es-page">

      <div className="panel">

        <div className="badge">
          Secure Meta Onboarding
        </div>

        <h1>
          Connect Your WhatsApp Business
        </h1>

        <p>
          You'll now complete Meta's official onboarding.
          Kipnova never asks for your Facebook password.
        </p>

        <div className="steps">

          <div>
            ✓ Verify your business
          </div>

          <div>
            ✓ Connect WhatsApp Business
          </div>

          <div>
            ✓ Verify your phone number
          </div>

          <div>
            ✓ Return automatically to Kipnova
          </div>

        </div>

        <button
          className="continueBtn"
          disabled={loading || !sdkReady}
          onClick={handleSignup}
        >

          {!sdkReady
            ? "Loading Facebook..."

            : loading
              ? "Connecting..."

              : "Continue with Facebook"}

        </button>

        {loading && (

          <div
            style={{
              marginTop: 30,
              textAlign: "center",
              color: "#2563eb",
              fontWeight: 600
            }}
          >

            {status}

          </div>

        )}

        <small>

          Powered by Meta Embedded Signup

        </small>

      </div>

    </div>
  );
}