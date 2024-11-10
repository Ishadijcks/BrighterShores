import type { Episode } from '$lib/model/episode/Episode';
import type { EpisodeId } from '$lib/data/game/EpisodeId';
import { hopeport } from '$lib/data/episode/hopeport/Hopeport';
import { hopeforest } from '$lib/data/episode/hopeforest/Hopeforest';
import { mineOfMantuban } from '$lib/data/episode/mineofmantuban/MineOfMantuban';
import { crenopolis } from '$lib/data/episode/crenopolis/Crenopolis';

export class EpisodeRepository {
	public static episodes: Episode[] = [hopeport, hopeforest, mineOfMantuban, crenopolis];

	public static getEpisode(id: EpisodeId): Episode {
		const episode = this.episodes.find((episode) => episode.id === id);
		if (episode === undefined) {
			throw new Error(`Could not find episode with id '${id}'`);
		}
		return episode;
	}

	public static getEpisodeByName(name: string): Episode {
		const episode = this.episodes.find((episode) => episode.name === name);
		if (episode === undefined) {
			throw new Error(`Could not find episode with name '${name}'`);
		}
		return episode;
	}
}
