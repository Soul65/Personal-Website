import { Card, Title } from '@mantine/core';

export const SiteCard = ({
	children,
	title,
	disablePadding,
}: {
	children: React.ReactNode;
	title: string;
	disablePadding?: boolean;
}) => {
	return (
		<Card>
			<Card.Section>
				<Title>{title}</Title>
			</Card.Section>
			<Card.Section px={disablePadding ? 0 : 6} py={disablePadding ? 0 : 4}>
				{children}
			</Card.Section>
		</Card>
	);
};
