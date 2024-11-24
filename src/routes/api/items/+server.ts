import { ItemRepository } from '$lib/data/repository/ItemRepository';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(ItemRepository.items);
}
