import type { Config } from "tailwindcss";
import { parkwindPlugin } from '@park-ui/tailwind-plugin';
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				'accent-100': '#FFDD00',
				'black-100': '#0A0A0A',
				'black-06': '#0F0F0F'
			}
		},
	},
	parkUI: {
		accentColor: 'yellow',
		grayColor: 'neutral',
		borderRadius: 'sm',
	},
	plugins: [
		parkwindPlugin,
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus'])
			addVariant('filled', '&:not(:placeholder-shown)'),
			addVariant('light', '&:is(.light *)')
		})
	],
	darkMode: ['class'],
};

export default config;