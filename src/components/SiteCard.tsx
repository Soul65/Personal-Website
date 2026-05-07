import { Box, Card, Title } from '@mantine/core';

export const SiteCard = ({
	children,
	title,
	disablePadding,
}: {
	children: React.ReactNode;
	title: string;
	disablePadding?: boolean;
}) => (
	<Card
		withBorder
		bg='dark.9'
		c='cyan.8'
		styles={{ root: { borderColor: 'var(--mantine-color-cyan-8)' } }}
	>
		<Title order={3} pb={10}>
			{title}
		</Title>
		{disablePadding ? (
			<Card.Section px={disablePadding ? 0 : 6} py={disablePadding ? 0 : 4}>
				{children}
			</Card.Section>
		) : (
			<Box px={disablePadding ? 0 : 6} py={disablePadding ? 0 : 4}>
				{children}
			</Box>
		)}
	</Card>
);
