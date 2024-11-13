import type { Action } from '$lib/model/profession/Action';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { ToolType } from '$lib/data/tool/ToolType';

interface ForagingAction {
	lvl: number;
	item: ItemId;
	exp: number;
	tool: ToolType;
}

// prettier-ignore
const rawForagingActions: ForagingAction[] = [
	{ lvl: 0, item: ItemId.BrownKelp, exp: 84, tool: ToolType.None },
	{ lvl: 2, item: ItemId.CreamyWallplant, exp: 67, tool: ToolType.Secateurs },
	{ lvl: 4, item: ItemId.WhitePeriwinkle, exp: 71, tool: ToolType.Secateurs },
	{ lvl: 6, item: ItemId.HornShell, exp: 100, tool: ToolType.Trowel },
	{ lvl: 8, item: ItemId.PiperPotato, exp: 105, tool: ToolType.Trowel },
	{ lvl: 10, item: ItemId.TangledPondWeed, exp: 84, tool: ToolType.PondNet },
	{ lvl: 12, item: ItemId.MauveBellplant, exp: 118, tool: ToolType.Secateurs },
	{ lvl: 14, item: ItemId.HugeMonumentPiece, exp: 94, tool: ToolType.None },
	{ lvl: 16, item: ItemId.WhiteWaterLily, exp: 133, tool: ToolType.PondNet },
	{ lvl: 18, item: ItemId.WrinkledStarfish, exp: 141, tool: ToolType.None },
	{ lvl: 23, item: ItemId.HeftyMonumentPiece, exp: 123, tool: ToolType.None },
	{ lvl: 29, item: ItemId.GreenHogberries, exp: 184, tool: ToolType.None },
	{ lvl: 35, item: ItemId.KingPhelwanPotato, exp: 205, tool: ToolType.Trowel },
	{ lvl: 41, item: ItemId.CommonLimpet, exp: 232, tool: ToolType.None },
	{ lvl: 47, item: ItemId.GreenKelp, exp: 260, tool: ToolType.None },
	{ lvl: 53, item: ItemId.SubstantialMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 59, item: ItemId.VibrantWallplant, exp: 0, tool: ToolType.Secateurs },
	{ lvl: 65, item: ItemId.BluePeriwinkle, exp: 0, tool: ToolType.Secateurs },
	{ lvl: 71, item: ItemId.ChunkyMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 77, item: ItemId.BowlShell, exp: 0, tool: ToolType.Trowel },
	{ lvl: 83, item: ItemId.WhiteNettle, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 89, item: ItemId.CalystraPotato, exp: 0, tool: ToolType.Trowel },
	{ lvl: 95, item: ItemId.BladderWrack, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 101, item: ItemId.ReachingPondWeed, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 107, item: ItemId.LargeMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 113, item: ItemId.CrimsonBellplant, exp: 0, tool: ToolType.Secateurs },
	{ lvl: 119, item: ItemId.BigMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 125, item: ItemId.CopperWaterLily, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 131, item: ItemId.ClingyStarfish, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 137, item: ItemId.ColawanPotato, exp: 0, tool: ToolType.Trowel },
	{ lvl: 143, item: ItemId.PurpleHogberries, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 149, item: ItemId.TigerLimpet, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 155, item: ItemId.MediumMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 161, item: ItemId.SilverKelp, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 167, item: ItemId.ScarletWallplant, exp: 0, tool: ToolType.Secateurs },
	{ lvl: 173, item: ItemId.AverageMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 179, item: ItemId.StripedPeriwinkle, exp: 0, tool: ToolType.Secateurs },
	{ lvl: 185, item: ItemId.CrownShell, exp: 0, tool: ToolType.Trowel },
	{ lvl: 191, item: ItemId.BitterbidePotato, exp: 0, tool: ToolType.Trowel },
	{ lvl: 197, item: ItemId.BloodNettle, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 209, item: ItemId.SpiralWrack, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 228, item: ItemId.FairMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 246, item: ItemId.GreenveilPondWeed, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 265, item: ItemId.MiddlingMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 284, item: ItemId.StarshineBellplant, exp: 0, tool: ToolType.Secateurs },
	{ lvl: 302, item: ItemId.BroadWaterLily, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 321, item: ItemId.GreengrailPotato, exp: 0, tool: ToolType.Trowel },
	{ lvl: 340, item: ItemId.BeadedStarfish, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 359, item: ItemId.RedHogberries, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 377, item: ItemId.SmallMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 396, item: ItemId.IrongripLimpet, exp: 0, tool: ToolType.UNKNOWN},
	{ lvl: 415, item: ItemId.WeenyMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 433, item: ItemId.GalimeerPotato, exp: 0, tool: ToolType.Trowel },
	{ lvl: 452, item: ItemId.TeenyMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 471, item: ItemId.MinuteMonumentPiece, exp: 0, tool: ToolType.None },
	{ lvl: 490, item: ItemId.MinisculeMonumentPiece, exp: 0, tool: ToolType.None },
];

export const foragingActions: Action[] = rawForagingActions.map((action) => {
	return {
		requirements: [{ profession: ProfessionId.Forager, level: action.lvl }],
		input: [],
		output: [{ id: action.item, amount: 1 }],
		experience: [{ profession: ProfessionId.Forager, amount: action.exp }],
	};
});