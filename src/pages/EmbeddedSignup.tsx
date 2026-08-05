import { useState } from "react";
import "../styles/EmbeddedSignup.css";

import useFacebookSdk from "../hooks/useFacebookSdk";
import { launchEmbeddedSignup } from "../services/meta";

export default function EmbeddedSignup() {
  const sdkReady = useFacebookSdk();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  async function handleSignup() {
  if (!sdkReady) {
    alert("Facebook SDK is still loading...");
    return;
  }

  try {
    setLoading(true);
    setStatus("Opening Meta Embedded Signup...");

    const response = await launchEmbeddedSignup();

    console.log("========== META RESPONSE ==========");
    console.log(response);
    console.log(JSON.stringify(response, null, 2));
    console.log("===================================");

    setStatus("Meta signup completed. Check browser console.");

  } catch (err) {
    console.error(err);
    alert("Embedded Signup cancelled or failed.");
  } finally {
    setLoading(false);
    }
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