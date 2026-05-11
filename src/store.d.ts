export enum SnowfallTypes {
	snow = 'snow',
	rain = 'rain',
	stars = 'stars',
	leaves = 'leaves',
}

export interface AnimationStoreType {
	isSnowfallEnabled: boolean;
	setIsSnowfallEnabled: (enabled: boolean) => void;
	isNameAnimated: boolean;
	setIsNameAnimated: (animated: boolean) => void;
	snowfallType: SnowfallTypes;
	setSnowfallType: (type: SnowfallTypes) => void;
}
