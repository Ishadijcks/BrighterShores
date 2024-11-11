import { ToolType } from '$lib/data/tool/ToolType';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export interface FisherTool {
	type: ToolType;
	name: string;
	description: string;
	tier: number;
	level: number;
	cost: number;
}

// prettier-ignore
const rawFisherTools: FisherTool[] = [
	{type: ToolType.FishingSpear, name: "Fishing Spear (1)", description: 'A crude but effective way to fish', tier: 1, level: 0, cost: 12000 },
	{type: ToolType.FishingSpear, name: "Fishing Spear (2)", description: 'A crude but effective way to fish', tier: 2, level: 15, cost: 126000},
	{type: ToolType.FishingRod, name: "Fishing Rod (1)", description: 'Not much more than a stick and a piece of string', tier: 1, level: 20, cost: 72000 },
	{type: ToolType.CastNet, name: "Cast Net (1)", description: '', tier: 1, level: 28, cost: Infinity },
	{type: ToolType.LobsterPot, name: "Lobster Pot (1)", description: '', tier: 1, level: 39, cost: Infinity },
	{type: ToolType.FishingSpear, name: "Fishing Spear (3)", description: 'A crude but effective way to fish', tier: 3, level: 43, cost: Infinity },
	{type: ToolType.FishingRod, name: "Fishing Rod (2)", description: 'Not much more than a stick and a piece of string', tier: 2, level: 66, cost: Infinity },
	{type: ToolType.OysterNet, name: "Oyster Net (1)", description: '', tier: 1, level: 73, cost: Infinity },
	{type: ToolType.FishingSpear, name: "Fishing Spear (4)", description: 'A crude but effective way to fish', tier: 4, level: 113, cost: Infinity },
	{type: ToolType.FishingRod, name: "Fishing Rod (3)", description: 'Not much more than a stick and a piece of string', tier: 3, level: 116, cost: Infinity },
	{type: ToolType.FishingRod, name: "Fishing Rod (4)", description: 'Not much more than a stick and a piece of string', tier: 4, level: 157, cost: Infinity },
	{type: ToolType.FishingSpear, name: "Fishing Spear (5)", description: 'A crude but effective way to fish', tier: 5, level: 176, cost: Infinity },
	{type: ToolType.LobsterPot, name: "Lobster Pot (2)", description: '', tier: 1, level: 39, cost: Infinity },
	{type: ToolType.CastNet, name: "Cast Net (2)", description: '', tier: 2, level: 179, cost: Infinity },
	{type: ToolType.FishingRod, name: "Fishing Rod (5)", description: 'Not much more than a stick and a piece of string', tier: 5, level: 205, cost: Infinity },
	{type: ToolType.OysterNet, name: "Oyster Net (2)", description: '', tier: 2, level: 231, cost: Infinity },
	{type: ToolType.FishingSpear, name: "Fishing Spear (6)", description: 'A crude but effective way to fish', tier: 6, level: 310, cost: Infinity },
	{type: ToolType.FishingRod, name: "Fishing Rod (6)", description: 'Not much more than a stick and a piece of string', tier: 6, level: 363, cost: Infinity },

];

export const fisherTools: Tool[] = rawFisherTools.map((t) => {
	return {
		...t,
		levelRequirement: [{ profession: ProfessionId.Fisher, level: t.level }],
	};
});
