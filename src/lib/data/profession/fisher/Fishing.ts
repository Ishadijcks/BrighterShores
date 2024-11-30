import { ItemId } from '$lib/data/game/ItemId';
import { ToolId } from '$lib/data/tool/ToolId';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { fish } from '$lib/data/profession/fisher/item/Fish';

export interface FishingAction {
	fish: ItemId;
	exp: number;
	tool: ToolId;
}

const rawActiveFishingActions: FishingAction[] = [
	{ fish: ItemId.MottledFlounder, exp: 63, tool: ToolId.FishingSpear },
	{ fish: ItemId.LesserEel, exp: 67, tool: ToolId.FishingSpear },
	{ fish: ItemId.SandyPufferfish, exp: 71, tool: ToolId.FishingSpear },
	{ fish: ItemId.OliveFlounder, exp: 75, tool: ToolId.FishingSpear },
	{ fish: ItemId.GrayEel, exp: 79, tool: ToolId.FishingSpear },
	{ fish: ItemId.LonelyPufferfish, exp: 82, tool: ToolId.FishingSpear },
	{ fish: ItemId.StoneFlounder, exp: 88, tool: ToolId.FishingSpear },
	{ fish: ItemId.YellowtailGurnard, exp: 92, tool: ToolId.FishingSpear },
	{ fish: ItemId.RockyEel, exp: 97, tool: ToolId.FishingSpear },
	{ fish: ItemId.LemonPufferfish, exp: 102, tool: ToolId.FishingSpear },
	{ fish: ItemId.ArrowtoothFlounder, exp: 115, tool: ToolId.FishingSpear },
	{ fish: ItemId.RordEel, exp: 150, tool: ToolId.FishingSpear },
	{ fish: ItemId.FigureEightPufferfish, exp: 171, tool: ToolId.FishingSpear },
	{ fish: ItemId.CommonRay, exp: 195, tool: ToolId.FishingSpear },
	{ fish: ItemId.BigeyeGurnard, exp: 217, tool: ToolId.FishingSpear },
	{ fish: ItemId.FloweryFlounder, exp: 246, tool: ToolId.FishingSpear },
	{ fish: ItemId.SlightCod, exp: 364, tool: ToolId.CastNet },
	{ fish: ItemId.MorayEel, exp: 321, tool: ToolId.FishingSpear },
	{ fish: ItemId.StripedBass, exp: 477, tool: ToolId.CastNet },
	{ fish: ItemId.DimRay, exp: 419, tool: ToolId.FishingSpear },
	{ fish: ItemId.RubberPufferfish, exp: 476, tool: ToolId.FishingSpear },
	{ fish: ItemId.WaltzingCod, exp: 713, tool: ToolId.CastNet },
	{ fish: ItemId.BlackfinGurnard, exp: 620, tool: ToolId.FishingSpear },
	{ fish: ItemId.JellyFlounder, exp: 691, tool: ToolId.FishingSpear },
	{ fish: ItemId.SoldierRay, exp: 772, tool: ToolId.FishingSpear },
	{ fish: ItemId.CongerEel, exp: 877, tool: ToolId.FishingSpear },
	{ fish: ItemId.EmeraldBass, exp: 1337, tool: ToolId.CastNet },
	{ fish: ItemId.TealCod, exp: 1518, tool: ToolId.CastNet },
	{ fish: ItemId.MerryOldPufferfish, exp: 1307, tool: ToolId.FishingSpear },
	{ fish: ItemId.NimbleRay, exp: 1487, tool: ToolId.FishingSpear },
	{ fish: ItemId.ShinyGurnard, exp: 1659, tool: ToolId.FishingSpear },
	{ fish: ItemId.PeacockFlounder, exp: 1887, tool: ToolId.FishingSpear },
	{ fish: ItemId.PearlyCod, exp: 2900, tool: ToolId.CastNet },
	{ fish: ItemId.LeopardEel, exp: 2455, tool: ToolId.FishingSpear },
	{ fish: ItemId.DroptheBass, exp: 3628, tool: ToolId.CastNet },
	{ fish: ItemId.TigerRay, exp: 3182, tool: ToolId.FishingSpear },
	{ fish: ItemId.HightidePufferfish, exp: 3530, tool: ToolId.FishingSpear },
	{ fish: ItemId.MosaicCod, exp: 5046, tool: ToolId.CastNet },
	{ fish: ItemId.TorpedoGurnard, exp: 4522, tool: ToolId.FishingSpear },
	{ fish: ItemId.StarryFlounder, exp: 5102, tool: ToolId.FishingSpear },
	{ fish: ItemId.BroadRay, exp: 5757, tool: ToolId.FishingSpear },
	{ fish: ItemId.GreaterEel, exp: 6496, tool: ToolId.FishingSpear },
	{ fish: ItemId.GiantBass, exp: 10130, tool: ToolId.CastNet },
	{ fish: ItemId.BurlyCod, exp: 11174, tool: ToolId.CastNet },
	{ fish: ItemId.UnicornPufferfish, exp: 9180, tool: ToolId.FishingSpear },
	{ fish: ItemId.JadeRay, exp: 10357, tool: ToolId.FishingSpear },
	{ fish: ItemId.GrandGurnard, exp: 11709, tool: ToolId.FishingSpear },
	{ fish: ItemId.EmperorCod, exp: 18578, tool: ToolId.CastNet },
	{ fish: ItemId.BlackFlounder, exp: 14752, tool: ToolId.FishingSpear },
	{ fish: ItemId.PrimeRay, exp: 15995, tool: ToolId.FishingSpear },
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
		tool: a.tool,
		perHour: ((60 * 60) / 45) * 6,
	};
});
