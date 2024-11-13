import type { Item } from '$lib/model/item/Item';
import { hides } from '$lib/data/profession/leatherworker/item/Hides';
import { leathers } from '$lib/data/profession/leatherworker/item/Leathers';
import type { ItemId } from '$lib/data/game/ItemId';
import { logs } from '$lib/data/profession/woodcutter/item/Logs';
import { planks } from '$lib/data/profession/carpenter/item/Planks';
import { fish } from '$lib/data/profession/fisher/item/Fish';
import { capes } from '$lib/data/item/capes';
import { ingredients } from '$lib/data/profession/chef/item/Ingredients';
import { dishes } from '$lib/data/profession/chef/item/Dishes';

export class ItemRepository {
	// TODO(@Isha): Grab these from profession maybe?
	public static items: Item[] = [
		// Chef
		...ingredients,
		...dishes,

		// Fisher
		...fish,

		// Woodcutter
		...logs,

		// Carpenter
		...planks,

		// Leatherworker
		...hides,
		...leathers,

		// Capes,
		...capes,
	];

	public static getItem(id: ItemId): Item {
		const item = this.items.find((item) => item.id === id);
		if (item === undefined) {
			throw new Error(`Could not find item with id '${id}'`);
		}
		return item;
	}
}
