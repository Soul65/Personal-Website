import { Footer } from '@components/Footer';
import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Box, Container, Grid, MantineProvider, Stack } from '@mantine/core';
import '@mantine/core/styles.css';
import Snowfall from 'react-snowfall';
import { useAnimationStore } from './store';

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
	star.src = 'assets/white-star.png';

	images = [star];
	radius = [10, 15];
	speed = [0, 0];
	wind = [-0.5, 0.5];
}

// If September to November, show leaves
if (currentMonth >= 8 && currentMonth <= 10) {
	const leaf1 = document.createElement('img');
	leaf1.src = 'assets/maple-leaf.png';
	const leaf2 = document.createElement('img');
	leaf2.src = 'assets/oak-leaf.png';
	const leaf3 = document.createElement('img');
	leaf3.src = 'assets/brown-leaf.png';

	images = [leaf1, leaf2, leaf3];
	radius = [20, 20];
	speed = [0.5, 2];
}

const App = () => {
	const isSnowfallEnabled = useAnimationStore((state) => state.isSnowfallEnabled);

	return (
		<MantineProvider defaultColorScheme='dark'>
			<Box bg='dark.9'>
				{isSnowfallEnabled && (
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
				)}
				<Container size='lg' px={4} py={8}>
					<Stack>
						<HeaderBar />
						<Grid columns={12}>
							<LeftColumn />
							<RightColumn />
						</Grid>
						<Footer />
					</Stack>
				</Container>
			</Box>
		</MantineProvider>
	);
};

export default App;
