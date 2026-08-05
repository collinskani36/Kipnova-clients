// src/services/meta.ts

declare global {
  interface Window {
    FB: any;
  }
}

export const META_APP_ID = import.meta.env.VITE_META_APP_ID || "";
export const META_CONFIG_ID = import.meta.env.VITE_META_CONFIG_ID || "";

/**
 * Launch Meta Embedded Signup
 */
export function launchEmbeddedSignup() {
  return new Promise((resolve, reject) => {
    if (!window.FB) {
      reject(new Error("Facebook SDK not loaded."));
      return;
    }

    window.FB.login(
      (response: any) => {
        if (!response) {
          reject(new Error("No response from Facebook."));
          return;
        }

        resolve(response);
      },
      {
        config_id: META_CONFIG_ID,

        response_type: "code",

        override_default_response_type: true,

        extras: {
          setup: {},
          featureType: "",
          sessionInfoVersion: "3",
        },
      }
    );
  });
}