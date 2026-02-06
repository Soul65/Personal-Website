import { Checkbox, Group, Link } from '@parkui/components/ui';
import { useAnimationStore } from 'src/store';
import { Box, GridItem } from 'styled-system/jsx';
import { SiteCard } from './SiteCard';
import { useShallow } from 'zustand/shallow';

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
		<GridItem colSpan={{ base: 12, md: 3 }}>
			<Group orientation='vertical' width='100%'>
				<SiteCard title='Links'>
					<Link href='/src/old_site/index.html' target='_blank' rel='noopener noreferrer'>
						Old Site
					</Link>
					<Link
						href='https://www.linkedin.com/in/matt-allen-b4548b60/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</Link>
					<Link
						href='https://github.com/Soul65'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</Link>
					<Link
						href='https://profile.indeed.com/p/matta-zbcjfqp'
						target='_blank'
						rel='noopener noreferrer'
					>
						Indeed Profile
					</Link>
					<Link href='mailto:matt.allen65@hotmail.com'>Email Me</Link>
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
						<Checkbox.Root
							checked={isSnowfallEnabled}
							variant='outline'
							onCheckedChange={(e) =>
								setIsSnowfallEnabled(
									e.checked === 'indeterminate' ? false : e.checked,
								)
							}
						>
							<Checkbox.HiddenInput />
							<Checkbox.Control borderColor='var(--colors-color-palette-solid-bg)'>
								<Checkbox.Indicator />
							</Checkbox.Control>
							<Checkbox.Label>Enable Background Animation</Checkbox.Label>
						</Checkbox.Root>
						<Checkbox.Root
							checked={isNameAnimated}
							variant='outline'
							onCheckedChange={(e) =>
								setIsNameAnimated(e.checked === 'indeterminate' ? false : e.checked)
							}
						>
							<Checkbox.HiddenInput />
							<Checkbox.Control borderColor='var(--colors-color-palette-solid-bg)'>
								<Checkbox.Indicator />
							</Checkbox.Control>
							<Checkbox.Label>Enable Name Animation</Checkbox.Label>
						</Checkbox.Root>
					</Box>
				</SiteCard>
			</Group>
		</GridItem>
	);
};
