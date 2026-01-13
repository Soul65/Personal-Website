import { Group, Link } from '@parkui/components/ui';
import { GridItem } from 'styled-system/jsx';
import { SiteCard } from './SiteCard';

export const RightColumn = () => (
	<GridItem colSpan={{ base: 12, md: 4 }}>
		<Group orientation='vertical'>
			<SiteCard title='Links'>
				<Link href='/'>Home</Link>
				<Link href='/old-site'>Old Site</Link>
				<Link
					href='https://www.linkedin.com/in/matt-allen-b4548b60/'
					target='_blank'
					rel='noopener noreferrer'
				>
					LinkedIn
				</Link>
				<Link href='https://github.com/Soul65' target='_blank' rel='noopener noreferrer'>
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
				<script async src='https://app3.weatherwidget.org/js/?id=ww_d0fe68cf9360d'></script>
			</SiteCard>
		</Group>
	</GridItem>
);
