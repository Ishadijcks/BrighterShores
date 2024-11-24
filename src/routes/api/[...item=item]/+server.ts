import { json } from '@sveltejs/kit';
import { ItemRepository } from '$lib/data/repository/ItemRepository';
import type { ItemId } from '$lib/data/game/ItemId';

export function GET({ params }) {
	return json(ItemRepository.getItem(('/' + params.item) as ItemId));
}
