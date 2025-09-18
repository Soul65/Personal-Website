import { defineConfig } from '@pandacss/dev';
import { cyan } from './src/theme/colors/cyan';
import { sage } from './src/theme/colors/sage';
import { recipes, slotRecipes } from './src/theme/recipes';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Enable JSX support
	jsxFramework: 'react',

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					cyan,
					gray: sage,
				},
			},
			recipes,
			slotRecipes,
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',
});
