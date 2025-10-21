import { HeaderBar } from '@components/HeaderBar';
import { LeftColumn } from '@components/LeftColumn';
import { RightColumn } from '@components/RightColumn';
import { Group } from '@parkui/components/ui';
import { ThemeProvider } from 'next-themes';
import { Container, Grid } from 'styled-system/jsx';

const App = () => {
	return (
		<ThemeProvider attribute='class'>
			<Container maxW='8xl' px={4} py={8}>
				<Group orientation='vertical'>
					<HeaderBar />
					<Grid columns={12}>
						<LeftColumn />
						<RightColumn />
					</Grid>
					{/*
					<div id='contact' className='backlight'>
						<a href='#top' className='backToTop'>
							Back to top
						</a>
						<h2 className='sectionHeader'>Contact Me</h2>
						<div className='flexdiv'>
							<div className='content contact-content'>
								<p className='email-description'>
									You can reach me directly at
									<a
										href='mailto:matt.allen65@hotmail.com'
										className='email-link'
									>
										matt.allen65@hotmail.com
									</a>
								</p>
								<a
									id='linkedinIcon'
									href='https://www.linkedin.com/in/matt-allen-b4548b60'
									target='_blank'
								>
									<i className='fa fa-linkedin' aria-hidden='true'></i>
								</a>
								<a id='githubIcon' href='https://github.com/Soul65' target='_blank'>
									<i className='fa fa-github' aria-hidden='true'></i>
								</a>
							</div>
						</div>
					</div>
					<footer className='backlight'>
						<small>&copy;Copyright 2025, Matt Allen</small>
					</footer> */}
				</Group>
			</Container>
		</ThemeProvider>
	);
};

export default App;
