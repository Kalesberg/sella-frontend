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
				'black-74': '#bdbdbd',
				'black-60': '#999',
				'black-40': '#666',
				'black-06': '#0F0F0F',

				'red-100': '#F44336',

				'green-100': '#60B04D',
				
				'error-100': '#E25728'
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				manrope: ['var(--font-manrope)'],
			},
			borderColor: {
				secondary: 'rgba(255, 255, 255, 0.06)'
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