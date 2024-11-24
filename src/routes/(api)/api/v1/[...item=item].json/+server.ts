import type { EntryGenerator } from './$types';
import { json } from '@sveltejs/kit';
import { ItemRepository } from '$lib/data/repository/ItemRepository';
import { ItemId } from '$lib/data/game/ItemId';

export function GET({ params }) {
	return json(ItemRepository.getItem(('/' + params.item) as ItemId));
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	return ItemRepository.items.map((i) => {
		return {
			item: i.id.slice(1),
		};
	});
};
