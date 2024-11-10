import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const alchemist: Profession = {
	id: ProfessionId.Alchemist,
	name: 'Alchemist',
	icon: 'profession/alchemist.png',
	actions: [],
	passives: [],
};
