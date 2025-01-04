import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#7dd3fc",
        customGray: "#f4f4f4",
        customPink: "#fca5a5",
        customDarkBlue: "#93c5fd",
        customYellow: "#fde047",
        customGreen: "#86efac",
        customViolet: "#c4b5fd",
        customBeige: "#E3D1AB",
        customPale: "#fff4eb",
      },
    },
  },
  plugins: [],
} satisfies Config;
