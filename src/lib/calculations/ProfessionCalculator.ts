import { getTotalExpForLevel } from '$lib/model/profession/LevelData';
import type { Action } from '$lib/model/profession/Action';
import type { ProfessionId } from '$lib/data/game/ProfessionId';

/**
 * Calculates the amount of actions need to be performed to gain a level in the specified profession
 * Assumes you will always use the action that gives the most exp.
 * @param professionId The profession to check for
 * @param actions The list of actions to check
 * @param maxLevel How many levels to calculate
 */
export const getActionsNeededPerLevel = (
	professionId: ProfessionId,
	actions: Action[],
	maxLevel: number = 500,
): number[] => {
	const levels = Array.from(Array(maxLevel).keys());
	const reversedActions = [...actions];
	reversedActions.reverse();

	return levels.map((n) => {
		const expNeeded = getTotalExpForLevel(n);
		const possibleActions = actions.filter((action) => {
			const req = action.requirements.find((r) => {
				return r.profession === professionId;
			});
			return n >= (req?.level ?? Infinity);
		});

		const possibleExps: number[] = possibleActions.map((action) => {
			return (
				action.experience.find((r) => {
					return r.profession === professionId;
				})?.amount ?? 0
			);
		});

		const bestExp = Math.max(...possibleExps);
		return Math.ceil(expNeeded / bestExp);
	});
};
