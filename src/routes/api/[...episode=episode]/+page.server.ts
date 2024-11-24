import type { EntryGenerator } from './$types';
import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';

export const entries: EntryGenerator = () => {
	return EpisodeRepository.episodes.map((e) => {
		return { episode: e.id.slice(1) };
	});
};

export const prerender = true;
