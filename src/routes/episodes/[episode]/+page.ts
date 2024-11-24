import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../../../.svelte-kit/types/src/routes';
import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';

export const load: PageLoad = ({ params }) => {
	try {
		return {
			profession: EpisodeRepository.getEpisodeByName(params.episode),
		};
	} catch {
		error(404, 'Not found');
	}
};
