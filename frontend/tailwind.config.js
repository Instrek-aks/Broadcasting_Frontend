/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        destructive: "hsl(var(--destructive))",
        border: "hsl(var(--border))",
        navy: "hsl(var(--navy))",
        "navy-light": "hsl(var(--navy-light))",
        blue: "hsl(var(--blue))",
        "blue-light": "hsl(var(--blue-light))",
        orange: "hsl(var(--orange))",
        "orange-light": "hsl(var(--orange-light))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundColor: {
        "hero-gradient": "var(--bg-hero-gradient, linear-gradient(to bottom, #0f172a, #1e293b))",
        "section-dark": "var(--bg-section-dark, linear-gradient(to bottom, #1e293b, #0f172a))",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(59, 130, 246, 0.2)",
        "glow-accent": "0 0 20px rgba(245, 158, 11, 0.2)",
      },
    },
  },
  plugins: [],
};
