import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const minefighter: Profession = {
	id: ProfessionId.Minefighter,
	name: 'Minefighter',
	icon: 'profession/minefighter.png',
	actions: [],
	passives: []
};
