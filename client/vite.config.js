import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-date-range"],
  },
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 5173, // You can specify a port that Render.com expects, e.g., 10000
  },
});
