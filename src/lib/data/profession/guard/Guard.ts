import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const guard: Profession = {
	id: ProfessionId.Guard,
	name: 'Guard',
	icon: 'profession/guard.png',
	actions: [],
	passives: [],
};
