import type { EpisodeId } from '$lib/data/game/EpisodeId';
import type { ProfessionId } from '$lib/data/game/ProfessionId';
import type { Room } from '$lib/model/world/Room';

export interface Episode {
	id: EpisodeId;
	name: string;
	icon: string;
	professions: ProfessionId[];
	rooms?: Room[];
}
