'use client';
import { ClientOnly } from '@ark-ui/react/client-only';
import { Icon } from '@parkui/components/ui/icon';
import { IconButton } from '@parkui/components/ui/icon-button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ClientOnly>
			<IconButton variant='plain' onClick={handleClick}>
				<Icon size='md'>{theme === 'light' ? <SunIcon /> : <MoonIcon />}</Icon>
			</IconButton>
		</ClientOnly>
	);
};
