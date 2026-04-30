import { NavLink } from '@mantine/core';

export const CustomLink = ({ href, label }: { href: string; label: string }) => (
	<NavLink
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		label={label}
		td='underline'
		p={0}
		w='fit-content'
		fw='bold'
	/>
);
