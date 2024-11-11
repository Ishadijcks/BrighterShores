import type { ItemId } from '$lib/data/game/ItemId';
import type { EpisodeId } from '$lib/data/game/EpisodeId';
import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
import type { StorageType } from '$lib/model/storage/StorageType';
import type { ShopId } from '$lib/model/shop/ShopId';

export interface Item {
	id: ItemId;
	name: string;
	episodes: EpisodeId[];
	professions: LevelRequirement[];
	buyValue: number;
	sellValue: number;
	description: string;
	storages?: StorageType[];
	shops?: ShopId[];
}
