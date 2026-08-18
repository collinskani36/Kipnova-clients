import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function usePWAInstall() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Already installed — running in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Check if user previously dismissed the prompt
    const dismissed = localStorage.getItem("nova-install-dismissed");
    if (dismissed) setIsDismissed(true);

    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const install = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const result = await installPrompt.userChoice;
    if (result.outcome === "accepted") {
      setIsInstalled(true);
      setInstallPrompt(null);
    }
  };

  const dismiss = () => {
    localStorage.setItem("nova-install-dismissed", "true");
    setIsDismissed(true);
  };

  // Show banner if: prompt is available, not installed, not dismissed
  const showBanner = !!installPrompt && !isInstalled && !isDismissed;

  return { install, dismiss, showBanner, isInstalled };
}