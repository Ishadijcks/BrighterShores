import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const gatherer: Profession = {
	id: ProfessionId.Gatherer,
	name: 'Gatherer',
	icon: 'profession/gatherer.png',
	actions: [],
	passives: [],
};
