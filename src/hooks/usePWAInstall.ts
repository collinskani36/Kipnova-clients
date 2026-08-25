// ─── usePWAInstall ────────────────────────────────────────────────────────────
// Manages the PWA install prompt for "Nova — powered by Kipnova".
//
// Strategy:
//   - index.html captures beforeinstallprompt into window.__pwaPrompt BEFORE
//     React mounts, so we never miss it.
//   - This hook reads that global on mount, and also listens for the rare case
//     it fires after React loads.
//   - showBanner becomes true as soon as the prompt is available and the user
//     hasn't dismissed or already installed.
//   - No manifest swapping — the static Vite manifest is the one the browser
//     evaluated, so we leave it alone.

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

const DISMISS_KEY = "nova-pwa-dismissed";

export function usePWAInstall() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(
    () => !!localStorage.getItem(DISMISS_KEY)
  );
  const [promptReady, setPromptReady] = useState(false);

  const promptRef = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Already running as installed PWA — nothing to show
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("[PWA] Already installed — standalone mode");
      setIsInstalled(true);
      return;
    }

    // Pick up prompt captured by index.html before React mounted
    if (window.__pwaPrompt) {
      console.log("[PWA] Prompt found in window.__pwaPrompt on mount");
      promptRef.current = window.__pwaPrompt;
      setPromptReady(true);
    } else {
      console.log("[PWA] No prompt yet — listening for late fire");
    }

    // Listen for the rare case it fires after React mounts
    const handler = (e: Event) => {
      console.log("[PWA] beforeinstallprompt fired after React mount");
      e.preventDefault();
      promptRef.current = e as BeforeInstallPromptEvent;
      window.__pwaPrompt = e as BeforeInstallPromptEvent;
      setPromptReady(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      console.log("[PWA] App installed");
      setIsInstalled(true);
      setPromptReady(false);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const install = async () => {
    if (!promptRef.current) {
      console.warn("[PWA] install() called but no prompt available");
      return;
    }
    try {
      await promptRef.current.prompt();
      const result = await promptRef.current.userChoice;
      console.log("[PWA] User choice:", result.outcome);
      if (result.outcome === "accepted") {
        setIsInstalled(true);
        promptRef.current = null;
        setPromptReady(false);
      }
    } catch (err) {
      console.error("[PWA] prompt() threw:", err);
    }
  };

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "true");
    setIsDismissed(true);
    setPromptReady(false);
  };

  const showBanner = promptReady && !isInstalled && !isDismissed;

  return { install, dismiss, showBanner };
}