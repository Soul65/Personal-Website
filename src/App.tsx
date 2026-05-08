import { CustomSnowfall } from '@components/CustomSnowfall';
import { Footer } from '@components/Footer';
import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Box, Container, Grid, Stack, useMantineTheme } from '@mantine/core';

const App = () => {
	const theme = useMantineTheme();

	return (
		<Box bg='dark.9'>
			<CustomSnowfall />
			<Container size='lg' py={theme.spacing.md}>
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
	);
};

export default App;
