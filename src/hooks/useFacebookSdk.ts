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
    if (window.FB) {
      setReady(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: APP_ID,

        cookie: true,

        xfbml: false,

        version: "v24.0",
      });

      setReady(true);
    };

    const id = "facebook-jssdk";

    if (!document.getElementById(id)) {
      const js = document.createElement("script");

      js.id = id;

      js.src = "https://connect.facebook.net/en_US/sdk.js";

      js.async = true;

      js.defer = true;

      document.body.appendChild(js);
    }
  }, []);

  return ready;
}