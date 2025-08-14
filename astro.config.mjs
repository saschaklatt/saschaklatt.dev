import "dotenv/config";
import {defineConfig} from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.CONTEXT === "production";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    trailingSlash: "never",
    site: isProd ? process.env.URL : process.env.DEPLOY_PRIME_URL,
    vite: {
        plugins: [tailwindcss()],
    },
});
