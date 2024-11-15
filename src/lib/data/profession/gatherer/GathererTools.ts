import { ToolId } from '$lib/data/tool/ToolId';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

const rawGathererTools: Omit<Tool, 'profession'>[] = [
	{
		id: ToolId.HandRake,
		name: 'Hand Rake',
		description: 'For unearthing useful bones and other useful things',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [4, 111, 221],
		cost: [43200, 471000, 1300000],
	},
	{
		id: ToolId.Sickle,
		name: 'Sickle',
		description: '',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [48, 144, 454],
		cost: [122000, 590000, 2550000],
	},
];

export const gathererTools: Tool[] = rawGathererTools.map((t) => {
	return {
		...t,
		profession: ProfessionId.Gatherer,
	};
});
