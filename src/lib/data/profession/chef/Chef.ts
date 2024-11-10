import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const chef: Profession = {
	id: ProfessionId.Chef,
	name: 'Chef',
	icon: 'profession/chef.png',
	actions: [],
	passives: [],
};
