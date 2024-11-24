import type { ParamMatcher } from '@sveltejs/kit';
import { ToolId } from '$lib/data/tool/ToolId';

export const match = ((param: string) => {
	return Object.values(ToolId).includes(('/' + param) as ToolId);
}) satisfies ParamMatcher;
