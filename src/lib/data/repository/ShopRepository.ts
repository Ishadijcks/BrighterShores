import type { Shop } from '$lib/model/world/Shop';
import { kevinsIngredients } from '$lib/data/episode/hopeport/shop/KevinsIngredients';
import type { ShopId } from '$lib/data/world/ShopId';

export class ShopRepository {
	// TODO(@Isha): Get from episodes? Or the other way around?
	public static shops: Shop[] = [kevinsIngredients];

	public static getShop(id: ShopId): Shop {
		const shop = this.shops.find((shop) => shop.id === id);
		if (shop === undefined) {
			throw new Error(`Could not find shop with id '${id}'`);
		}
		return shop;
	}

	public static getShopByName(name: string): Shop {
		const shop = this.shops.find((shop) => shop.name === name);
		if (shop === undefined) {
			throw new Error(`Could not find shop with name '${name}'`);
		}
		return shop;
	}
}
