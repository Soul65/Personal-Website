import { create } from 'zustand';
import { AnimationStoreType, SnowfallTypes } from './store.d';

export const useAnimationStore = create<AnimationStoreType>((set) => ({
	isSnowfallEnabled: true,
	setIsSnowfallEnabled: (enabled: boolean) => set({ isSnowfallEnabled: enabled }),
	isNameAnimated: true,
	setIsNameAnimated: (animated: boolean) => set({ isNameAnimated: animated }),
	snowfallType: SnowfallTypes.snow,
	setSnowfallType: (type: SnowfallTypes) => set({ snowfallType: type }),
}));
