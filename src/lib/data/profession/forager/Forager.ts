import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { foragingActions } from '$lib/data/profession/forager/Foraging';
import { foragerPassiveActions } from '$lib/data/profession/forager/ForagerPassiveActions';
import { foragerTools } from '$lib/data/profession/forager/ForagerTools';

export const forager: Profession = {
	id: ProfessionId.Forager,
	name: 'Forager',
	icon: 'profession/forager.png',
	actions: [...foragingActions],
	passives: [...foragerPassiveActions],
	tools: [...foragerTools],
};
