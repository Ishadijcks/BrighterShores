import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { gathererTools } from '$lib/data/profession/gatherer/GathererTools';

export const gatherer: Profession = {
	id: ProfessionId.Gatherer,
	name: 'Gatherer',
	icon: 'profession/gatherer.png',
	actions: [],
	passives: [],
	tools: [...gathererTools],
};
