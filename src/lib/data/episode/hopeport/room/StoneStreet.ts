import type { Room } from '$lib/model/world/Room';
import { RoomId } from '$lib/data/world/RoomId';
import { NpcId } from '$lib/data/world/NpcId';
import { ShopId } from '$lib/data/world/ShopId';
import { EpisodeId } from '$lib/data/game/EpisodeId';

export const stoneStreet: Room = {
	id: RoomId.StoneStreet,
	name: 'Stone Street',
	banks: [],
	npcs: [NpcId.Kevin],
	shops: [ShopId.KevinsIngredients],
	episode: EpisodeId.Hopeport,
};
