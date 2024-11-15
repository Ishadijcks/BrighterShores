import { ToolId } from '$lib/data/tool/ToolId';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionId } from '$lib/data/game/ProfessionId';

const rawDetectiveTools: Omit<Tool, 'profession'>[] = [
	{
		id: ToolId.Handcuffs,
		name: 'Handcuffs',
		description: "Joins a criminal's wrists together. Why aren't these things called wrist cuffs",
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [0, 52, 183],
		cost: [36000, 259000, 1090000],
	},
	{
		id: ToolId.MagnifyingGlass,
		name: 'Magnifying Glass',
		description: 'A magnifying glass helps you spot details that you might have otherwise missed',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [10, 90, 198],
		cost: [54000, 396000, 1170000],
	},
	{
		id: ToolId.Binoculars,
		name: 'Binoculars',
		description: 'Get a better look at the criminals over the road',
		maxTier: 3,
		bonusXp: [0, 0.05, 0.1],
		lvl: [31, 105, 243],
		cost: [91800, 450000, 1420],
	},
	// TODO(@Isha): This is not really a conventional tool, do you get them for free as you level?
	//  Do they give a bonus ever?
	{
		id: ToolId.WantedPosters,
		name: 'Wanted Posters',
		description: 'Wanted posters for Dumpy Smith',
		maxTier: 1,
		bonusXp: [0],
		lvl: [40],
		cost: [0],
	},
];

export const detectiveTools: Tool[] = rawDetectiveTools.map((t) => {
	return {
		...t,
		profession: ProfessionId.Detective,
	};
});
