import { Card } from '@parkui/components/ui';

export const SiteCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
	return (
		<Card.Root>
			<Card.Header>
				<Card.Title>{title}</Card.Title>
			</Card.Header>
			<Card.Body>{children}</Card.Body>
		</Card.Root>
	);
};
