import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';

interface Foragee {
	name: string;
	description: string;
	id: ItemId;
	f: number;
	a: number;
	c: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawForagees: Foragee[] = [
];

export const foragees: Item[] = rawForagees.map((item) => {
	return {
		fullName: item.name,
		description: item.description,
		professions: [
			{ profession: ProfessionId.Forager, level: item.f },
			item.a ? { profession: ProfessionId.Alchemist, level: item.a } : null,
			item.c ? { profession: ProfessionId.Chef, level: item.c } : null,
		].filter((item) => item != null),
		id: item.id,
		episodes: [EpisodeId.Hopeport],
		buyValue: item.buyValue,
		sellValue: item.sellValue,
		// shops: [ShopId.HideStall],
		// storages: [StorageType.HidesBank],
	};
});
