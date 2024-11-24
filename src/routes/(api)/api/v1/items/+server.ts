import { json } from '@sveltejs/kit';
import { ItemRepository } from '$lib/data/repository/ItemRepository';

export function GET() {
	return json(ItemRepository.items);
}

export const prerender = true;
