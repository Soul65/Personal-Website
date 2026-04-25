import { Box, Checkbox, Grid, NavLink, Stack } from '@mantine/core';
import { useShallow } from 'zustand/shallow';
import { useAnimationStore } from '../store';
import { SiteCard } from './SiteCard';

export const RightColumn = () => {
	const [isSnowfallEnabled, setIsSnowfallEnabled, isNameAnimated, setIsNameAnimated] =
		useAnimationStore(
			useShallow((state) => [
				state.isSnowfallEnabled,
				state.setIsSnowfallEnabled,
				state.isNameAnimated,
				state.setIsNameAnimated,
			]),
		);

	return (
		<Grid.Col span={{ base: 12, md: 3 }}>
			<Stack>
				<SiteCard title='Links'>
					<NavLink
						href='/src/old_site/index.html'
						target='_blank'
						rel='noopener noreferrer'
						label='Old Site'
					/>
					<NavLink
						href='https://www.linkedin.com/in/matt-allen-b4548b60/'
						target='_blank'
						rel='noopener noreferrer'
						label='LinkedIn'
					/>
					<NavLink
						href='https://github.com/Soul65'
						target='_blank'
						rel='noopener noreferrer'
						label='GitHub'
					/>
					<NavLink
						href='https://profile.indeed.com/p/matta-zbcjfqp'
						target='_blank'
						rel='noopener noreferrer'
						label='Indeed Profile'
					/>
					<NavLink href='mailto:matt.allen65@hotmail.com' label='Email Me' />
				</SiteCard>
				<SiteCard title='Weather in My City' disablePadding>
					<div
						id='ww_d0fe68cf9360d'
						// @ts-expect-error - weather widget attributes
						v='1.3'
						loc='id'
						a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4775"],"font":"Arial","sl_ics":"one","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_whr":3}'
					>
						More forecasts:{' '}
						<a
							href='https://oneweather.org/calgary/30_days/'
							id='ww_d0fe68cf9360d_u'
							target='_blank'
						>
							Calgary weather 30 days
						</a>
					</div>
					<script
						async
						src='https://app3.weatherwidget.org/js/?id=ww_d0fe68cf9360d'
					></script>
				</SiteCard>
				<SiteCard title='Animation Control'>
					<Box id='animation-control'>
						<Checkbox
							checked={isSnowfallEnabled}
							variant='outline'
							onChange={(e) => setIsSnowfallEnabled(e.currentTarget.checked)}
							label='Enable Snowfall Animation'
						/>
						<Checkbox
							checked={isNameAnimated}
							variant='outline'
							onChange={(e) => setIsNameAnimated(e.currentTarget.checked)}
							label='Enable Name Animation'
						/>
					</Box>
				</SiteCard>
			</Stack>
		</Grid.Col>
	);
};
