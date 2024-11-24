import type { EntryGenerator } from './$types';
import { json } from '@sveltejs/kit';
import { ShopRepository } from '$lib/data/repository/ShopRepository';
import type { ShopId } from '$lib/data/world/ShopId';

export function GET({ params }) {
	return json(ShopRepository.getShop(('/' + params.shop) as ShopId));
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	return ShopRepository.shops.map((i) => {
		return {
			shop: i.id.slice(1),
		};
	});
};
