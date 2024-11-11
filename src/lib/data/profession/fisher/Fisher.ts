import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { fisherTools } from '$lib/data/profession/fisher/FisherTools';
import { activeFishingActions } from '$lib/data/profession/fisher/Fishing';

export const fisher: Profession = {
	id: ProfessionId.Fisher,
	name: 'Fisher',
	icon: 'profession/fisher.png',
	tools: fisherTools,
	actions: activeFishingActions,
	passives: [],
};
