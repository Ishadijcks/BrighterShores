import type { EpisodeId } from '$lib/data/game/EpisodeId';

export interface Episode {
	id: EpisodeId;
	name: string;
	icon: string;
}
