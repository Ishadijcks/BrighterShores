import type { RoomId } from '$lib/data/world/RoomId';
import type { EpisodeId } from '$lib/data/game/EpisodeId';
import type { NpcId } from '$lib/data/world/NpcId';
import type { StorageType } from '$lib/model/storage/StorageType';
import type { ShopId } from '$lib/data/world/ShopId';

export interface Room {
	id: RoomId;
	name: string;
	episode: EpisodeId;
	npcs?: NpcId[];
	shops?: ShopId[];
	banks?: StorageType[];
}
