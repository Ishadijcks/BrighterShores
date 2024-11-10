import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const forager: Profession = {
	id: ProfessionId.Forager,
	name: 'Forager',
	icon: 'profession/forager.png',
	actions: [],
	passives: [],
};
