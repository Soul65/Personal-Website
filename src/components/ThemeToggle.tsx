// 'use client';
// import { ClientOnly } from '@ark-ui/react/client-only';
// import { Icon, IconButton } from '@mantine/core';
// import { MoonIcon, SunIcon } from 'lucide-react';

// export const ThemeToggle = () => {
// 	const { theme, setTheme } = useTheme();

// 	const handleClick = () => {
// 		setTheme(theme === 'light' ? 'dark' : 'light');
// 	};

// 	return (
// 		<ClientOnly>
// 			<IconButton variant='plain' onClick={handleClick}>
// 				<Icon size='md'>{theme === 'light' ? <SunIcon /> : <MoonIcon />}</Icon>
// 			</IconButton>
// 		</ClientOnly>
// 	);
// };
