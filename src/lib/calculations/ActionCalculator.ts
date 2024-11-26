import type { State } from '$lib/state/State';
import type { Action } from '$lib/model/profession/Action';
import { ToolRepository } from '$lib/data/repository/ToolRepository';
import type { Experience } from '$lib/model/profession/Experience';
import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import type { ProfessionId } from '$lib/data/game/ProfessionId';

export const calculateExperiences = (state: State, action: Action): Experience[] => {
	return action.experience.map((exp) => {
		const toolId = action.tool;
		if (!toolId) {
			return exp;
		}
		const tool = ToolRepository.getTool(toolId);

		const toolState = state.tool[toolId];
		const tierBonus = calculateTierBonus(tool, toolState.tier);
		const enchantBonus = calculateEnchantmentBonus(toolState.enchantment);
		return {
			amount: exp.amount * (1 + tierBonus + enchantBonus),
			profession: exp.profession,
		};
	});
};

export const calculateTierBonus = (tool: Tool, level: number): number => {
	return level >= 1 ? tool.bonusXp[level - 1] : 0;
};

export const calculateEnchantmentBonus = (level: number): number => {
	const upTo25 = 0.004 * Math.min(25, level);
	const upTo50 = Math.max(0, 0.002 * Math.min(50, level - 25));
	const upTo100 = Math.max(0, 0.001 * Math.min(100, level - 50));
	return upTo25 + upTo50 + upTo100;
};

export const hasExpModifiers = (profession: ProfessionId): boolean => {
	return (ProfessionRepository.getProfession(profession).tools?.length ?? 0) !== 0;
};
