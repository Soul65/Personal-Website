import { Group, Link } from '@parkui/components/ui';
import { GridItem } from 'styled-system/jsx';
import { SiteCard } from './SiteCard';

export const RightColumn = () => {
	return (
		<GridItem colSpan={{ base: 12, md: 4 }}>
			<Group orientation='vertical'>
				<SiteCard title='Links'>
					<Link href='/'>Home</Link>
					<Link href='/old-site'>Old Site</Link>
				</SiteCard>
				<SiteCard title='Weather in My City' disablePadding>
					<div
						id='ww_8ed595ee1a6bc'
						// @ts-expect-error - weather widget attributes
						v='1.3'
						loc='id'
						a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl4738"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_whr":3}'
					>
						Weather Data Source:{' '}
						<a href='https://wetterlang.de' id='ww_8ed595ee1a6bc_u' target='_blank'>
							Wetter 30 tage vorschau
						</a>
					</div>
					<script
						async
						src='https://app3.weatherwidget.org/js/?id=ww_8ed595ee1a6bc'
					></script>
				</SiteCard>
			</Group>
		</GridItem>
	);
};
