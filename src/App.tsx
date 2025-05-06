import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { HeaderBar } from './HeaderBar';

const App = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
				'background-image': 'assets/nature-6812529_1920.jpg',
				'background-repeat': 'no-repeat',
				'background-size': 'cover',
			}}
		>
			<HeaderBar />
			<Box id='main'>
				<header id='top' class='backlight'>
					<h1>Matt Allen</h1>
					<h2>Full-Stack Software Developer</h2>
				</header>
				<Box id='intro' class='backlight'>
					<h2 class='sectionHeader'>Intro</h2>
					<img src='IMG_2923_cropped.jpg' id='portrait' alt='SelfPortrait.jpg' />
					<p>
						I'm a Full-Stack software developer based in Waterloo, Ontario, with a
						passion for building intuitive, accessible, and performant user interfaces.
						I have experience working on multiple different products, and I enjoy
						staying current with modern frameworks, tools, and best practices.
					</p>
				</Box>
				<Box id='history' class='backlight'>
					<a href='#top' class='backToTop'>
						Back to top
					</a>
					<h2 class='sectionHeader'>History</h2>
					<Box id='timeline'>
						<Box class='timelineBox leftBox'>
							<Box class='content'>
								<h3>Independently</h3>
								<p>
									At Independently, I worked as a full-stack developer on a SaaS
									platform that helps organizations manage independent
									contractors. My main focus was building responsive, intuitive,
									and user-friendly interfaces using React and Next.js. I
									collaborated closely with other developers to implement features
									that improved usability and performance. I also contributed to
									backend development with NestJS and MongoDB, particularly around
									structuring and managing entity schemas, creating API endpoints,
									and managing user role permissions.
								</p>
							</Box>
						</Box>
						<Box class='timelineBox rightBox'>
							<Box class='content'>
								<h3>Alaunus</h3>
								<p>
									At Alaunus, I worked as a front-end developer on a healthcare
									SaaS platform. My work primarily involved developing and
									maintaining user-facing features using AngularJS. I collaborated
									closely with the backend developers to deliver a seamless user
									experience, contributed to improving UI performance, and helped
									ensure the app's responsiveness and accessibility across
									devices.
								</p>
							</Box>
						</Box>
						<Box class='timelineBox leftBox'>
							<Box class='content'>
								<h3>SSIMWave</h3>
								<p>
									My first job I worked at was a company called SSIMWave. Their
									products focused on analyzing and optimizing video quality of
									experience. While there I mainly used Javascript with the
									AngularJS framework. My job focused on changing the designs of
									the web pages into actual HTML code, communicating with the
									backend so that it could start services and collect data to then
									populate the databases with, and then retrieve said data to then
									display on the interface.
								</p>
							</Box>
						</Box>
						<Box class='timelineBox rightBox'>
							<Box class='content'>
								<h3>College</h3>
								<p>
									I am a graduate of the Computer Programmer / Analyst course at
									Conestoga College. While there I learned a multitude of
									languages including C#, Javascript, and ASP.NET. I received an
									advanced diploma and am on the Dean's Honor List (80% average in
									all courses with no failed ones).
								</p>
							</Box>
						</Box>
						<Box class='timelineBox leftBox'>
							<Box class='content'>
								<h3>Highschool</h3>
								<p>
									I took computer programming in both grades 11 and 12. This is
									where I finally started to learn the basics of coding. We
									started by learning Turing and then Java the year after. I also
									went to the Skills Ontario Competition for both 2D and 3D
									animation. They were both really interesting to be in, but also
									made me realize I wasn't cut out for that sort of thing.
								</p>
							</Box>
						</Box>
						<Box class='timelineBox rightBox'>
							<Box class='content'>
								<h3>CrazTechz</h3>
								<p>
									In the summer between grade 5 and 6 I went to a summer camp
									called CrazTechz. This was my first real experience with
									programming. While there I used adobe flash to create a game I
									could call my own. I enjoyed it so much I went back the next
									year for the intermediate camp.
								</p>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box id='contact' class='backlight'>
					<a href='#top' class='backToTop'>
						Back to top
					</a>
					<h2 class='sectionHeader'>Contact Me</h2>
					<Box class='flexbox'>
						<Box class='content contact-content'>
							<p class='email-description'>
								You can reach me directly at
								<a href='mailto:matt.allen65@hotmail.com' class='email-link'>
									matt.allen65@hotmail.com
								</a>
							</p>
							<a
								id='linkedinIcon'
								href='https://www.linkedin.com/in/matt-allen-b4548b60'
								target='_blank'
							>
								<i class='fa fa-linkedin' aria-hidden='true'></i>
							</a>
							<a id='githubIcon' href='https://github.com/Soul65' target='_blank'>
								<i class='fa fa-github' aria-hidden='true'></i>
							</a>
						</Box>
					</Box>
				</Box>
				<footer class='backlight'>
					<small>&copy;Copyright 2025, Matt Allen</small>
				</footer>
			</Box>
		</Box>
	);
};

export default App;
