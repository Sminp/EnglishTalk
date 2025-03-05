import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(1 0 0)",
        foreground: "oklch(0.145 0 0)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.145 0 0)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.145 0 0)",
        primary: "oklch(0.205 0 0)",
        "primary-foreground": "oklch(0.985 0 0)",
        secondary: "oklch(0.97 0 0)",
        "secondary-foreground": "oklch(0.205 0 0)",
        muted: "oklch(0.97 0 0)",
        "muted-foreground": "oklch(0.556 0 0)",
        accent: "oklch(0.97 0 0)",
        "accent-foreground": "oklch(0.205 0 0)",
        destructive: "oklch(0.577 0.245 27.325)",
        "destructive-foreground": "oklch(0.577 0.245 27.325)",
        border: "oklch(0.922 0 0)",
        input: "oklch(0.922 0 0)",
        ring: "oklch(0.708 0 0)",
        "chart-1": "oklch(0.646 0.222 41.116)",
        "chart-2": "oklch(0.6 0.118 184.704)",
        "chart-3": "oklch(0.398 0.07 227.392)",
        "chart-4": "oklch(0.828 0.189 84.429)",
        "chart-5": "oklch(0.769 0.188 70.08)",
        sidebar: "oklch(0.985 0 0)",
        "sidebar-foreground": "oklch(0.145 0 0)",
        "sidebar-primary": "oklch(0.205 0 0)",
        "sidebar-primary-foreground": "oklch(0.985 0 0)",
        "sidebar-accent": "oklch(0.97 0 0)",
        "sidebar-accent-foreground": "oklch(0.205 0 0)",
        "sidebar-border": "oklch(0.922 0 0)",
        "sidebar-ring": "oklch(0.708 0 0)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
