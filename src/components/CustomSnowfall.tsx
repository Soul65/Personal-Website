import { useEffect, useMemo } from 'react';
import Snowfall from 'react-snowfall';
import { useShallow } from 'zustand/shallow';
import { useAnimationStore } from '../store';
import { SnowfallTypes } from '../store.d';

const currentMonth = new Date().getMonth();

export const CustomSnowfall = () => {
	const [isSnowfallEnabled, snowfallType, setSnowfallType] = useAnimationStore(
		useShallow((state) => [state.isSnowfallEnabled, state.snowfallType, state.setSnowfallType]),
	);

	const { images, radius, speed, wind, color } = useMemo<{
		images: CanvasImageSource[];
		radius: [number, number];
		speed: [number, number];
		wind: [number, number];
		color: string;
	}>(() => {
		// Default to snow for December to February
		let images: CanvasImageSource[] = [];
		let radius: [number, number] = [0.5, 3.0];
		let speed: [number, number] = [0.5, 3.0];
		let wind: [number, number] = [-0.5, 2.0];
		let color: string = '#FFFFFF';

		// If March to May, show rain
		if (snowfallType === SnowfallTypes.rain) {
			images = [];
			radius = [1, 3];
			speed = [4, 8];
			wind = [0, 0];
			color = '#3f51b5';
			// If June to August, show stars
		} else if (snowfallType === SnowfallTypes.stars) {
			const star = document.createElement('img');
			star.src = 'assets/white-star.png';

			images = [star];
			radius = [10, 15];
			speed = [0, 0];
			wind = [-0.5, 0.5];
			color = '#FFFFFF';
			// If September to November, show leaves
		} else if (snowfallType === SnowfallTypes.leaves) {
			const leaf1 = document.createElement('img');
			leaf1.src = 'assets/maple-leaf.png';
			const leaf2 = document.createElement('img');
			leaf2.src = 'assets/oak-leaf.png';
			const leaf3 = document.createElement('img');
			leaf3.src = 'assets/brown-leaf.png';

			images = [leaf1, leaf2, leaf3];
			radius = [20, 20];
			speed = [0.5, 2];
			wind = [-0.5, 0.5];
			color = '#FFFFFF';
		}

		return { images, radius, speed, wind, color };
	}, [snowfallType]);

	useEffect(() => {
		if (currentMonth >= 2 && currentMonth <= 4) setSnowfallType(SnowfallTypes.rain);
		else if (currentMonth >= 5 && currentMonth <= 7) setSnowfallType(SnowfallTypes.stars);
		else if (currentMonth >= 8 && currentMonth <= 10) setSnowfallType(SnowfallTypes.leaves);
		else setSnowfallType(SnowfallTypes.snow);
	}, []);

	return (
		isSnowfallEnabled && (
			<Snowfall
				snowflakeCount={150}
				images={images}
				radius={radius}
				speed={speed}
				wind={wind}
				color={color}
				style={{
					position: 'fixed',
				}}
			/>
		)
	);
};
