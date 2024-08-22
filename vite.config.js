import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Personal-Portfolio-v2",
    plugins: [react()],
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "src/pages"),
            "@components": path.resolve(__dirname, "src/components"),
            "@utilities": path.resolve(__dirname, "src/utilities"),
        },
    }
});
