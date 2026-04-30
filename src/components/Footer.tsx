import { Group, Stack, Text } from '@mantine/core';
import { CustomLink } from './CustomLink';
import { ImageLink } from './ImageLink';

export const Footer = () => (
	<footer>
		<Stack align='center' mt='8' gap='2'>
			<Group gap='2' fw='wrap' justify='center'>
				<Text>Created using </Text>
				<CustomLink href='https://mantine.dev/' label='Mantine' />{' '}
				<Text>and inspired by </Text>
				<ImageLink
					href='https://dimden.dev/'
					src='https://dimden.dev/services/images/88x31.gif'
					alt='Dimden'
					height='auto'
					width='auto'
				/>
			</Group>
			<Group gap='2' fw='wrap' justify='center'>
				<Text>&copy;{new Date().getFullYear()} Matt Allen</Text>
				<CustomLink
					href='mailto:matt.allen65@hotmail.com'
					label='matt.allen65@hotmail.com'
				/>
			</Group>
		</Stack>
	</footer>
);
