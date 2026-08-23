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
  // This effect runs on mount with no dependencies so it always registers
  // immediately — regardless of whether branding has loaded yet.
  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      promptRef.current = e as BeforeInstallPromptEvent;
      // If branding is already available by the time this fires, unlock now.
      // Otherwise Effect 2 below will unlock once branding arrives.
      if (businessName && clientId) {
        const dismissKey = `pwa-dismissed-${clientId}`;
        if (!localStorage.getItem(dismissKey)) {
          setReady(true);
        }
      }
    };

    const installedHandler = () => setIsInstalled(true);

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", installedHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installedHandler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — must register on first render

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