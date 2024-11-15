import { ToolId } from '$lib/data/tool/ToolId';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

const rawMinerTools: Omit<Tool, 'profession'>[] = [
	{
		id: ToolId.Pickaxe,
		name: 'Pickaxe',
		description: "Don't get picky about your picks",
		maxTier: 6,
		bonusXp: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
		lvl: [0, 43, 93, 142, 193, 346],
		cost: [36000, 226000, 610000, 1160000, 1910000, 3950000],
	},
	{
		id: ToolId.GoldPanningSieve,
		name: 'Gold Panning Sieve',
		description: '',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [52, 145, 314],
		cost: [129000, 594000, 1800000],
	},
];

export const minerTools: Tool[] = rawMinerTools.map((t) => {
	return {
		...t,
		profession: ProfessionId.Miner,
	};
});
