import { Image, UnstyledButton } from '@mantine/core';

export const ImageLink = ({
	href,
	src,
	alt,
	height,
	width,
}: {
	href: string;
	src: string;
	alt: string;
	height?: string;
	width?: string;
}) => (
	<UnstyledButton
		component='a'
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		style={{
			width: width || '150px',
			height: height || '70px',
			display: 'flex',
			justifyContent: 'left',
			alignItems: 'center',
		}}
	>
		<Image src={src} alt={alt} />
	</UnstyledButton>
);
