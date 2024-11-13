import type { Action } from '$lib/model/profession/Action';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface TanningAction {
	level: number;
	hide: ItemId;
	leather: ItemId;
	exp: number;
}

// prettier-ignore
const rawTanningActions: TanningAction[] = [
	{ level: 0, hide: ItemId.BasicWhiteCowHide, leather: ItemId.BasicWhiteCowLeather, exp: 107 },
	{ level: 2, hide: ItemId.BasicDeerHide, leather: ItemId.BasicDeerLeather, exp: 105 },
	{ level: 4, hide: ItemId.BasicBlackCowHide, leather: ItemId.BasicBlackCowLeather, exp: 113 },
	{ level: 6, hide: ItemId.BasicSheepHide, leather: ItemId.BasicSheepLeather, exp: 117 },
	{ level: 8, hide: ItemId.BasicBrownCowHide, leather: ItemId.BasicBrownCowLeather, exp: 120 },
	{ level: 10, hide: ItemId.BasicBisonHide, leather: ItemId.BasicBisonLeather, exp: 146 },
	{ level: 12, hide: ItemId.BasicBuffaloHide, leather: ItemId.BasicBuffaloLeather, exp: 134 },
	{ level: 14, hide: ItemId.BasicHalebeastHide, leather: ItemId.BasicHalebeastLeather, exp: 164 },

	{ level: 16, hide: ItemId.ModerateWhiteCowHide, leather: ItemId.ModerateWhiteCowLeather, exp: 169 },
	{ level: 18, hide: ItemId.ModerateDeerHide, leather: ItemId.ModerateDeerLeather, exp: 165 },
	{ level: 23, hide: ItemId.ModerateBlackCowHide, leather: ItemId.ModerateBlackCowLeather, exp: 197 },
	{ level: 29, hide: ItemId.ModerateSheepHide, leather: ItemId.ModerateSheepLeather, exp: 215 },
	{ level: 35, hide: ItemId.ModerateBrownCowHide, leather: ItemId.ModerateBrownCowLeather, exp: 243 },
	{ level: 44, hide: ItemId.ModerateBisonHide, leather: ItemId.ModerateBisonLeather, exp: 325 },
	{ level: 51, hide: ItemId.ModerateBuffaloHide, leather: ItemId.ModerateBuffaloLeather, exp: 317 },
	{ level: 57, hide: ItemId.ModerateHalebeastHide, leather: ItemId.ModerateHalebeastLeather, exp: 426 },

	{ level: 66, hide: ItemId.FineWhiteCowHide, leather: ItemId.FineWhiteCowLeather, exp: 475 },
	{ level: 72, hide: ItemId.FineDeerHide, leather: ItemId.FineDeerLeather, exp: 491 },
	{ level: 78, hide: ItemId.FineBlackCowHide, leather: ItemId.FineBlackCowLeather, exp: 590 },
	{ level: 88, hide: ItemId.FineSheepHide, leather: ItemId.FineSheepLeather, exp: 666 },
	{ level: 94, hide: ItemId.FineBrownCowHide, leather: ItemId.FineBrownCowLeather, exp: 754 },
	{ level: 103, hide: ItemId.FineBisonHide, leather: ItemId.FineBisonLeather, exp: 1009 },
	{ level: 110, hide: ItemId.FineBuffaloHide, leather: ItemId.FineBuffaloLeather, exp: 986 },
	{ level: 116, hide: ItemId.FineHalebeastHide, leather: ItemId.FineHalebeastLeather, exp: 1326 },

	{ level: 125, hide: ItemId.StrongWhiteCowHide, leather: ItemId.StrongWhiteCowLeather, exp: 1473 },
	{ level: 131, hide: ItemId.StrongDeerHide, leather: ItemId.StrongDeerLeather, exp: 1527 },
	{ level: 137, hide: ItemId.StrongBlackCowHide, leather: ItemId.StrongBlackCowLeather, exp: 1833 },
	{ level: 147, hide: ItemId.StrongSheepHide, leather: ItemId.StrongSheepLeather, exp: 2072 },
	{ level: 153, hide: ItemId.StrongBrownCowHide, leather: ItemId.StrongBrownCowLeather, exp: 2259 },
	{ level: 159, hide: ItemId.StrongBisonHide, leather: ItemId.StrongBisonLeather, exp: 3023 },
	{ level: 168, hide: ItemId.StrongBuffaloHide, leather: ItemId.StrongBuffaloLeather, exp: 3065 },
	{ level: 175, hide: ItemId.StrongHalebeastHide, leather: ItemId.StrongHalebeastLeather, exp: 4498 },

	{ level: 181, hide: ItemId.SuperiorWhiteCowHide, leather: ItemId.SuperiorWhiteCowLeather, exp: 0 },
	{ level: 190, hide: ItemId.SuperiorDeerHide, leather: ItemId.SuperiorDeerLeather, exp: 0 },
	{ level: 196, hide: ItemId.SuperiorBlackCowHide, leather: ItemId.SuperiorBlackCowLeather, exp: 0 },
	{ level: 210, hide: ItemId.SuperiorSheepHide, leather: ItemId.SuperiorSheepLeather, exp: 0 },
	{ level: 240, hide: ItemId.SuperiorBrownCowHide, leather: ItemId.SuperiorBrownCowLeather, exp: 0 },
	{ level: 260, hide: ItemId.SuperiorBisonHide, leather: ItemId.SuperiorBisonLeather, exp: 0 },
	{ level: 290, hide: ItemId.SuperiorBuffaloHide, leather: ItemId.SuperiorBuffaloLeather, exp: 0 },
	{ level: 310, hide: ItemId.SuperiorHalebeastHide, leather: ItemId.SuperiorHalebeastLeather, exp: 0 },

	{ level: 330, hide: ItemId.PerfectWhiteCowHide, leather: ItemId.PerfectWhiteCowLeather, exp: 0 },
	{ level: 360, hide: ItemId.PerfectDeerHide, leather: ItemId.PerfectDeerLeather, exp: 0 },
	{ level: 380, hide: ItemId.PerfectBlackCowHide, leather: ItemId.PerfectBlackCowLeather, exp: 0 },
	{ level: 400, hide: ItemId.PerfectSheepHide, leather: ItemId.PerfectSheepLeather, exp: 0 },
	{ level: 430, hide: ItemId.PerfectBrownCowHide, leather: ItemId.PerfectBrownCowLeather, exp: 0 },
	{ level: 450, hide: ItemId.PerfectBisonHide, leather: ItemId.PerfectBisonLeather, exp: 0 },
	{ level: 470, hide: ItemId.PerfectBuffaloHide, leather: ItemId.PerfectBuffaloLeather, exp: 0 },
	{ level: 490, hide: ItemId.PerfectHalebeastHide, leather: ItemId.PerfectHalebeastLeather, exp: 0 }
];

export const tanningActions: Action[] = rawTanningActions.map((action) => {
	return {
		requirements: [{ profession: ProfessionId.Leatherworker, level: action.level }],
		input: [{ id: action.hide, amount: 1 }],
		output: [{ id: action.leather, amount: 1 }],
		experience: [{ profession: ProfessionId.Leatherworker, amount: action.exp }],
	};
});
