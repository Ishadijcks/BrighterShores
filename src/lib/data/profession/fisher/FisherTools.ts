import { ToolId } from '$lib/data/tool/ToolId';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

const rawFisherTools: Omit<Tool, 'profession'>[] = [
	{
		id: ToolId.FishingSpear,
		name: 'Fishing Spear',
		description: 'A crude but effective way to fish',
		maxTier: 6,
		bonusXp: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
		lvl: [0, 15, 43, 113, 176, 310],
		cost: [12000, 126000, 340000, 957000, 1730000, 356000],
	},
	{
		id: ToolId.FishingRod,
		name: 'Fishing Rod',
		description: 'Not much more than a stick and a piece of string',
		maxTier: 6,
		bonusXp: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
		lvl: [20, 66, 116, 157, 205, 363],
		cost: [72000, 309000, 734000, 1270000, 2020000, 4130000],
	},
	{
		id: ToolId.CastNet,
		name: 'Cast Net',
		description: '',
		maxTier: 2,
		bonusXp: [0, 0.05],
		lvl: [28, 179],
		cost: [86400, 716000],
	},
	{
		id: ToolId.LobsterPot,
		name: 'Lobster Pot',
		description: '',
		maxTier: 2,
		bonusXp: [0, 0.05],
		lvl: [39, 176],
		cost: [106000, 1050000],
	},
	{
		id: ToolId.OysterNet,
		name: 'Oyster Net',
		description: '',
		maxTier: 2,
		bonusXp: [0, 0.05],
		lvl: [73, 231],
		cost: [334000, 1800000],
	},
];

export const fisherTools: Tool[] = rawFisherTools.map((t) => {
	return {
		...t,
		profession: ProfessionId.Fisher,
	};
});
