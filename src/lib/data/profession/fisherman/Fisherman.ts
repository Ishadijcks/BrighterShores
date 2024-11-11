import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { fishermanTools } from '$lib/data/profession/fisherman/FishermanTools';
import { activeFishingActions } from '$lib/data/profession/fisherman/Fishing';

export const fisherman: Profession = {
	id: ProfessionId.Fisherman,
	name: 'Fisherman',
	icon: 'profession/fisherman.png',
	tools: fishermanTools,
	actions: activeFishingActions,
	passives: [],
};
