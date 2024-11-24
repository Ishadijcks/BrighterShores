import type { EntryGenerator } from './$types';
import { json } from '@sveltejs/kit';
import { ToolRepository } from '$lib/data/repository/ToolRepository';
import type { ToolId } from '$lib/data/tool/ToolId';

export function GET({ params }) {
	return json(ToolRepository.getTool(('/' + params.tool) as ToolId));
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	return ToolRepository.tools.map((i) => {
		return {
			tool: i.id.slice(1),
		};
	});
};
