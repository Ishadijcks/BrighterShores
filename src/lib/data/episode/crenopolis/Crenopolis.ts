import type { Episode } from '$lib/model/episode/Episode';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const crenopolis: Episode = {
	id: EpisodeId.Crenopolis,
	name: 'Crenopolis',
	icon: 'episode/crenopolis.png',
	professions: [ProfessionId.Watchman, ProfessionId.Detective, ProfessionId.Leatherworker, ProfessionId.Merchant],
};
