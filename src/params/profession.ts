import type { ParamMatcher } from '@sveltejs/kit';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const match = ((param: string) => {
	return Object.values(ProfessionId).includes(('/' + param) as ProfessionId);
}) satisfies ParamMatcher;
