import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes';
import { ShopRepository } from '$lib/data/repository/ShopRepository';

export const load: PageLoad = ({ params }) => {
	try {
		return {
			shop: ShopRepository.getShopByName(params.shop),
		};
	} catch {
		error(404, 'Not found');
	}
};
