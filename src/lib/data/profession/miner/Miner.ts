import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { minerTools } from '$lib/data/profession/miner/MinerTools';

export const miner: Profession = {
	id: ProfessionId.Miner,
	name: 'Miner',
	icon: 'profession/miner.png',
	actions: [],
	passives: [],
	tools: [...minerTools],
};
