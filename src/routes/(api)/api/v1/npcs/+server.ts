import { json } from '@sveltejs/kit';
import { NpcRepository } from '$lib/data/repository/NpcRepository';

export function GET() {
	return json(NpcRepository.npcs);
}

export const prerender = true;
