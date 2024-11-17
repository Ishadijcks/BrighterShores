import type { State } from '$lib/state/State';
import type { Action } from '$lib/model/profession/Action';
import { ToolRepository } from '$lib/data/repository/ToolRepository';
import type { Experience } from '$lib/model/profession/Experience';

export const calculateExperience = (state: State, action: Action): Experience[] => {
	return action.experience.map((exp) => {
		const toolId = action.tool;
		if (!toolId) {
			return exp;
		}
		const tool = ToolRepository.getTool(toolId);

		const toolState = state.tool[toolId];
		const tierBonus = tool.bonusXp[toolState.tier];
		const enchantBonus = tool.bonusXp[toolState.enchantment];
		return {
			amount: exp.amount * (1 + tierBonus + enchantBonus),
			profession: exp.profession,
		};
	});
};

export const calculateEnchantmentBonus = (level: number): number => {
	const upTo25 = 0.004 * Math.min(25, level);
	const upTo50 = Math.max(0, 0.002 * Math.min(50, level - 25));
	return upTo25 + upTo50;
};
