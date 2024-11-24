import { json } from '@sveltejs/kit';
import { ShopRepository } from '$lib/data/repository/ShopRepository';

export function GET() {
	return json(ShopRepository.shops);
}

export const prerender = true;
