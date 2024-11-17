import type { Experience } from '$lib/model/profession/Experience';
import type { ItemAmount } from '$lib/model/item/ItemAmount';
import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
import type { RoomId } from '$lib/data/world/RoomId';
import type { ToolId } from '$lib/data/tool/ToolId';

export interface Action {
	requirements: LevelRequirement[];
	input: ItemAmount[];
	output: ItemAmount[];
	experience: Experience[];
	// TODO(@Isha): Optional for now as we don't have a list of all locations yet
	locations?: RoomId[];
	tool?: ToolId;
}
