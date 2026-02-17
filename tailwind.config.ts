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
				// Modern Light Palette
				background: '#ffffff',
				primary: {
					DEFAULT: '#2563eb', // Royal Blue
					dark: '#1e40af',
					light: '#60a5fa',
				},
				secondary: {
					DEFAULT: '#64748b', // Slate Gray
					light: '#f1f5f9', // Light Slate for backgrounds
				},
				surface: {
					DEFAULT: '#ffffff',
					alt: '#f8fafc', // Very light gray for sections
				}
			},
			boxShadow: {
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
