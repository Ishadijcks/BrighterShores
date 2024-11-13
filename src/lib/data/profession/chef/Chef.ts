import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { cookingRecipes } from '$lib/data/profession/chef/Cooking';

export const chef: Profession = {
	id: ProfessionId.Chef,
	name: 'Chef',
	icon: 'profession/chef.png',
	actions: [...cookingRecipes],
	passives: [],
};
