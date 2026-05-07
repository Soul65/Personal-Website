import { CustomSnowfall } from '@components/CustomSnowfall';
import { Footer } from '@components/Footer';
import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Box, Container, Grid, MantineProvider, Stack } from '@mantine/core';
import '@mantine/core/styles.css';

const App = () => (
	<MantineProvider defaultColorScheme='dark'>
		<Box bg='dark.9'>
			<CustomSnowfall />
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

export default App;
