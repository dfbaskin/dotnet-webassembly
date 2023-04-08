import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
    proxy: {
      "/dn": {
        target: "http://localhost:4201",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dn/, ""),
      },
    },
  },
});
