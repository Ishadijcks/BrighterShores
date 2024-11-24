import type { ParamMatcher } from '@sveltejs/kit';
import { EpisodeId } from '$lib/data/game/EpisodeId';

export const match = ((param: string) => {
	return Object.values(EpisodeId).includes(('/' + param) as EpisodeId);
}) satisfies ParamMatcher;
