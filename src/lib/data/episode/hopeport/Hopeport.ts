import type { Episode } from '$lib/model/episode/Episode';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { stoneStreet } from '$lib/data/episode/hopeport/room/StoneStreet';

export const hopeport: Episode = {
	id: EpisodeId.Hopeport,
	name: 'Hopeport',
	icon: 'episode/hopeport.png',
	professions: [
		ProfessionId.Guard,
		ProfessionId.Chef,
		ProfessionId.Fisher,
		ProfessionId.Gatherer,
		ProfessionId.Alchemist,
	],
	rooms: [stoneStreet],
};
