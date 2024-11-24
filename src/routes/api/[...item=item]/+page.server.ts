import type { EntryGenerator } from './$types';
import { ItemRepository } from '$lib/data/repository/ItemRepository';

export const entries: EntryGenerator = () => {
	return ItemRepository.items.map((i) => {
		return { item: i.id.slice(1) };
	});
};

export const prerender = true;
