import { Group, Text } from '@parkui/components/ui';
// import { ThemeToggle } from './ThemeToggle';
import { useEffect, useState } from 'react';

export const HeaderBar = () => {
	const [isFirstNameGlowing, setIsFirstNameGlowing] = useState(true);
	const [isLastNameGlowing, setIsLastNameGlowing] = useState(false);

	useEffect(() => {
		let timeoutId: number;
		let currentPhase = 0;
		let stepInPhase = 0;

		const phases = [
			{ duration: 1000, steps: 4 }, // Alternating names
			{ duration: 300, steps: 6 }, // Flashing both
			{ duration: 8000, steps: 1 }, // Both glowing
		];

		const runAnimation = () => {
			const phase = phases[currentPhase] ?? { duration: 1000, steps: 1 };

			if (currentPhase === 0) {
				// Alternating names
				setIsFirstNameGlowing(stepInPhase % 2 === 0);
				setIsLastNameGlowing(stepInPhase % 2 === 1);
			} else if (currentPhase === 1) {
				// Flashing both
				const bothOn = stepInPhase % 2 === 0;

				setIsFirstNameGlowing(bothOn);
				setIsLastNameGlowing(bothOn);
			} else {
				// Both glowing
				setIsFirstNameGlowing(true);
				setIsLastNameGlowing(true);
			}

			stepInPhase++;

			if (stepInPhase >= phase.steps) {
				stepInPhase = 0;
				currentPhase = (currentPhase + 1) % phases.length;
			}

			timeoutId = setTimeout(runAnimation, phase.duration);
		};

		runAnimation();

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<header id='top'>
			<Group marginBottom='4' grow flexWrap='wrap'>
				<Text
					fontFamily='Monoton'
					fontSize='7xl'
					textAlign='center'
					color='#ffffff'
					textShadow={
						isFirstNameGlowing
							? '0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff'
							: ''
					}
					transition='opacity 0.1s ease-in-out'
					opacity={isFirstNameGlowing ? 1 : 0.3}
				>
					Matt
				</Text>
				<Text
					fontFamily='Monoton'
					fontSize='7xl'
					textAlign='center'
					color='Red'
					textShadow={
						isLastNameGlowing ? '0 0 80px Red,0 0 30px FireBrick,0 0 6px DarkRed' : ''
					}
					transition='opacity 0.1s ease-in-out'
					opacity={isLastNameGlowing ? 1 : 0.3}
				>
					Allen
				</Text>
				{/* <ThemeToggle /> */}
			</Group>
		</header>
	);
};
