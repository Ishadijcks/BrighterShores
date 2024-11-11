import type { EpisodeId } from '$lib/data/game/EpisodeId';
import type { ProfessionId } from '$lib/data/game/ProfessionId';

export interface Episode {
	id: EpisodeId;
	name: string;
	icon: string;
	professions: ProfessionId[];
}
