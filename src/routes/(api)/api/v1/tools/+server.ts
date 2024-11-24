import { json } from '@sveltejs/kit';
import { ToolRepository } from '$lib/data/repository/ToolRepository';

export function GET() {
	return json(ToolRepository.tools);
}

export const prerender = true;
