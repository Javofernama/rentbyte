import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"], // Asegúrate que sea 'class' si usas ThemeProvider, o quítalo si fuerzas oscuro vía :root
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem", // Un poco menos padding para un look más compacto
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        "brand-background": "hsl(var(--rb-background))",
        "brand-foreground": "hsl(var(--rb-foreground))",
        "brand-card": "hsl(var(--rb-card))",
        "brand-border": "hsl(var(--rb-border))",
        "brand-primary": "hsl(var(--rb-primary))",
        "brand-primary-hover": "hsl(var(--rb-primary) / 0.8)", // Ejemplo para hover
        // shadcn/ui variables (ya definidas en globals.css)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px hsl(var(--primary) / 0.3)",
        "glow-md": "0 0 25px hsl(var(--primary) / 0.4)",
      },
      // Keyframes y animaciones están en globals.css
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
