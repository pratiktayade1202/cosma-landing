import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // Added just in case
    ],
    theme: {
        extend: {
            colors: {
                obsidian: "#050505", // Deep Black
                offWhite: "#F2F2F2", // Paper White
                stardust: "#888888", // Muted Grey
                wireframe: "#333333", // Dark Grey Borders
                gold: "#D4AF37",     // Lux Gold
            },
            fontFamily: {
                domine: ["var(--font-domine)", "serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;