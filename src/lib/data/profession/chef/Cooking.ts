import { ItemId } from '$lib/data/game/ItemId';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface CookingRecipe {
	lvl: number;
	dish: ItemId;
	ingredients: ItemId[];
	// TODO(@Isha): Steps?
	xp: number;
}

export const rawCookingRecipes: CookingRecipe[] = [
	{ lvl: 0, dish: ItemId.BasicBaconSandwich, ingredients: [ItemId.BasicRawBacon, ItemId.Bread], xp: 67 },
	{ lvl: 2, dish: ItemId.LesserJelliedEels, ingredients: [ItemId.LesserEel, ItemId.Gelatin], xp: 69 },
	{ lvl: 4, dish: ItemId.BasicOmelette, ingredients: [ItemId.BasicEggs], xp: 38 },
	{ lvl: 6, dish: ItemId.BasicSausageandMash, ingredients: [ItemId.RawSausages, ItemId.PiperPotato], xp: 118 },
	{ lvl: 8, dish: ItemId.BasicVegetableStew, ingredients: [ItemId.BasicMixedVegetables], xp: 80 },
	{ lvl: 10, dish: ItemId.GrayJelliedEels, ingredients: [ItemId.GrayEel, ItemId.Gelatin], xp: 87 },
	{ lvl: 12, dish: ItemId.AppetizingBaconSandwich, ingredients: [ItemId.AppetizingRawBacon, ItemId.Bread], xp: 95 },
	{
		lvl: 14,
		dish: ItemId.BasicChickenandLeekPie,
		ingredients: [ItemId.ValentLeek, ItemId.RawChicken, ItemId.Pastry],
		xp: 102,
	},
	{ lvl: 16, dish: ItemId.YellowtailGurnardSoup, ingredients: [ItemId.YellowtailGurnard, ItemId.Stock], xp: 56 },
	{
		lvl: 18,
		dish: ItemId.AppetizingSausageandMash,
		ingredients: [ItemId.RawSausages, ItemId.KingPhelwanPotato],
		xp: 167,
	},
	{ lvl: 22, dish: ItemId.RockyJelliedEels, ingredients: [ItemId.RockyEel, ItemId.Gelatin], xp: 122 },
	{ lvl: 25, dish: ItemId.AppetizingVegetableStew, ingredients: [ItemId.AppetizingMixedVegetables], xp: 129 },
	{
		lvl: 30,
		dish: ItemId.AppetizingChickenandLeekPie,
		ingredients: [ItemId.BandedLeek, ItemId.RawChicken, ItemId.Pastry],
		xp: 148,
	},
	{ lvl: 32, dish: ItemId.PlacidGrilledBass, ingredients: [ItemId.PlacidBass], xp: 78 },
	{ lvl: 38, dish: ItemId.FineBaconSandwich, ingredients: [ItemId.FineRawBacon, ItemId.Bread], xp: 175 },
	{ lvl: 43, dish: ItemId.RordJelliedEels, ingredients: [ItemId.RordEel, ItemId.Gelatin], xp: 179 },
	{
		lvl: 45,
		dish: ItemId.AppetizingLobsterThermidor,
		ingredients: [ItemId.OrangeLobster, ItemId.Cream, ItemId.Butter, ItemId.Wine],
		xp: 287,
	},
	{ lvl: 50, dish: ItemId.CommonFriedRayWings, ingredients: [ItemId.CommonRay], xp: 106 },
	{
		lvl: 56,
		dish: ItemId.FineChickenandLeekPie,
		ingredients: [ItemId.PineshadeLeek, ItemId.RawChicken, ItemId.Pastry],
		xp: 253,
	},
	{ lvl: 61, dish: ItemId.BigeyeGurnardSoup, ingredients: [ItemId.BigeyeGurnard, ItemId.Stock], xp: 137 },
	{ lvl: 63, dish: ItemId.FineVegetableStew, ingredients: [ItemId.FineMixedVegetables], xp: 268 },
	{ lvl: 68, dish: ItemId.AppetizingOmelette, ingredients: [ItemId.AppetizingEggs], xp: 156 },
	{ lvl: 74, dish: ItemId.BeachOysterwithLemonJuice, ingredients: [], xp: 0 },
	{ lvl: 76, dish: ItemId.FineSausageandMash, ingredients: [], xp: 0 },
	{ lvl: 81, dish: ItemId.MorayJelliedEels, ingredients: [], xp: 0 },
	{ lvl: 86, dish: ItemId.TastyChickenandLeekPie, ingredients: [], xp: 0 },
	{ lvl: 89, dish: ItemId.DimFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 94, dish: ItemId.TastyBaconSandwich, ingredients: [], xp: 0 },
	{ lvl: 99, dish: ItemId.StripedGrilledBass, ingredients: [], xp: 0 },
	{ lvl: 102, dish: ItemId.BasicCodandChips, ingredients: [], xp: 0 },
	{ lvl: 107, dish: ItemId.BlackfinGurnardSoup, ingredients: [], xp: 0 },
	{ lvl: 112, dish: ItemId.FineLobsterThermidor, ingredients: [], xp: 0 },
	{ lvl: 115, dish: ItemId.SoldierFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 120, dish: ItemId.TastyVegetableStew, ingredients: [], xp: 0 },
	{ lvl: 125, dish: ItemId.TastySausageandMash, ingredients: [], xp: 0 },
	{ lvl: 131, dish: ItemId.AppetizingCodandChips, ingredients: [], xp: 0 },
	{ lvl: 133, dish: ItemId.SignalOysterswithLemonJuice, ingredients: [], xp: 0 },
	{ lvl: 139, dish: ItemId.CongerJelliedEels, ingredients: [], xp: 0 },
	{ lvl: 144, dish: ItemId.TastyOmelette, ingredients: [], xp: 0 },
	{ lvl: 147, dish: ItemId.NimbleFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 152, dish: ItemId.EmeraldGrilledBass, ingredients: [], xp: 0 },
	{ lvl: 157, dish: ItemId.DeliciousSausageandMash, ingredients: [], xp: 0 },
	{ lvl: 160, dish: ItemId.ShinyGurnardSoup, ingredients: [], xp: 0 },
	{ lvl: 165, dish: ItemId.FineCodandChips, ingredients: [], xp: 0 },
	{ lvl: 170, dish: ItemId.DeliciousBaconSandwich, ingredients: [], xp: 0 },
	{ lvl: 173, dish: ItemId.LeopardJelliedEels, ingredients: [], xp: 0 },
	{ lvl: 178, dish: ItemId.DroptheGrilledBass, ingredients: [], xp: 0 },
	{ lvl: 184, dish: ItemId.DeliciousLobsterThermidor, ingredients: [], xp: 0 },
	{ lvl: 189, dish: ItemId.TigerFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 192, dish: ItemId.SpeckledOysterswithLemonJuice, ingredients: [], xp: 0 },
	{ lvl: 197, dish: ItemId.DeliciousChickenandLeekPie, ingredients: [], xp: 0 },
	{ lvl: 208, dish: ItemId.TastyCodandChips, ingredients: [], xp: 0 },
	{ lvl: 217, dish: ItemId.DeliciousVegetableStew, ingredients: [], xp: 0 },
	{ lvl: 234, dish: ItemId.TorpedoGurnardSoup, ingredients: [], xp: 0 },
	{ lvl: 251, dish: ItemId.BroadFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 259, dish: ItemId.DeliciousCodandChips, ingredients: [], xp: 0 },
	{ lvl: 276, dish: ItemId.DeliciousOmelette, ingredients: [], xp: 0 },
	{ lvl: 293, dish: ItemId.GreaterJelliedEels, ingredients: [], xp: 0 },
	{ lvl: 302, dish: ItemId.GiantGrilledBass, ingredients: [], xp: 0 },
	{ lvl: 319, dish: ItemId.GourmetLobsterThermidor, ingredients: [], xp: 0 },
	{ lvl: 336, dish: ItemId.GourmetSausageandMash, ingredients: [], xp: 0 },
	{ lvl: 345, dish: ItemId.GourmetBaconSandwich, ingredients: [], xp: 0 },
	{ lvl: 362, dish: ItemId.SumptuousCodandChips, ingredients: [], xp: 0 },
	{ lvl: 379, dish: ItemId.UnicornPufferSashimi, ingredients: [], xp: 0 },
	{ lvl: 396, dish: ItemId.JadeFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 404, dish: ItemId.RustyOysterswithLemonJuice, ingredients: [], xp: 0 },
	{ lvl: 421, dish: ItemId.GrandGurnardSoup, ingredients: [], xp: 0 },
	{ lvl: 438, dish: ItemId.GourmetVegetableStew, ingredients: [], xp: 0 },
	{ lvl: 447, dish: ItemId.GourmetChickenandLeekPie, ingredients: [], xp: 0 },
	{ lvl: 464, dish: ItemId.GourmetCodandChips, ingredients: [], xp: 0 },
	{ lvl: 481, dish: ItemId.PrimeFriedRayWings, ingredients: [], xp: 0 },
	{ lvl: 490, dish: ItemId.GourmetOmelette, ingredients: [], xp: 0 },
];

export const cookingRecipes: Action[] = rawCookingRecipes.map((r) => {
	return {
		input: r.ingredients.map((id) => ({ id: id, amount: 1 })),
		output: [{ id: r.dish, amount: 1 }],
		// Get the required cooking level from the dish item.
		requirements: [{ profession: ProfessionId.Chef, level: r.lvl }],
		experience: [{ profession: ProfessionId.Chef, amount: r.xp }],
	};
});
