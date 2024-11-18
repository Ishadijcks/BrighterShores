import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { rawTrades } from '$lib/data/profession/merchant/Trading';

export interface Tradeable {
	id: ItemId;
	name: string;
	description: string;
	buy: number;
	sell: number;
}

// prettier-ignore
const rawTradeables: Tradeable[] = [
	{ id: ItemId.Carrots, name: 'Carrots', description: '', buy: 120, sell: 0 },
	{ id: ItemId.Soap, name: 'Soap', description: '', buy: 120, sell: 0 },
	{ id: ItemId.Ribs, name: 'Ribs', description: '', buy: 132, sell: 0 },
	{ id: ItemId.MeatWrap, name: 'Meat Wrap', description: '', buy: 144, sell: 0 },
	{ id: ItemId.BeefJoint, name: 'Beef Joint', description: '', buy: 156, sell: 0 },
	{ id: ItemId.ClockworkSheep, name: 'Clockwork Sheep', description: '', buy: 168, sell: 0 },
	{ id: ItemId.PorcelainDoll, name: 'Porcelain Doll', description: '', buy: 192, sell: 0 },
	{ id: ItemId.Plates, name: 'Plates', description: '', buy: 216, sell: 0 },
	{ id: ItemId.PinBadge, name: 'Pin Badge', description: '', buy: 258, sell: 0 },
	{ id: ItemId.Pumpkin, name: 'Pumpkin', description: '', buy: 288, sell: 0 },
	{ id: ItemId.Pizza, name: 'Pizza', description: '', buy: 330, sell: 0 },
	{ id: ItemId.Bananas, name: 'Bananas', description: '', buy: 360, sell: 0 },
	{ id: ItemId.TinPocketWatch, name: 'Tin Pocket Watch', description: '', buy: 414, sell: 0 },
	{ id: ItemId.HomespunCloth, name: 'Homespun Cloth', description: '', buy: 444, sell: 0 },
	{ id: ItemId.RainbowCheese, name: 'Rainbow Cheese', description: '', buy: 486, sell: 0 },
	{ id: ItemId.ArganianWine, name: 'Arganian Wine', description: '', buy: 516, sell: 0 },
	{ id: ItemId.OakPatternedVase, name: 'Oak Patterned Vase', description: '', buy: 570, sell: 0 },
	{ id: ItemId.ScentedCandle, name: 'Scented Candle', description: '', buy: 600, sell: 0 },
	{ id: ItemId.UnicornDust, name: 'Unicorn Dust', description: '', buy: 642, sell: 0 },
	{ id: ItemId.LandscapePainting, name: 'Landscape Painting', description: '', buy: 672, sell: 0 },
	{ id: ItemId.CarriageClock, name: 'Carriage Clock', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Spectacles, name: 'Spectacles', description: '', buy: 0, sell: 0 },
	{ id: ItemId.SharpseedWine, name: 'Sharpseed Wine', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Rug, name: 'Rug', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Caviar, name: 'Caviar', description: '', buy: 0, sell: 0 },
	{ id: ItemId.BathSalts, name: 'Bath Salts', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Tomatoes, name: 'Tomatoes', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Steak, name: 'Steak', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Burger, name: 'Burger', description: '', buy: 0, sell: 0 },
	{ id: ItemId.HamLeg, name: 'Ham Leg', description: '', buy: 0, sell: 0 },
	{ id: ItemId.ClockworkDragon, name: 'Clockwork Dragon', description: '', buy: 0, sell: 0 },
	{ id: ItemId.SnowGlobe, name: 'Snow Globe', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Cups, name: 'Cups', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Postcards, name: 'Postcards', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Rhubarb, name: 'Rhubarb', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Curry, name: 'Curry', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Oranges, name: 'Oranges', description: '', buy: 0, sell: 0 },
	{ id: ItemId.PrecisePocketWatch, name: 'Precise Pocket Watch', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Silk, name: 'Silk', description: '', buy: 0, sell: 0 },
	{ id: ItemId.OldRarg, name: 'Old Rarg', description: '', buy: 0, sell: 0 },
	{ id: ItemId.FargustWine, name: 'Fargust Wine', description: '', buy: 0, sell: 0 },
	{ id: ItemId.StripedVase, name: 'Striped Vase', description: '', buy: 0, sell: 0 },
	{ id: ItemId.TeaLights, name: 'Tea Lights', description: '', buy: 0, sell: 0 },
	{ id: ItemId.UnicornHair, name: 'Unicorn Hair', description: '', buy: 0, sell: 0 },
	{ id: ItemId.PortraitPainting, name: 'Portrait Painting', description: '', buy: 0, sell: 0 },
	{ id: ItemId.PendulumClock, name: 'Pendulum Clock', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Monocle, name: 'Monocle', description: '', buy: 0, sell: 0 },
	{ id: ItemId.TophillWine, name: 'Tophill Wine', description: '', buy: 0, sell: 0 },
	{ id: ItemId.AntiqueBook, name: 'Antique Book', description: '', buy: 0, sell: 0 },
	{ id: ItemId.Truffles, name: 'Truffles', description: '', buy: 0, sell: 0 },
];

export const tradeables: Item[] = rawTradeables.map((t) => {
	return {
		id: t.id,
		name: t.name,
		description: t.description,
		fullName: t.name,
		buyValue: t.buy,
		sellValue: t.sell,
		professions: [
			{
				profession: ProfessionId.Merchant,
				level: rawTrades.find((trade) => trade.item === t.id)?.lvl ?? Infinity,
			},
		],
		episodes: [EpisodeId.Crenopolis],
	};
});
