import { Card } from '@parkui/components/ui';

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
		<Card.Root>
			<Card.Header>
				<Card.Title>{title}</Card.Title>
			</Card.Header>
			<Card.Body paddingX={disablePadding ? 0 : 6} paddingY={disablePadding ? 0 : 4}>
				{children}
			</Card.Body>
		</Card.Root>
	);
};
