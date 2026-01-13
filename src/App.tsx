import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Group, Link, Text } from '@parkui/components/ui';
import { ThemeProvider } from 'next-themes';
import { Container, Grid } from 'styled-system/jsx';

const App = () => (
	<ThemeProvider attribute='class'>
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
