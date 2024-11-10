import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const fisherman: Profession = {
	id: ProfessionId.Fisherman,
	name: 'Fisherman',
	icon: 'profession/fisherman.png',
	actions: [],
	passives: [],
};
