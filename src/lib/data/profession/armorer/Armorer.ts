import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const armorer: Profession = {
	id: ProfessionId.Armorer,
	name: 'Armorer',
	icon: 'profession/armorer.png',
	actions: [],
	passives: [],
};
