import type { ProfessionId } from '$lib/data/game/ProfessionId';

export interface LevelRequirement {
	profession: ProfessionId;
	level: number;
}
