import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Mist-frontend/",
  server: {
    port: 3003,
  },
  // build: {
  //   outDir: "dist",
  // },
});
