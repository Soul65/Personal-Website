import { Group, Text } from '@parkui/components/ui';
import { ThemeToggle } from './ThemeToggle';
import { Box } from 'styled-system/jsx';
import { useEffect, useState } from 'react';

export const HeaderBar = () => {
	const [isFirstNameGlowing, setIsFirstNameGlowing] = useState(false);
	const [isLastNameGlowing, setIsLastNameGlowing] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFirstNameGlowing((prev) => !prev);
			setIsLastNameGlowing((prev) => !prev);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<header id='top'>
			<Group justify='center' marginBottom='4'>
				<Text fontFamily='Monoton' fontSize='7xl' textAlign='center'>
					<Group>
						<Box
							style={{
								color: 'white',
								textShadow: isFirstNameGlowing
									? '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000, 0 0 30px #ff0000, 0 0 35px #ff0000'
									: '',
								transition: 'opacity 0.1s ease-in-out',
							}}
						>
							Matt
						</Box>
						<Box
							style={{
								color: '#ff0000',
								textShadow: isLastNameGlowing
									? '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000, 0 0 30px #ff0000, 0 0 35px #ff0000'
									: '',
								transition: 'opacity 0.1s ease-in-out',
							}}
						>
							Allen
						</Box>
					</Group>
				</Text>
				<ThemeToggle />
			</Group>
		</header>
	);
};
