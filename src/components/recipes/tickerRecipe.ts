import { marqueeAnatomy } from '@ark-ui/react';
import { defineSlotRecipe } from '@pandacss/dev';

export const tickerRecipe = defineSlotRecipe({
	className: 'ticker',
	description: 'Styles for the Ticker component',
	slots: marqueeAnatomy.keys(),
	base: {
		root: {
			'&[data-paused] [data-part="content"]': {
				animationPlayState: 'paused',
			},
		},
		content: {
			animation: 'marqueeX var(--marquee-duration, 20s) linear infinite',
		},
	},
});
