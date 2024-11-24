import { json } from '@sveltejs/kit';
import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';
import type { EpisodeId } from '$lib/data/game/EpisodeId';

export function GET({ params }) {
	return json(EpisodeRepository.getEpisode(('/' + params.episode) as EpisodeId));
}
