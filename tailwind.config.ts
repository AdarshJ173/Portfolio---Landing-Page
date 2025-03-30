
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
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
        // Custom vibrant colors
        'vibrant-purple': '#8B5CF6',
        'vibrant-pink': '#EC4899',
        'vibrant-blue': '#3B82F6',
        'vibrant-teal': '#14B8A6',
        'vibrant-green': '#10B981',
        'vibrant-cyan': '#06B6D4',
        'vibrant-orange': '#F97316',
        'vibrant-coral': '#F43F5E',
        // Pastel variants
        'pastel-purple': '#D8B4FE',
        'pastel-pink': '#F9A8D4',
        'pastel-blue': '#93C5FD',
        'pastel-green': '#A7F3D0',
        // Navy colors for more sections
        'navy-50': '#F0F7FF',
        'navy-100': '#D8E6FB',
        'navy-500': '#4A6FA1',
        'navy-600': '#375A8A',
        'navy-700': '#2A4365',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        "blob-morph": {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-30px)" },
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 15px rgba(139, 92, 246, 0.5)" },
          "50%": { textShadow: "0 0 30px rgba(139, 92, 246, 0.8), 0 0 10px rgba(236, 72, 153, 0.3)" },
        },
        "reveal-right": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in-scroll": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in-scroll": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in-blur": {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "blob-morph": "blob-morph 8s ease-in-out infinite",
        "slide-up": "slide-up 1.5s ease-in-out infinite alternate",
        "text-glow": "text-glow 3s ease-in-out infinite",
        "reveal-right": "reveal-right 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "shimmer": "shimmer 2s infinite",
        "fade-in-scroll": "fade-in-scroll 0.8s ease-out forwards",
        "scale-in-scroll": "scale-in-scroll 0.8s ease-out forwards",
        "fade-in-blur": "fade-in-blur 0.8s ease-out forwards",
        "gradient-shift": "gradient-shift 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
