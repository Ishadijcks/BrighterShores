import type { Action } from '$lib/model/profession/Action';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface SawmillAction {
	level: number;
	log: ItemId;
	plank: ItemId;
	exp: number;
}

// prettier-ignore
const rawSawmillActions: SawmillAction[] = [
	{ level: 0, log: ItemId.CoarseAshLog, plank: ItemId.CoarseAshPlank, exp: 56 },
	{ level: 2, log: ItemId.CoarseOakLog, plank: ItemId.CoarseOakPole, exp: 119 },
	{ level: 4, log: ItemId.CoarsePineLog, plank: ItemId.CoarsePinePole, exp: 127 },
	{ level: 6, log: ItemId.CoarseHickoryLog, plank: ItemId.CoarseHickoryPole, exp: 135 },
	{ level: 8, log: ItemId.CoarseJuniperLog, plank: ItemId.CoarseJuniperStave, exp: 70 },
	{ level: 10, log: ItemId.CoarsePoplarLog, plank: ItemId.CoarsePoplarPole, exp: 151 },
	{ level: 12, log: ItemId.CoarseSuaveLog, plank: ItemId.CoarseSuavePole, exp: 159 },
	{ level: 14, log: ItemId.CoarseYewLog, plank: ItemId.CoarseYewPole, exp: 168 },
	{ level: 16, log: ItemId.RuggedAshLog, plank: ItemId.RuggedAshPlank, exp: 89 },
	{ level: 18, log: ItemId.RuggedOakLog, plank: ItemId.RuggedOakPole, exp: 188 },
	{ level: 22, log: ItemId.RuggedPineLog, plank: ItemId.RuggedPinePole, exp: 219 },
	{ level: 30, log: ItemId.RuggedHickoryLog, plank: ItemId.RuggedHickoryPole, exp: 251 },
	{ level: 35, log: ItemId.RuggedJuniperLog, plank: ItemId.RuggedJuniperStave, exp: 140 },
	{ level: 43, log: ItemId.RuggedPoplarLog, plank: ItemId.RuggedPoplarPole, exp: 328 },
	{ level: 51, log: ItemId.RuggedSuaveLog, plank: ItemId.RuggedSuavePole, exp: 0 },
	{ level: 59, log: ItemId.RuggedYewLog, plank: ItemId.RuggedYewPole, exp: 0 },
	{ level: 67, log: ItemId.AverageAshLog, plank: ItemId.AverageAshPlank, exp: 0 },
	{ level: 72, log: ItemId.AverageOakLog, plank: ItemId.AverageOakPole, exp: 0 },
	{ level: 80, log: ItemId.AveragePineLog, plank: ItemId.AveragePinePole, exp: 0 },
	{ level: 88, log: ItemId.AverageHickoryLog, plank: ItemId.AverageHickoryPole, exp: 0 },
	{ level: 96, log: ItemId.AverageJuniperLog, plank: ItemId.AverageJuniperStave, exp: 0 },
	{ level: 104, log: ItemId.AveragePoplarLog, plank: ItemId.AveragePoplarPole, exp: 0 },
	{ level: 110, log: ItemId.AverageSuaveLog, plank: ItemId.AverageSuavePole, exp: 0 },
	{ level: 117, log: ItemId.AverageYewLog, plank: ItemId.AverageYewPole, exp: 0 },
	{ level: 125, log: ItemId.FineAshLog, plank: ItemId.FineAshPlank, exp: 0 },
	{ level: 133, log: ItemId.FineOakLog, plank: ItemId.FineOakPole, exp: 0 },
	{ level: 139, log: ItemId.FinePineLog, plank: ItemId.FinePinePole, exp: 0 },
	{ level: 147, log: ItemId.FineHickoryLog, plank: ItemId.FineHickoryPole, exp: 0 },
	{ level: 155, log: ItemId.FineJuniperLog, plank: ItemId.FineJuniperStave, exp: 0 },
	{ level: 162, log: ItemId.FinePoplarLog, plank: ItemId.FinePoplarPole, exp: 0 },
	{ level: 170, log: ItemId.FineSuaveLog, plank: ItemId.FineSuavePole, exp: 0 },
	{ level: 176, log: ItemId.FineYewLog, plank: ItemId.FineYewPole, exp: 0 },
	{ level: 184, log: ItemId.SturdyAshLog, plank: ItemId.SturdyAshPlank, exp: 0 },
	{ level: 192, log: ItemId.SturdyOakLog, plank: ItemId.SturdyOakPole, exp: 0 },
	{ level: 200, log: ItemId.SturdyPineLog, plank: ItemId.SturdyPinePole, exp: 0 },
	{ level: 216, log: ItemId.SturdyHickoryLog, plank: ItemId.SturdyHickoryPole, exp: 0 },
	{ level: 241, log: ItemId.SturdyJuniperLog, plank: ItemId.SturdyJuniperStave, exp: 0 },
	{ level: 266, log: ItemId.SturdyPoplarLog, plank: ItemId.SturdyPoplarPole, exp: 0 },
	{ level: 291, log: ItemId.SturdySuaveLog, plank: ItemId.SturdySuavePole, exp: 0 },
	{ level: 315, log: ItemId.SturdyYewLog, plank: ItemId.SturdyYewPole, exp: 0 },
	{ level: 332, log: ItemId.PerfectAshLog, plank: ItemId.PerfectAshPlank, exp: 0 },
	{ level: 357, log: ItemId.PerfectOakLog, plank: ItemId.PerfectOakPole, exp: 0 },
	{ level: 382, log: ItemId.PerfectPineLog, plank: ItemId.PerfectPinePole, exp: 0 },
	{ level: 407, log: ItemId.PerfectHickoryLog, plank: ItemId.PerfectHickoryPole, exp: 0 },
	{ level: 431, log: ItemId.PerfectJuniperLog, plank: ItemId.PerfectJuniperStave, exp: 0 },
	{ level: 448, log: ItemId.PerfectPoplarLog, plank: ItemId.PerfectPoplarPole, exp: 0 },
	{ level: 473, log: ItemId.PerfectSuaveLog, plank: ItemId.PerfectSuavePole, exp: 0 },
	{ level: 490, log: ItemId.PerfectYewLog, plank: ItemId.PerfectYewPole, exp: 0 }
];

export const sawmillActions: Action[] = rawSawmillActions.map((action) => {
	return {
		requirements: [{ profession: ProfessionId.Carpenter, level: action.level }],
		input: [{ id: action.log, amount: 1 }],
		output: [{ id: action.plank, amount: 2 }],
		experience: [{ profession: ProfessionId.Carpenter, amount: action.exp }],
	};
});
