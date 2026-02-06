import { create } from 'zustand';

interface AnimationStoreType {
	isSnowfallEnabled: boolean;
	setIsSnowfallEnabled: (enabled: boolean) => void;
	isNameAnimated: boolean;
	setIsNameAnimated: (animated: boolean) => void;
}

export const useAnimationStore = create<AnimationStoreType>((set) => ({
	isSnowfallEnabled: true,
	setIsSnowfallEnabled: (enabled: boolean) => set({ isSnowfallEnabled: enabled }),
	isNameAnimated: true,
	setIsNameAnimated: (animated: boolean) => set({ isNameAnimated: animated }),
}));
