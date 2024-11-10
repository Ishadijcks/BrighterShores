import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const bonewright: Profession = {
	id: ProfessionId.Bonewright,
	name: 'Bonewright',
	icon: 'profession/bonewright.png',
	actions: [],
	passives: [],
};
