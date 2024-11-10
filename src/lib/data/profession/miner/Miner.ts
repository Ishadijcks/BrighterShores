import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const miner: Profession = {
	id: ProfessionId.Miner,
	name: 'Miner',
	icon: 'profession/miner.png',
	actions: [],
	passives: [],
};
