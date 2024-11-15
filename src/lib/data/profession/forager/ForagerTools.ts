import { ToolId } from '$lib/data/tool/ToolId';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

const rawForagerTools: Omit<Tool, 'profession'>[] = [
	{
		id: ToolId.Trowel,
		name: 'Trowel',
		description: 'For digging up shells and potatoes',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [6, 78, 192],
		cost: [46800, 352000, 1140000],
	},
	{
		id: ToolId.PondNet,
		name: 'Pond Net',
		description: 'Use this to find a few things in ponds and rock pools',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [10, 102, 242],
		cost: [54000, 439000, 1410000],
	},
	{
		id: ToolId.Secateurs,
		name: 'Secateurs',
		description: 'For taking cuttings of various plants',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [2, 84, 168],
		cost: [13200, 374000, 1010000],
	},
];

export const foragerTools: Tool[] = rawForagerTools.map((t) => {
	return {
		...t,
		profession: ProfessionId.Forager,
	};
});
