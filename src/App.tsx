import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Group, Link, Text } from '@parkui/components/ui';
import { ThemeProvider } from 'next-themes';
import Snowfall from 'react-snowfall';
import { Container, Grid } from 'styled-system/jsx';

const leaf1 = document.createElement('img');
leaf1.src = 'src/assets/maple-leaf.png';
const leaf2 = document.createElement('img');
leaf2.src = 'src/assets/oak-leaf.png';
const leaf3 = document.createElement('img');
leaf3.src = 'src/assets/brown-leaf.png';

let images: CanvasImageSource[] = [];
let radius: [number, number] = [0.5, 3.0];
let speed: [number, number] = [0.5, 3.0];

// If Spetember to November, show leaves
const currentMonth = new Date().getMonth();

if (currentMonth >= 8 && currentMonth <= 10) {
	images = [leaf1, leaf2, leaf3];
	radius = [20, 20];
	speed = [0.5, 2];
}

const App = () => (
	<ThemeProvider attribute='class'>
		<Snowfall snowflakeCount={150} images={images} radius={radius} speed={speed} />
		<Container maxW='8xl' px={4} py={8}>
			<Group orientation='vertical'>
				<HeaderBar />
				<Grid columns={12}>
					<LeftColumn />
					<RightColumn />
				</Grid>
				<footer>
					<Group orientation='vertical' align='center' marginTop='8' gap='2'>
						<Text>&copy; {new Date().getFullYear()} Matt Allen.</Text>
						<Link href='mailto:matt.allen65@hotmail.com'>matt.allen65@hotmail.com</Link>
					</Group>
				</footer>
			</Group>
		</Container>
	</ThemeProvider>
);

export default App;
