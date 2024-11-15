import { ToolId } from '$lib/data/tool/ToolId';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

const rawWoodcutterTools: Omit<Tool, 'profession'>[] = [
	{
		id: ToolId.Hatchet,
		name: 'Hatchet',
		description: 'A crude hatchet, that should allow you to hack out a few course logs',
		maxTier: 6,
		bonusXp: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
		lvl: [4, 33, 90, 142, 198, 375],
		cost: [43200, 190000, 594000, 1160000, 1960000, 4260000],
	},
	{
		id: ToolId.HandSaw,
		name: 'Hand Saw',
		description: 'A bit rusty, but should be good enough to take down an ash tree',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [0, 72, 185],
		cost: [36000, 331000, 1100000],
	},
	{
		id: ToolId.TwoPersonSaw,
		name: 'Two Person Saw',
		description: 'It has a handle for both you and a friend',
		maxTier: 1,
		bonusXp: [0],
		lvl: [16],
		cost: [64800],
	},
	{
		id: ToolId.TreeLoppers,
		name: 'Tree Loppers',
		description: 'Good for lopping branches from trees',
		maxTier: 6,
		bonusXp: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
		lvl: [20, 67, 111, 156, 205, 350],
		cost: [72000, 313000, 707000, 1260000, 2020000, 3990000],
	},
];

export const woodcutterTools: Tool[] = rawWoodcutterTools.map((t) => {
	return {
		...t,
		profession: ProfessionId.Woodcutter,
	};
});
