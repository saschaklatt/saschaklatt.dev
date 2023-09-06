import "dotenv/config";
import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const isProd = process.env.CONTEXT === "production";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({applyBaseStyles: false}), react()],
    trailingSlash: "never",
    site: isProd ? process.env.URL : process.env.DEPLOY_PRIME_URL,
});
