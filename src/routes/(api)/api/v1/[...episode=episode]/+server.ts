import type { EntryGenerator } from './$types';
import { json } from '@sveltejs/kit';
import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';
import { EpisodeId } from '$lib/data/game/EpisodeId';

export function GET({ params }) {
	return json(EpisodeRepository.getEpisode(('/' + params.episode) as EpisodeId));
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	return EpisodeRepository.episodes.map((i) => {
		return {
			episode: i.id.slice(1),
		};
	});
};
