import { useState, useEffect, useRef } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface Window {
    __pwaPrompt: BeforeInstallPromptEvent | null;
  }
}

export function usePWAInstall(businessName?: string, clientId?: string) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  const promptRef = useRef<BeforeInstallPromptEvent | null>(null);

  // ── 1. Capture prompt — read global first, then keep listener for late fires
  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("[PWA] Already installed — standalone mode");
      setIsInstalled(true);
      return;
    }

    // Pick up prompt captured globally in index.html before React mounted
    if (window.__pwaPrompt) {
      console.log("[PWA] Prompt found in window.__pwaPrompt");
      promptRef.current = window.__pwaPrompt;
    } else {
      console.log("[PWA] No prompt in window.__pwaPrompt yet");
    }

    // Keep listener in case it fires after React mounts
    const handler = (e: Event) => {
      console.log("[PWA] beforeinstallprompt fired after React mount");
      e.preventDefault();
      promptRef.current = e as BeforeInstallPromptEvent;
      window.__pwaPrompt = e as BeforeInstallPromptEvent;
      if (businessName && clientId) {
        console.log("[PWA] Branding already loaded — setting ready");
        setReady(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  // ── 2. When businessName + clientId arrive, check dismissed and unlock banner
  useEffect(() => {
    if (!businessName || !clientId) {
      console.log("[PWA] Waiting for branding — businessName:", businessName, "clientId:", clientId);
      return;
    }

    console.log("[PWA] Branding loaded —", businessName, clientId);

    const dismissKey = `pwa-dismissed-${clientId}`;
    if (localStorage.getItem(dismissKey)) {
      console.log("[PWA] Previously dismissed for", clientId);
      setIsDismissed(true);
      return;
    }

    if (promptRef.current) {
      console.log("[PWA] Prompt available — showing banner");
      setReady(true);
    } else {
      console.log("[PWA] Prompt NOT available — banner will not show");
    }
  }, [businessName, clientId]);

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