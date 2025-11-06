import { defineConfig } from '@pandacss/dev';
import { animationStyles } from './src/parkui/theme/animation-styles';
import { green } from './src/parkui/theme/colors/green';
import { red } from './src/parkui/theme/colors/red';
import { sage } from './src/parkui/theme/colors/sage';
import { teal } from './src/parkui/theme/colors/teal';
import { conditions } from './src/parkui/theme/conditions';
import { globalCss } from './src/parkui/theme/global-css';
import { keyframes } from './src/parkui/theme/keyframes';
import { layerStyles } from './src/parkui/theme/layer-styles';
import { recipes, slotRecipes } from './src/parkui/theme/recipes';
import { textStyles } from './src/parkui/theme/text-styles';
import { colors } from './src/parkui/theme/tokens/colors';
import { durations } from './src/parkui/theme/tokens/durations';
import { shadows } from './src/parkui/theme/tokens/shadows';
import { zIndex } from './src/parkui/theme/tokens/z-index';

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
			animationStyles,
			recipes,
			slotRecipes,
			keyframes,
			layerStyles,
			textStyles,

			tokens: {
				colors,
				durations,
				zIndex,
			},

			semanticTokens: {
				colors: {
					fg: {
						default: {
							value: {
								_light: '{colors.gray.12}',
								_dark: '{colors.gray.12}',
							},
						},

						muted: {
							value: {
								_light: '{colors.gray.11}',
								_dark: '{colors.gray.11}',
							},
						},

						subtle: {
							value: {
								_light: '{colors.gray.10}',
								_dark: '{colors.gray.10}',
							},
						},
					},
					teal,
					gray: sage,
					red,
					green,
				},

				shadows,

				radii: {
					l1: {
						value: '{radii.xs}',
					},
					l2: {
						value: '{radii.sm}',
					},
					l3: {
						value: '{radii.md}',
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	globalCss,
	conditions,
});
