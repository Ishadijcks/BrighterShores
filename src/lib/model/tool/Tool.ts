import type { ToolType } from '$lib/data/tool/ToolType';
import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';

export interface Tool {
	type: ToolType;
	name: string;
	description: string;
	tier: number;
	levelRequirement: LevelRequirement[];
	cost: number;
}
