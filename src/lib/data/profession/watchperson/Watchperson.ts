import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const watchperson: Profession = {
	id: ProfessionId.Watchperson,
	name: 'Watchperson',
	icon: 'profession/watchperson.png',
	actions: [],
	passives: [],
};
