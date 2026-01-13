import { Marquee } from '@ark-ui/react/marquee';
import { Group, Text } from '@parkui/components/ui';
import { marquee } from 'styled-system/recipes';

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

export const Ticker = ({ label }: { label: string }) => {
	const classes = marquee();

	return (
		<Group width='100%' justify='center' marginY='2'>
			<Text textStyle='lg' fontWeight='bold'>
				{label}:
			</Text>
			<Marquee.Root className={classes.root} pauseOnInteraction speed={50}>
				<Marquee.Viewport className={classes.viewport}>
					<Marquee.Content className={classes.content}>
						{items.map((item, i) => (
							<Marquee.Item key={i} className={classes.item}>
								{item}
							</Marquee.Item>
						))}
					</Marquee.Content>
				</Marquee.Viewport>
			</Marquee.Root>
		</Group>
	);
};
