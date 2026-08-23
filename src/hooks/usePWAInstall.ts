import { useState, useEffect, useRef } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function usePWAInstall(businessName?: string, clientId?: string) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  // Hold the deferred prompt in a ref so capturing it never causes a re-render
  const promptRef = useRef<BeforeInstallPromptEvent | null>(null);

  // ── 1. Capture beforeinstallprompt as early as possible ──────────────────
  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      promptRef.current = e as BeforeInstallPromptEvent;
      // If branding is already loaded by the time this fires, mark ready now
      if (businessName && clientId) setReady(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  // ── 2. When businessName/clientId arrive, check dismissed + unlock banner ─
  useEffect(() => {
    if (!businessName || !clientId) return;

    const dismissKey = `pwa-dismissed-${clientId}`;
    if (localStorage.getItem(dismissKey)) {
      setIsDismissed(true);
      return;
    }

    // Prompt may already be captured before branding loaded
    if (promptRef.current) setReady(true);
  }, [businessName, clientId]);

  // ── Actions ───────────────────────────────────────────────────────────────

  const install = async () => {
    if (!promptRef.current) return;
    await promptRef.current.prompt();
    const result = await promptRef.current.userChoice;
    if (result.outcome === "accepted") {
      setIsInstalled(true);
      promptRef.current = null;
      setReady(false);
    }
  };

  const dismiss = () => {
    if (!clientId) return;
    localStorage.setItem(`pwa-dismissed-${clientId}`, "true");
    setIsDismissed(true);
    setReady(false);
  };

  const showBanner = ready && !isInstalled && !isDismissed;

  return { install, dismiss, showBanner, isInstalled };
}