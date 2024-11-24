import type { ParamMatcher } from '@sveltejs/kit';
import { NpcId } from '$lib/data/world/NpcId';

export const match = ((param: string) => {
	return Object.values(NpcId).includes(('/' + param) as NpcId);
}) satisfies ParamMatcher;
