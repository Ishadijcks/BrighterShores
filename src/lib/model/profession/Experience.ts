import type { ProfessionId } from '$lib/data/game/ProfessionId';

export interface Experience {
	profession: ProfessionId;
	amount: number;
}
