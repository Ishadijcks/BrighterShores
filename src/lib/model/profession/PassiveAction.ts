import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
import type { Experience } from '$lib/model/profession/Experience';

export interface PassiveAction {
	lvl: LevelRequirement;
	knowledgeCost: number;
	activity: string;
	category: string;

	// TODO(@Isha): Add passive gains and timing stuff
	exp: Experience;
}
