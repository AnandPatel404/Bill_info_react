import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: "/",
        origin: "http://127.0.0.1:3000/",
        host: true,
    },
});
