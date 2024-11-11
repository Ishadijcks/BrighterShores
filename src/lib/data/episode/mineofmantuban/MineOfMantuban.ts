import type { Episode } from '$lib/model/episode/Episode';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const mineOfMantuban: Episode = {
	id: EpisodeId.MineOfMantuban,
	name: 'Mine of Mantuban',
	icon: 'episode/mineofmantuban.png',
	professions: [
		ProfessionId.Minefighter,
		ProfessionId.Bonewright,
		ProfessionId.Miner,
		ProfessionId.BlackSmith,
		ProfessionId.Stonemason,
	],
};
