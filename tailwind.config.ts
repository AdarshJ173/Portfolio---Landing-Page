
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Soft pastel colors
				pastel: {
					blue: '#A8DADC',
					pink: '#FFB6C1',
					yellow: '#FFFACD',
					green: '#F2FCE2',
					orange: '#FEC6A1',
					purple: '#E5DEFF',
				},
				// Vibrant colors
				vibrant: {
					orange: '#FF5722',
					cyan: '#00BCD4',
					purple: '#8B5CF6',
					pink: '#D946EF',
					blue: '#4A90E2',
				},
				// Dark theme colors
				dark: {
					bg: '#121212',
					card: '#1E1E1E',
					text: '#E0E0E0',
				},
				// Navy and teal still available
				navy: {
					50: "#e7eaef",
					100: "#b3bcd0",
					200: "#8e9ab5",
					300: "#5f6e95",
					400: "#415182",
					500: "#14264b",
					600: "#122244",
					700: "#0e1a35",
					800: "#0b1428",
					900: "#080f1e",
				},
				teal: {
					50: "#e6f7f6",
					100: "#b1e8e5",
					200: "#8cdcd7",
					300: "#5ccdc6",
					400: "#40c3ba",
					500: "#0d9488",
					600: "#0c877c",
					700: "#09695f",
					800: "#075147",
					900: "#053d36",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInLeft: {
					from: { opacity: '0', transform: 'translateX(-20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				fadeInRight: {
					from: { opacity: '0', transform: 'translateX(20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				slideUp: {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				rotate: {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				// New enhanced animations
				fadeInScroll: {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				scaleInScroll: {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)' 
					}
				},
				fadeInBlur: {
					'0%': { 
						opacity: '0', 
						filter: 'blur(10px)',
						transform: 'translateY(20px)' 
					},
					'100%': { 
						opacity: '1', 
						filter: 'blur(0px)',
						transform: 'translateY(0)' 
					}
				},
				gradientShift: {
					'0%': { 
						backgroundPosition: '0% 50%' 
					},
					'50%': { 
						backgroundPosition: '100% 50%' 
					},
					'100%': { 
						backgroundPosition: '0% 50%' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.7s ease-out forwards',
				'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
				'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'scale-in': 'scaleIn 0.5s ease-out forwards',
				'slow-rotate': 'rotate 12s linear infinite',
				// New enhanced animations
				'fade-in-scroll': 'fadeInScroll 0.6s ease-out forwards',
				'scale-in-scroll': 'scaleInScroll 0.5s ease-out forwards',
				'fade-in-blur': 'fadeInBlur 0.7s ease-out forwards',
				'gradient-shift': 'gradientShift 6s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
