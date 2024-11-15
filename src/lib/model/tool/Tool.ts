import type { ToolId } from '$lib/data/tool/ToolId';
import type { ProfessionId } from '$lib/data/game/ProfessionId';

export interface Tool {
	id: ToolId;
	profession: ProfessionId;
	name: string;

	// TODO(@Isha): Change to descriptions?
	//  Tools have multiple descriptions, but I don't want to make them into seperate items as they aren't really
	description: string;
	maxTier: number;
	lvl: number[];
	cost: number[];
	bonusXp: number[];
}
