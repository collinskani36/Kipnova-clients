import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const APP_ID = import.meta.env.VITE_META_APP_ID || "";

export default function useFacebookSdk() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // SDK already loaded
    if (window.FB) {
      setReady(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v26.0",
      });

      console.log("✅ Facebook SDK initialized");
      setReady(true);
    };

    const id = "facebook-jssdk";

    if (!document.getElementById(id)) {
      const js = document.createElement("script");

      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      js.async = true;
      js.defer = true;
      js.crossOrigin = "anonymous";

      document.body.appendChild(js);
    }
  }, []);

  return ready;
}