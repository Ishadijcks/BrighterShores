import { getExp, getLevel, getTotalExpForLevel } from '$lib/model/profession/LevelData';
import type { ProfessionId } from '$lib/data/game/ProfessionId';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import type { State } from '$lib/state/State';

/**
 * Calculates the amount of actions need to be performed to gain a level in the specified profession
 * Assumes you will always use the action that gives the most exp.
 * @param professionId The profession to check for
 * @param maxLevel How many levels to calculate
 */
export const calculateActionsNeededPerLevel = (professionId: ProfessionId, maxLevel: number = 500): number[] => {
	const profession = ProfessionRepository.getProfession(professionId);
	const levels = Array.from(Array(maxLevel).keys());

	return levels.map((n) => {
		const expNeeded = getTotalExpForLevel(n);
		const possibleActions = profession.actions.filter((action) => {
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

export const calculateTotalLevel = (state: State): number => {
	return Object.values(state.profession)
		.map((exp) => getLevel(exp))
		.reduce((a, b) => a + b);
};

/**
 * Horribly inefficient
 * @param professionId
 * @param exp
 * @param targetLevel
 */
export const calculateActionsNeededTorEachLevel = (
	professionId: ProfessionId,
	exp: number,
	targetLevel: number,
): void => {
	const profession = ProfessionRepository.getProfession(professionId);

	const actionsUsed: Record<string, number> = { test: 0 };

	const targetExp = getExp(targetLevel);
	while (exp < targetExp) {
		const level = getLevel(exp);
		const possibleActions = profession.actions.filter((action) => {
			const req = action.requirements.find((r) => {
				return r.profession === professionId;
			});
			return level >= (req?.level ?? Infinity);
		});

		const possibleExps: number[] = possibleActions.map((action) => {
			return (
				action.experience.find((r) => {
					return r.profession === professionId;
				})?.amount ?? 0
			);
		});

		const bestExp = Math.max(...possibleExps);
		exp += bestExp;
		actionsUsed['test'] += 1;
	}
	console.log(actionsUsed);
};
