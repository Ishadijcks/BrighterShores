import type { ParamMatcher } from '@sveltejs/kit';
import { ShopId } from '$lib/data/world/ShopId';

export const match = ((param: string) => {
	return Object.values(ShopId).includes(('/' + param) as ShopId);
}) satisfies ParamMatcher;
