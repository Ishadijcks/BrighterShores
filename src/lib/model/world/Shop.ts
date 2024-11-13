import type { ShopId } from '$lib/data/world/ShopId';
import type { NpcId } from '$lib/data/world/NpcId';
import type { ItemId } from '$lib/data/game/ItemId';

export interface Shop {
	id: ShopId;
	name: string;
	owner: NpcId;

	items: Record<string, ItemId[]>;
}
