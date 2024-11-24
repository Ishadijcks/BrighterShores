import type { ParamMatcher } from '@sveltejs/kit';
import { ItemId } from '$lib/data/game/ItemId';

export const match = ((param: string) => {
	return Object.values(ItemId).includes(('/' + param) as ItemId);
}) satisfies ParamMatcher;
