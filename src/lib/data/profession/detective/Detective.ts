import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const detective: Profession = {
	id: ProfessionId.Detective,
	name: 'Detective',
	icon: 'profession/detective.png',
	actions: [],
	passives: [],
};
