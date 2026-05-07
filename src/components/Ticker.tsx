import { Box, Group, Marquee, Text } from '@mantine/core';

const items = [
	'HTML5',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'AngularJS',
	'MongoDB',
	'styled-components',
	'NestJS',
	'MUI',
	'Git',
	'C#',
	'SQL',
	'RESTful APIs',
	'Figma',
	'Node.js',
	'Visual Studio',
	'jQuery',
	'Bootstrap',
];

export const Ticker = ({ label }: { label: string }) => (
	<Group justify='center' my='2' wrap='nowrap'>
		<Text size='lg' fw='bold'>
			{label}:
		</Text>
		<Marquee pauseOnHover duration={30000} fadeEdgeColor='var(--mantine-color-dark-9)'>
			{items.map((item, i) => (
				<Box key={i}>{item}</Box>
			))}
		</Marquee>
	</Group>
);
