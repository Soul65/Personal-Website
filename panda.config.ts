import { defineConfig } from '@pandacss/dev';
import { black, sage, teal, white } from './src/parkui/theme/colors';
import { recipes, slotRecipes } from './src/parkui/theme/recipes';
import { shadows } from './src/parkui/theme/shadows';

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
		},
	},

	globalCss: {
		extend: {
			html: {
				colorPalette: 'teal',
			},
		},
	},

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					black,
					white,
				},
			},
			semanticTokens: {
				colors: {
					teal,
					gray: sage,
				},
				radii: {
					l1: { value: '{radii.xs}' },
					l2: { value: '{radii.sm}' },
					l3: { value: '{radii.md}' },
				},
				shadows,
			},
			recipes,
			slotRecipes,
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',
});
