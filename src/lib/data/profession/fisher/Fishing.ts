import { ItemId } from '$lib/data/game/ItemId';
import { ToolType } from '$lib/data/tool/ToolType';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { fish } from '$lib/data/profession/fisher/item/Fish';

export interface FishingAction {
	fish: ItemId;
	exp: number;
	tool: ToolType;
}

const rawActiveFishingActions: FishingAction[] = [
	{ fish: ItemId.MottledFlounder, exp: 63, tool: ToolType.FishingSpear },
	{ fish: ItemId.LesserEel, exp: 67, tool: ToolType.FishingSpear },
	{ fish: ItemId.SandyPufferfish, exp: 71, tool: ToolType.FishingSpear },
	{ fish: ItemId.OliveFlounder, exp: 75, tool: ToolType.FishingSpear },
	{ fish: ItemId.GrayEel, exp: 79, tool: ToolType.FishingSpear },
	{ fish: ItemId.LonelyPufferfish, exp: 84, tool: ToolType.FishingSpear },
	{ fish: ItemId.StoneFlounder, exp: 88, tool: ToolType.FishingSpear },
	{ fish: ItemId.YellowtailGurnard, exp: 92, tool: ToolType.FishingSpear },
	{ fish: ItemId.RockyEel, exp: 97, tool: ToolType.FishingSpear },
	{ fish: ItemId.LemonPufferfish, exp: 102, tool: ToolType.FishingSpear },
	{ fish: ItemId.ArrowtoothFlounder, exp: 115, tool: ToolType.FishingSpear },
	{ fish: ItemId.RordEel, exp: 156, tool: ToolType.FishingSpear },
	{ fish: ItemId.FigureEightPufferfish, exp: 168, tool: ToolType.FishingSpear },
	{ fish: ItemId.CommonRay, exp: 189, tool: ToolType.FishingSpear },
	{ fish: ItemId.BigeyeGurnard, exp: 210, tool: ToolType.FishingSpear },
	{ fish: ItemId.FloweryFlounder, exp: 240, tool: ToolType.FishingSpear },
	{ fish: ItemId.SlightCod, exp: 364, tool: ToolType.CastNet },
	{ fish: ItemId.MorayEel, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.StripedBass, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.DimRay, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.RubberPufferfish, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.WaltzingCod, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.BlackfinGurnard, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.JellyFlounder, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.SoldierRay, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.CongerEel, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.EmeraldBass, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.TealCod, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.MerryOldPufferfish, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.NimbleRay, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.ShinyGurnard, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.PeacockFlounder, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.PearlyCod, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.LeopardEel, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.DroptheBass, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.TigerRay, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.HightidePufferfish, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.MosaicCod, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.TorpedoGurnard, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.StarryFlounder, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.BroadRay, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.GreaterEel, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.GiantBass, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.BurlyCod, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.UnicornPufferfish, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.JadeRay, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.GrandGurnard, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.EmperorCod, exp: 0, tool: ToolType.CastNet },
	{ fish: ItemId.BlackFlounder, exp: 0, tool: ToolType.FishingSpear },
	{ fish: ItemId.PrimeRay, exp: 0, tool: ToolType.FishingSpear },
];

export const activeFishingActions: Action[] = rawActiveFishingActions.map((a) => {
	return {
		input: [],
		output: [{ id: a.fish, amount: 1 }],
		experience: [{ profession: ProfessionId.Fisher, amount: a.exp }],
		requirements: [
			{
				profession: ProfessionId.Fisher,
				level:
					// Grab the level from the corresponding fish
					fish.find((f) => f.id === a.fish)?.professions.find((p) => p.profession === ProfessionId.Fisher)?.level ??
					Infinity,
			},
		],
	};
});