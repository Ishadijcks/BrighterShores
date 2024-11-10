import type { Experience } from '$lib/model/profession/Experience';
import type { ItemAmount } from '$lib/model/item/ItemAmount';
import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';

export interface Action {
	requirements: LevelRequirement[];
	input: ItemAmount[];
	output: ItemAmount[];
	experience: Experience[];
}