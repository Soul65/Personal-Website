import { Group, Link, Text } from '@parkui/components/ui';
import { Box, Divider, GridItem, Stack } from 'styled-system/jsx';
import { SiteCard } from './SiteCard';

const linkStyle = { width: '150px' };

export const LeftColumn = () => {
	return (
		<GridItem colSpan={{ base: 12, md: 8 }}>
			<Group orientation='vertical'>
				<SiteCard title='About Me'>
					<Group>
						<img
							src='/src/assets/IMG_2923_cropped.jpg'
							id='portrait'
							alt='Self Portrait'
							style={{ width: '200px', height: 'auto' }}
						/>
						<Text>
							I'm a Full-Stack software developer based in Waterloo, Ontario, with a
							passion for building intuitive, accessible, and performant user
							interfaces. I have experience working on multiple different products,
							and I enjoy staying current with modern frameworks, tools, and best
							practices.
						</Text>
					</Group>
				</SiteCard>
				<SiteCard title='Work History'>
					<Stack gap='4'>
						<Box>
							<Link
								href='https://independently.ai/'
								target='_blank'
								rel='noopener noreferrer'
								style={linkStyle}
							>
								<img src='/src/assets/Independently.png' alt='Independently' />
							</Link>
							<p>
								At Independently, I worked as a full-stack developer on a SaaS
								platform that helps organizations manage independent contractors. My
								main focus was building responsive, intuitive, and user-friendly
								interfaces using React and Next.js. I collaborated closely with
								other developers to implement features that improved usability and
								performance. I also contributed to backend development with NestJS
								and MongoDB, particularly around structuring and managing entity
								schemas, creating API endpoints, and managing user role permissions.
							</p>
						</Box>
						<Divider />
						<Box>
							<Link
								href='https://alaunus.com/'
								target='_blank'
								rel='noopener noreferrer'
								style={linkStyle}
							>
								<img src='/src/assets/Alaunus.png' alt='Alaunus' />
							</Link>
							<p>
								At Alaunus, I worked as a front-end developer on a healthcare SaaS
								platform. My work primarily involved developing and maintaining
								user-facing features using AngularJS. I collaborated closely with
								the backend developers to deliver a seamless user experience,
								contributed to improving UI performance, and helped ensure the app's
								responsiveness and accessibility across devices.
							</p>
						</Box>
						<Divider />
						<Box>
							<Link
								href='https://www.prnewswire.com/news-releases/imax-acquires-streaming-technology-company-ssimwave-inc-301631500.html'
								target='_blank'
								rel='noopener noreferrer'
								style={linkStyle}
							>
								<img src='/src/assets/SSIMWAVE.png' alt='SSIMWave' />
							</Link>
							<p>
								My first job I worked at was a company called SSIMWave. Their
								products focused on analyzing and optimizing video quality of
								experience. While there I mainly used Javascript with the AngularJS
								framework. My job focused on changing the designs of the web pages
								into actual HTML code, communicating with the backend so that it
								could start services and collect data to then populate the databases
								with, and then retrieve said data to then display on the interface.
							</p>
						</Box>
					</Stack>
				</SiteCard>
				<SiteCard title='History'>
					<Stack gap='4'>
						<Box>
							<h3>College</h3>
							<p>
								I am a graduate of the Computer Programmer / Analyst course at
								Conestoga College. While there I learned a multitude of languages
								including C#, Javascript, and ASP.NET. I received an advanced
								diploma and am on the Dean's Honor List (80% average in all courses
								with no failed ones).
							</p>
						</Box>
						<Divider />
						<Box>
							<h3>Highschool</h3>
							<p>
								I took computer programming in both grades 11 and 12. This is where
								I finally started to learn the basics of coding. We started by
								learning Turing and then Java the year after. I also went to the
								Skills Ontario Competition for both 2D and 3D animation. They were
								both really interesting to be in, but also made me realize I wasn't
								cut out for that sort of thing.
							</p>
						</Box>
						<Divider />
						<Box>
							<h3>CrazTechz</h3>
							<p>
								In the summer between grade 5 and 6 I went to a summer camp called
								CrazTechz. This was my first real experience with programming. While
								there I used adobe flash to create a game I could call my own. I
								enjoyed it so much I went back the next year for the intermediate
								camp.
							</p>
						</Box>
					</Stack>
				</SiteCard>
			</Group>
		</GridItem>
	);
};
