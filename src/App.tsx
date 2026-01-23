import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Group, Link, Text } from '@parkui/components/ui';
import { ThemeProvider } from 'next-themes';
import Snowfall from 'react-snowfall';
import { Container, Grid } from 'styled-system/jsx';

// Default to snow for December to February
let images: CanvasImageSource[] = [];
let radius: [number, number] = [0.5, 3.0];
let speed: [number, number] = [0.5, 3.0];
let wind: [number, number] = [-0.5, 2.0];
let color = '#FFFFFF';

const currentMonth = new Date().getMonth();

// If March to May, show rain
if (currentMonth >= 2 && currentMonth <= 4) {
	radius = [1, 3];
	speed = [4, 8];
	wind = [0, 0];
	color = '#3f51b5';
}

// If June to August, show stars
if (currentMonth >= 5 && currentMonth <= 7) {
	const star = document.createElement('img');
	star.src = 'src/assets/white-star.png';

	images = [star];
	radius = [10, 15];
	speed = [0, 0];
	wind = [-0.5, 0.5];
}

// If September to November, show leaves
if (currentMonth >= 8 && currentMonth <= 10) {
	const leaf1 = document.createElement('img');
	leaf1.src = 'src/assets/maple-leaf.png';
	const leaf2 = document.createElement('img');
	leaf2.src = 'src/assets/oak-leaf.png';
	const leaf3 = document.createElement('img');
	leaf3.src = 'src/assets/brown-leaf.png';

	images = [leaf1, leaf2, leaf3];
	radius = [20, 20];
	speed = [0.5, 2];
}

const App = () => (
	<ThemeProvider attribute='class'>
		<Snowfall
			snowflakeCount={150}
			images={images}
			radius={radius}
			speed={speed}
			wind={wind}
			color={color}
			style={{
				position: 'fixed',
			}}
		/>
		<Container maxW='7xl' px={4} py={8}>
			<Group orientation='vertical'>
				<HeaderBar />
				<Grid columns={12}>
					<LeftColumn />
					<RightColumn />
				</Grid>
				<footer>
					<Group orientation='vertical' align='center' marginTop='8' gap='2'>
						<Text>
							Created using{' '}
							<Link
								href='https://park-ui.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								ParkUI
							</Link>{' '}
							and inspired by{' '}
							<Link
								href='https://dimden.dev/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src='https://dimden.dev/services/images/88x31.gif'
									alt='Dimden'
								/>
							</Link>
						</Text>
						<Group gap='2' flexWrap='wrap' justifyContent='center'>
							<Text>&copy;{new Date().getFullYear()} Matt Allen</Text>
							<Link href='mailto:matt.allen65@hotmail.com'>
								matt.allen65@hotmail.com
							</Link>
						</Group>
					</Group>
				</footer>
			</Group>
		</Container>
	</ThemeProvider>
);

export default App;
