import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { sawmillActions } from '$lib/data/profession/carpenter/Sawmill';

export const carpenter: Profession = {
	id: ProfessionId.Carpenter,
	name: 'Carpenter',
	icon: 'profession/carpenter.png',
	actions: [...sawmillActions],
	passives: [],
};
