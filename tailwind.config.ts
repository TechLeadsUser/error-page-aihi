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
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					elevated: 'hsl(var(--background-elevated))',
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					end: 'hsl(var(--primary-end))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					end: 'hsl(var(--secondary-end))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					blue: 'hsl(var(--accent-blue))',
					yellow: 'hsl(var(--accent-yellow))',
					orange: 'hsl(var(--accent-orange))',
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				'2xl': '1.5rem',
				'3xl': '2rem',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-cosmic': 'var(--gradient-cosmic)',
			},
			boxShadow: {
				'glow-primary': 'var(--glow-primary)',
				'glow-secondary': 'var(--glow-secondary)',
				'card': 'var(--shadow-card)',
				'elevated': 'var(--shadow-elevated)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				glitch: {
					'0%, 100%': { 
						transform: 'translateX(0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': { 
						transform: 'translateX(-2px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': { 
						transform: 'translateX(2px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': { 
						transform: 'translateX(-1px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': { 
						transform: 'translateX(1px)',
						filter: 'hue-rotate(360deg)'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: 'var(--glow-primary)' },
					'50%': { boxShadow: 'var(--glow-secondary)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 1s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
			},
			letterSpacing: {
				'tight': '-0.01em',
				'extra-tight': '-0.02em',
			},
			screens: {
				'xxs': '370px',
				'xs': '480px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
