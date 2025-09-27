import { defineConfig } from '@pandacss/dev';
import { sage } from './src/parkui/theme/colors/sage';
import { teal } from './src/parkui/theme/colors/teal';
import { recipes, slotRecipes } from './src/parkui/theme/recipes';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Enable JSX support
	jsxFramework: 'react',

	conditions: {
		extend: {
			light: ':root &, .light &',
			invalid: '&:is(:user-invalid, [data-invalid], [aria-invalid=true])',
			hover: '&:not(:disabled):hover',
			active: '&:not(:disabled):active',
			checked: '&:is([data-state=checked], [data-state=indeterminate])',
		},
	},

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					teal,
					gray: sage,
					fg: {
						default: {
							value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' },
						},
						muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
						subtle: {
							value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' },
						},
						disabled: {
							value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' },
						},
						// error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
					},
					border: {
						default: {
							value: { _light: '{colors.gray.a7}', _dark: '{colors.gray.a7}' },
						},
						muted: { value: { _light: '{colors.gray.a6}', _dark: '{colors.gray.a6}' } },
						subtle: {
							value: { _light: '{colors.gray.a4}', _dark: '{colors.gray.a4}' },
						},
						outline: {
							value: { _light: '{colors.gray.a9}', _dark: '{colors.gray.a9}' },
						},
						// error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
					},
					bg: {
						default: { value: { _light: 'white', _dark: '{colors.gray.1}' } },
						subtle: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
						muted: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
					},
				},
				radii: {
					l1: { value: '{radii.xs}' },
					l2: { value: '{radii.sm}' },
					l3: { value: '{radii.md}' },
				},
			},
			recipes,
			slotRecipes,
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',
});
