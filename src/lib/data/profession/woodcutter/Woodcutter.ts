import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const woodcutter: Profession = {
	id: ProfessionId.Woodcutter,
	name: 'Woodcutter',
	icon: 'profession/woodcutter.png',
	actions: [],
	passives: [],
};
