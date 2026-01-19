import { Group, Text } from '@parkui/components/ui';
// import { ThemeToggle } from './ThemeToggle';
import { Box } from 'styled-system/jsx';
import { useEffect, useState } from 'react';

export const HeaderBar = () => {
	const [isFirstNameGlowing, setIsFirstNameGlowing] = useState(true);
	const [isLastNameGlowing, setIsLastNameGlowing] = useState(false);

	useEffect(() => {
		let step = 0;

		const runSequence = () => {
			// 0-4: alternate first/last name (4 times)
			if (step >= 0 && step < 4) {
				setIsFirstNameGlowing(step % 2 === 0);
				setIsLastNameGlowing(step % 2 === 1);

				setTimeout(() => {
					step++;
					runSequence();
				}, 1000);
			}

			// 4-9: flash both at same time 3 times (on/off)
			else if (step >= 4 && step < 10) {
				const bothOn = step % 2 === 0;

				setIsFirstNameGlowing(bothOn);
				setIsLastNameGlowing(bothOn);

				setTimeout(() => {
					step++;
					runSequence();
				}, 300);
			}

			// 10: both stay on for 8 seconds
			else if (step === 10) {
				setIsFirstNameGlowing(true);
				setIsLastNameGlowing(true);

				setTimeout(() => {
					step = 0;
					runSequence();
				}, 8000);
			}
		};

		runSequence();
	}, []);

	return (
		<header id='top'>
			<Group justify='center' marginBottom='4'>
				<Text fontFamily='Monoton' fontSize='7xl' textAlign='center'>
					<Group>
						<Box
							style={{
								color: '#ffffff',
								textShadow: isFirstNameGlowing
									? '0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff'
									: '',
								transition: 'opacity 0.1s ease-in-out',
								opacity: isFirstNameGlowing ? 1 : 0.3,
							}}
						>
							Matt
						</Box>
						<Box
							style={{
								color: 'Red',
								textShadow: isLastNameGlowing
									? '0 0 80px Red,0 0 30px FireBrick,0 0 6px DarkRed'
									: '',
								transition: 'opacity 0.1s ease-in-out',
								opacity: isLastNameGlowing ? 1 : 0.3,
							}}
						>
							Allen
						</Box>
					</Group>
				</Text>
				{/* <ThemeToggle /> */}
			</Group>
		</header>
	);
};
