import { ItemId } from '$lib/data/game/ItemId';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface CookingRecipe {
	lvl: number;
	dish: ItemId;
	ingredients: ItemId[];
	// TODO(@Isha): Steps?
	xp: number;
	perHour: number;
}

// prettier-ignore
export const rawCookingRecipes: CookingRecipe[] = [
	{ lvl: 0, dish: ItemId.BasicBaconSandwich, ingredients: [ItemId.BasicRawBacon, ItemId.Bread], xp: 67, perHour: 306 },
	{ lvl: 2, dish: ItemId.LesserJelliedEels, ingredients: [ItemId.LesserEel, ItemId.Gelatin], xp: 69, perHour: 250 },
	{ lvl: 4, dish: ItemId.BasicOmelette, ingredients: [ItemId.BasicEggs], xp: 38, perHour: 628 },
	{ lvl: 6, dish: ItemId.BasicSausageAndMash, ingredients: [ItemId.PiperPotato, ItemId.RawSausages], xp: 118, perHour: 233 },
	{ lvl: 8, dish: ItemId.BasicVegetableStew, ingredients: [ItemId.BasicMixedVegetables], xp: 80, perHour: 373 },
	{ lvl: 10, dish: ItemId.GrayJelliedEels, ingredients: [ItemId.GrayEel, ItemId.Gelatin], xp: 87, perHour: 250 },
	{ lvl: 12, dish: ItemId.AppetizingBaconSandwich, ingredients: [ItemId.AppetizingRawBacon, ItemId.Bread], xp: 95, perHour: 306 },
	{ lvl: 14, dish: ItemId.BasicChickenAndLeekPie, ingredients: [ItemId.ValentLeek, ItemId.RawChicken, ItemId.Pastry], xp: 102, perHour: 257 },
	{ lvl: 16, dish: ItemId.YellowtailGurnardSoup, ingredients: [ItemId.YellowtailGurnard, ItemId.Stock], xp: 56, perHour: 343 },
	{ lvl: 18, dish: ItemId.AppetizingSausageAndMash, ingredients: [ItemId.KingPhelwanPotato, ItemId.RawSausages], xp: 167, perHour: 233 },
	{ lvl: 22, dish: ItemId.RockyJelliedEels, ingredients: [ItemId.RockyEel, ItemId.Gelatin], xp: 122, perHour: 250 },
	{ lvl: 25, dish: ItemId.AppetizingVegetableStew, ingredients: [ItemId.AppetizingMixedVegetables], xp: 129, perHour: 373 },
	{ lvl: 30, dish: ItemId.AppetizingChickenAndLeekPie, ingredients: [ItemId.BandedLeek, ItemId.RawChicken, ItemId.Pastry], xp: 148, perHour: 257 },
	{ lvl: 32, dish: ItemId.PlacidGrilledBass, ingredients: [ItemId.PlacidBass], xp: 78, perHour: 505 },
	{ lvl: 38, dish: ItemId.FineBaconSandwich, ingredients: [ItemId.FineRawBacon, ItemId.Bread], xp: 175, perHour: 306 },
	{ lvl: 43, dish: ItemId.RordJelliedEels, ingredients: [ItemId.RordEel, ItemId.Gelatin], xp: 179, perHour: 250 },
	{ lvl: 45, dish: ItemId.AppetizingLobsterThermidor, ingredients: [ItemId.OrangeLobster, ItemId.Cream, ItemId.Butter, ItemId.Wine], xp: 287, perHour: 0 },
	{ lvl: 50, dish: ItemId.CommonFriedRayWings, ingredients: [ItemId.CommonRay], xp: 106, perHour: 524 },
	{ lvl: 56, dish: ItemId.FineChickenAndLeekPie, ingredients: [ItemId.PineshadeLeek, ItemId.RawChicken, ItemId.Pastry], xp: 253, perHour: 257 },
	{ lvl: 61, dish: ItemId.BigeyeGurnardSoup, ingredients: [ItemId.BigeyeGurnard, ItemId.Stock], xp: 137, perHour: 343 },
	{ lvl: 63, dish: ItemId.FineVegetableStew, ingredients: [ItemId.FineMixedVegetables], xp: 268, perHour: 373 },
	{ lvl: 68, dish: ItemId.AppetizingOmelette, ingredients: [ItemId.AppetizingEggs], xp: 156, perHour: 628 },
	{ lvl: 74, dish: ItemId.BeachOysterWithLemonJuice, ingredients: [ItemId.BeachOyster, ItemId.LemonJuice], xp: 154, perHour: 0 },
	{ lvl: 76, dish: ItemId.FineSausageAndMash, ingredients: [ItemId.CalystraPotato, ItemId.RawSausages], xp: 540, perHour: 233 },
	{ lvl: 81, dish: ItemId.MorayJelliedEels, ingredients: [ItemId.MorayEel, ItemId.Gelatin], xp: 387, perHour: 250 },
	{ lvl: 86, dish: ItemId.TastyChickenAndLeekPie, ingredients: [ItemId.GlintLeek, ItemId.RawChicken, ItemId.Pastry], xp: 441, perHour: 257 },
	{ lvl: 89, dish: ItemId.DimFriedRayWings, ingredients: [ItemId.DimRay], xp: 224, perHour: 524 },
	{ lvl: 94, dish: ItemId.TastyBaconSandwich, ingredients: [ItemId.TastyRawBacon, ItemId.Bread], xp: 514, perHour: 306 },
	{ lvl: 99, dish: ItemId.StripedGrilledBass, ingredients: [ItemId.StripedBass], xp: 278, perHour: 505 },
	{ lvl: 102, dish: ItemId.BasicCodAndChips, ingredients: [ItemId.SlightCod, ItemId.PiperPotato], xp: 834, perHour: 0 },
	{ lvl: 107, dish: ItemId.BlackfinGurnardSoup, ingredients: [ItemId.BlackfinGurnard, ItemId.Stock], xp: 344, perHour: 343 },
	{ lvl: 112, dish: ItemId.FineLobsterThermidor, ingredients: [ItemId.StripedLobster, ItemId.Cream, ItemId.Butter, ItemId.Wine], xp: 1021, perHour: 0 },
	{ lvl: 115, dish: ItemId.SoldierFriedRayWings, ingredients: [ItemId.SoldierRay], xp: 369, perHour: 524 },
	{ lvl: 120, dish: ItemId.TastyVegetableStew, ingredients: [ItemId.TastyMixedVegetables], xp: 801, perHour: 373 },
	{ lvl: 125, dish: ItemId.TastySausageAndMash, ingredients: [ItemId.ColawanPotato, ItemId.RawSausages], xp: 1387, perHour: 233 },
	{ lvl: 131, dish: ItemId.AppetizingCodAndChips, ingredients: [ItemId.WaltzingCod, ItemId.KingPhelwanPotato], xp: 1402, perHour: 0 },
	{ lvl: 133, dish: ItemId.SignalOystersWithLemonJuice, ingredients: [ItemId.SignalOyster, ItemId.LemonJuice], xp: 499, perHour: 0 },
	{ lvl: 139, dish: ItemId.CongerJelliedEels, ingredients: [ItemId.CongerEel, ItemId.Gelatin], xp: 1180, perHour: 250 },
	{ lvl: 144, dish: ItemId.TastyOmelette, ingredients: [ItemId.TastyEggs], xp: 660, perHour: 628 },
	{ lvl: 147, dish: ItemId.NimbleFriedRayWings, ingredients: [ItemId.NimbleRay], xp: 683, perHour: 524 },
	{ lvl: 152, dish: ItemId.EmeraldGrilledBass, ingredients: [ItemId.EmeraldBass], xp: 784, perHour: 505 },
	{ lvl: 157, dish: ItemId.DeliciousSausageAndMash, ingredients: [ItemId.BitterbidePotato, ItemId.RawSausages], xp: 2519, perHour: 233 },
	{ lvl: 160, dish: ItemId.ShinyGurnardSoup, ingredients: [ItemId.ShinyGurnard, ItemId.Stock], xp: 953, perHour: 343 },
	{ lvl: 165, dish: ItemId.FineCodAndChips, ingredients: [ItemId.TealCod, ItemId.CalystraPotato], xp: 2803, perHour: 0 },
	{ lvl: 170, dish: ItemId.DeliciousBaconSandwich, ingredients: [ItemId.DeliciousRawBacon, ItemId.Bread], xp: 2175, perHour: 306 },
	{ lvl: 173, dish: ItemId.LeopardJelliedEels, ingredients: [ItemId.LeopardEel, ItemId.Gelatin], xp: 2271, perHour: 250 },
	{ lvl: 178, dish: ItemId.DroptheGrilledBass, ingredients: [ItemId.DroptheBass], xp: 1294, perHour: 505 },
	{ lvl: 184, dish: ItemId.DeliciousLobsterThermidor, ingredients: [ItemId.GhostLobster, ItemId.Cream, ItemId.Butter, ItemId.Wine], xp: 4161, perHour: 0 },
	{ lvl: 189, dish: ItemId.TigerFriedRayWings, ingredients: [ItemId.TigerRay], xp: 1503, perHour: 524 },
	{ lvl: 192, dish: ItemId.SpeckledOystersWithLemonJuice, ingredients: [ItemId.SpeckledOyster, ItemId.LemonJuice], xp: 1553, perHour: 0 },
	{ lvl: 197, dish: ItemId.DeliciousChickenAndLeekPie, ingredients: [ItemId.WondrousLeek, ItemId.RawChicken, ItemId.Pastry], xp: 3926, perHour: 257 },
	{ lvl: 208, dish: ItemId.TastyCodAndChips, ingredients: [ItemId.PearlyCod, ItemId.ColawanPotato], xp: 5670, perHour: 0 },
	{ lvl: 217, dish: ItemId.DeliciousVegetableStew, ingredients: [ItemId.DeliciousMixedVegetables], xp: 4154, perHour: 373 },
	{ lvl: 234, dish: ItemId.TorpedoGurnardSoup, ingredients: [ItemId.TorpedoGurnard, ItemId.Stock], xp: 0, perHour: 343 },
	{ lvl: 251, dish: ItemId.BroadFriedRayWings, ingredients: [ItemId.BroadRay], xp: 0, perHour: 524 },
	{ lvl: 259, dish: ItemId.DeliciousCodAndChips, ingredients: [ItemId.MosaicCod, ItemId.BitterbidePotato], xp: 0, perHour: 0 },
	{ lvl: 276, dish: ItemId.DeliciousOmelette, ingredients: [ItemId.DeliciousEggs], xp: 0, perHour: 628 },
	{ lvl: 293, dish: ItemId.GreaterJelliedEels, ingredients: [ItemId.GreaterEel, ItemId.Gelatin], xp: 0, perHour: 250 },
	{ lvl: 302, dish: ItemId.GiantGrilledBass, ingredients: [ItemId.GiantBass], xp: 0, perHour: 505 },
	{ lvl: 319, dish: ItemId.GourmetLobsterThermidor, ingredients: [ItemId.CunningLobster, ItemId.Cream, ItemId.Butter, ItemId.Wine], xp: 0, perHour: 0 },
	{ lvl: 336, dish: ItemId.GourmetSausageAndMash, ingredients: [ItemId.GreengrailPotato, ItemId.RawSausages], xp: 0, perHour: 233 },
	{ lvl: 345, dish: ItemId.GourmetBaconSandwich, ingredients: [ItemId.GourmetRawBacon, ItemId.Bread], xp: 0, perHour: 306 },
	{ lvl: 362, dish: ItemId.SumptuousCodAndChips, ingredients: [ItemId.BurlyCod, ItemId.GreengrailPotato], xp: 0, perHour: 0 },
	{ lvl: 379, dish: ItemId.UnicornPufferSashimi, ingredients: [ItemId.UnicornPufferfish, ItemId.SoySauce], xp: 0, perHour: 0 },
	{ lvl: 396, dish: ItemId.JadeFriedRayWings, ingredients: [ItemId.JadeRay], xp: 0, perHour: 524 },
	{ lvl: 404, dish: ItemId.RustyOystersWithLemonJuice, ingredients: [ItemId.RustyOyster, ItemId.LemonJuice], xp: 0, perHour: 0 },
	{ lvl: 421, dish: ItemId.GrandGurnardSoup, ingredients: [ItemId.GrandGurnard, ItemId.Stock], xp: 0, perHour: 343 },
	{ lvl: 438, dish: ItemId.GourmetVegetableStew, ingredients: [ItemId.GourmetMixedVegetables], xp: 0, perHour: 373 },
	{ lvl: 447, dish: ItemId.GourmetChickenAndLeekPie, ingredients: [ItemId.GoldenLeek, ItemId.RawChicken, ItemId.Pastry], xp: 0, perHour: 257 },
	{ lvl: 464, dish: ItemId.GourmetCodAndChips, ingredients: [ItemId.EmperorCod, ItemId.GalimeerPotato], xp: 0, perHour: 0 },
	{ lvl: 481, dish: ItemId.PrimeFriedRayWings, ingredients: [ItemId.PrimeRay], xp: 0, perHour: 524 },
	{ lvl: 490, dish: ItemId.GourmetOmelette, ingredients: [ItemId.GourmetEggs], xp: 0, perHour: 628 },
];

export const cookingRecipes: Action[] = rawCookingRecipes.map((r) => {
	return {
		input: r.ingredients.map((id) => ({ id: id, amount: 1 })),
		output: [{ id: r.dish, amount: 1 }],
		// Get the required cooking level from the dish item.
		requirements: [{ profession: ProfessionId.Chef, level: r.lvl }],
		experience: [{ profession: ProfessionId.Chef, amount: r.xp }],
		perHour: r.perHour,
	};
});
