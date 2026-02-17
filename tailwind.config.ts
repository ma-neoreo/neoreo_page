import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'var(--font-noto-sans-kr)', 'sans-serif'],
			},
			colors: {
				background: '#fafafc',
				foreground: '#1a1a2e',
				primary: {
					DEFAULT: '#4f46e5',
					dark: '#4338ca',
					light: '#818cf8',
					50: '#eef2ff',
				},
				accent: {
					DEFAULT: '#7c3aed',
					light: '#a78bfa',
				},
				surface: {
					DEFAULT: '#ffffff',
					alt: '#f8f8fc',
					muted: '#f1f0fb',
				},
				navy: {
					DEFAULT: '#1a1a2e',
					light: '#2d2d44',
					muted: '#6b7094',
				}
			},
			boxShadow: {
				'soft': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.03)',
				'elevated': '0 8px 40px rgba(0, 0, 0, 0.06)',
				'glow': '0 0 40px rgba(79, 70, 229, 0.1)',
				'glow-sm': '0 0 20px rgba(79, 70, 229, 0.08)',
				'card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(0, 0, 0, 0.04)',
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
