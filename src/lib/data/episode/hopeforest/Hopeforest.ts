import type { Episode } from '$lib/model/episode/Episode';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const hopeforest: Episode = {
	id: EpisodeId.Hopeforest,
	name: 'Hopeforest',
	icon: 'episode/hopeforest.png',
	professions: [ProfessionId.Scout, ProfessionId.Gatherer, ProfessionId.Woodcutter, ProfessionId.Carpenter],
};
