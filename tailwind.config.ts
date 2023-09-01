import type {Config} from "tailwindcss";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            code: ["Source Code Pro", "Courier New", "Courier", "monospace"],
            sans: ["Nunito", "sans-serif"],
            serif: ["Bungee Inline", "serif"],
        },
        extend: {},
    },
    plugins: [],
} satisfies Config;
