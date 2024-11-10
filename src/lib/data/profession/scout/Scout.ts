import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const scout: Profession = {
	id: ProfessionId.Scout,
	name: 'Scout',
	icon: 'profession/scout.png',
	actions: [],
	passives: []
};
