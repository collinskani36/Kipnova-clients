import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["nova-icon-192.png", "nova-icon-512.png", "nova-icon-maskable.png"],
      manifest: {
        name: "Nova",
        short_name: "Nova",
        description: "Your WhatsApp AI dashboard — chats, analytics, and automation in one place.",
        theme_color: "#0f1117",
        background_color: "#0f1117",
        display: "standalone",
        orientation: "portrait",
        scope: "/login",
        start_url: "/login",
        icons: [
          {
            src: "nova-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "nova-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "nova-icon-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api\//],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.kipnovatech\.co\.ke\/api\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "nova-api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 5 * 60,
              },
              networkTimeoutSeconds: 10,
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  server: {
    port: 5173,
    host: true,
  },
});