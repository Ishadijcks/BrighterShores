import { ItemId } from '$lib/data/game/ItemId';
import { ShopId } from '$lib/data/world/ShopId';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export interface Trade {
	lvl: number;
	item: ItemId;

	from: ShopId;
	to: ShopId;

	baseExp: number;
}

// prettier-ignore
export const rawTrades: Trade[] = [
	{ lvl: 0, item: ItemId.Carrots, baseExp: 0, from: ShopId.Greengrocers, to: ShopId.TannersRoad },
	{ lvl: 0, item: ItemId.Soap, baseExp: 0, from: ShopId.SoapShop, to: ShopId.LordsRoadWest },
	{ lvl: 2, item: ItemId.Ribs, baseExp: 0, from: ShopId.LordsRoadWest, to: ShopId.OuterMarket },
	{ lvl: 4, item: ItemId.MeatWrap, baseExp: 0, from: ShopId.ThadwickSquare, to: ShopId.UnicornFarm },
	{ lvl: 6, item: ItemId.BeefJoint, baseExp: 0, from: ShopId.HendersonsMeatStorehouse, to: ShopId.HalligsStreetFood },
	{ lvl: 8, item: ItemId.ClockworkSheep, baseExp: 0, from: ShopId.LordsRoadEast, to: ShopId.LanisCuriosities },
	{ lvl: 12, item: ItemId.PorcelainDoll, baseExp: 0, from: ShopId.TannersRoad, to: ShopId.FortuneholdFarm },
	{ lvl: 16, item: ItemId.Plates, baseExp: 0, from: ShopId.CobbleCorner, to: ShopId.JennalersWines },
	{ lvl: 23, item: ItemId.PinBadge, baseExp: 0, from: ShopId.OuterMarket, to: ShopId.CyclopsStoreCave },
	{ lvl: 28, item: ItemId.Pumpkin, baseExp: 0, from: ShopId.FortuneholdFarm, to: ShopId.LordsRoadCentral },
	{ lvl: 35, item: ItemId.Pizza, baseExp: 0, from: ShopId.GooseInnKitchen, to: ShopId.MeggritsMarket },
	{ lvl: 40, item: ItemId.Bananas, baseExp: 0, from: ShopId.MeggritsMarket, to: ShopId.LordsRoadEast },
	{ lvl: 49, item: ItemId.TinPocketWatch, baseExp: 0, from: ShopId.MeggritsMarket, to: ShopId.BoggsAntiques },
	{ lvl: 54, item: ItemId.HomespunCloth, baseExp: 0, from: ShopId.WaterfrontMarket, to: ShopId.LanisCuriosities },
	{ lvl: 61, item: ItemId.RainbowCheese, baseExp: 0, from: ShopId.UnicornFarm, to: ShopId.HendersonsMeatStorehouse },
	{ lvl: 66, item: ItemId.ArganianWine, baseExp: 0, from: ShopId.WaterfrontMarket, to: ShopId.LordsRoadCentral },
	{ lvl: 75, item: ItemId.OakPatternedVase, baseExp: 0, from: ShopId.LordsRoadCentral, to: ShopId.HendersonsMeatStorehouse },
	{ lvl: 80, item: ItemId.ScentedCandle, baseExp: 0, from: ShopId.BobbinRoadSouth, to: ShopId.SoapShop },
	{ lvl: 87, item: ItemId.UnicornDust, baseExp: 0, from: ShopId.CyclopsStoreCave, to: ShopId.MerchantsGuild },
	{ lvl: 92, item: ItemId.LandscapePainting, baseExp: 0, from: ShopId.BertsGallery, to: ShopId.PeacockRoadCentral },
	{ lvl: 101, item: ItemId.CarriageClock, baseExp: 0, from: ShopId.LanisCuriosities, to: ShopId.LordsRoadEast },
	{ lvl: 106, item: ItemId.Spectacles, baseExp: 0, from: ShopId.PeacockRoadNorth, to: ShopId.BobbinRoadSouth },
	{ lvl: 113, item: ItemId.SharpseedWine, baseExp: 0, from: ShopId.PeacockRoadCentral, to: ShopId.MerchantsGuild },
	{ lvl: 118, item: ItemId.Rug, baseExp: 0, from: ShopId.BoggsAntiques, to: ShopId.CobbleCorner },
	{ lvl: 127, item: ItemId.Caviar, baseExp: 0, from: ShopId.MerchantsGuild, to: ShopId.BoggsAntiques },
	{ lvl: 132, item: ItemId.BathSalts, baseExp: 0, from: ShopId.WestGate, to: ShopId.PeacockRoadNorth },
	{ lvl: 139, item: ItemId.Tomatoes, baseExp: 0, from: ShopId.Greengrocers, to: ShopId.Greengrocers },
	{ lvl: 144, item: ItemId.Steak, baseExp: 0, from: ShopId.LordsRoadWest, to: ShopId.HalligsStreetFood },
	{ lvl: 153, item: ItemId.Burger, baseExp: 0, from: ShopId.ThadwickSquare, to: ShopId.WaterfrontMarket },
	{ lvl: 158, item: ItemId.HamLeg, baseExp: 0, from: ShopId.HendersonsMeatStorehouse, to: ShopId.TannersRoad },
	{ lvl: 165, item: ItemId.ClockworkDragon, baseExp: 0, from: ShopId.LordsRoadEast, to: ShopId.UnicornFarm },
	{ lvl: 170, item: ItemId.SnowGlobe, baseExp: 0, from: ShopId.TannersRoad, to: ShopId.PeacockRoadCentral },
	{ lvl: 179, item: ItemId.Cups, baseExp: 0, from: ShopId.CobbleCorner, to: ShopId.UNKNOWN },
	{ lvl: 184, item: ItemId.Postcards, baseExp: 0, from: ShopId.OuterMarket, to: ShopId.UNKNOWN },
	{ lvl: 191, item: ItemId.Rhubarb, baseExp: 0, from: ShopId.FortuneholdFarm, to: ShopId.UNKNOWN },
	{ lvl: 196, item: ItemId.Curry, baseExp: 0, from: ShopId.GooseInnKitchen, to: ShopId.UNKNOWN },
	{ lvl: 216, item: ItemId.Oranges, baseExp: 0, from: ShopId.MeggritsMarket, to: ShopId.UNKNOWN },
	{ lvl: 233, item: ItemId.PrecisePocketWatch, baseExp: 0, from: ShopId.MeggritsMarket, to: ShopId.UNKNOWN },
	{ lvl: 255, item: ItemId.Silk, baseExp: 0, from: ShopId.WaterfrontMarket, to: ShopId.UNKNOWN },
	{ lvl: 272, item: ItemId.OldRarg, baseExp: 0, from: ShopId.UnicornFarm, to: ShopId.UNKNOWN },
	{ lvl: 300, item: ItemId.FargustWine, baseExp: 0, from: ShopId.WaterfrontMarket, to: ShopId.UNKNOWN },
	{ lvl: 317, item: ItemId.StripedVase, baseExp: 0, from: ShopId.LordsRoadCentral, to: ShopId.UNKNOWN },
	{ lvl: 339, item: ItemId.TeaLights, baseExp: 0, from: ShopId.BobbinRoadSouth, to: ShopId.UNKNOWN },
	{ lvl: 356, item: ItemId.UnicornHair, baseExp: 0, from: ShopId.CyclopsStoreCave, to: ShopId.UNKNOWN },
	{ lvl: 384, item: ItemId.PortraitPainting, baseExp: 0, from: ShopId.BertsGallery, to: ShopId.UNKNOWN },
	{ lvl: 400, item: ItemId.PendulumClock, baseExp: 0, from: ShopId.LanisCuriosities, to: ShopId.UNKNOWN },
	{ lvl: 423, item: ItemId.Monocle, baseExp: 0, from: ShopId.PeacockRoadNorth, to: ShopId.UNKNOWN },
	{ lvl: 439, item: ItemId.TophillWine, baseExp: 0, from: ShopId.PeacockRoadCentral, to: ShopId.UNKNOWN },
	{ lvl: 467, item: ItemId.AntiqueBook, baseExp: 0, from: ShopId.BoggsAntiques, to: ShopId.UNKNOWN },
	{ lvl: 484, item: ItemId.Truffles, baseExp: 0, from: ShopId.MerchantsGuild, to: ShopId.UNKNOWN },
]

export const trades: Action[] = rawTrades.map((t) => {
	return {
		requirements: [{ profession: ProfessionId.Merchant, level: t.lvl }],
		experience: [{ profession: ProfessionId.Merchant, amount: t.baseExp }],
		input: [{ id: t.item, amount: 6 }],
		output: [{ id: t.item, amount: 6 }],
	};
});
