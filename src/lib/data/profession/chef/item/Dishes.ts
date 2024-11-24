import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { rawCookingRecipes } from '$lib/data/profession/chef/Cooking';

interface Food {
	id: ItemId;
	quality: string;
	dish: string;
	description: string;
	buy: number;
	sell: number;
}

// prettier-ignore
// Haha
const rawDishes: Food[] = [
	{ id: ItemId.BasicBaconSandwich, quality: 'Basic', dish: 'Bacon Sandwich', description: '', buy: Infinity, sell: 560 },
	{ id: ItemId.AppetizingBaconSandwich, quality: 'Appetizing', dish: 'Bacon Sandwich', description: '', buy: Infinity, sell: 776 },
	{ id: ItemId.FineBaconSandwich, quality: 'Fine', dish: 'Bacon Sandwich', description: '', buy: Infinity, sell: 1240 },
	{ id: ItemId.TastyBaconSandwich, quality: 'Tasty', dish: 'Bacon Sandwich', description: '', buy: Infinity, sell: 2250 },
	{ id: ItemId.DeliciousBaconSandwich, quality: 'Delicious', dish: 'Bacon Sandwich', description: '', buy: Infinity, sell: 3620 },
	{ id: ItemId.GourmetBaconSandwich, quality: 'Gourmet', dish: 'Bacon Sandwich', description: '', buy: Infinity, sell: 6770 },

	{ id: ItemId.BasicChickenAndLeekPie, quality: 'Basic', dish: 'Chicken and Leek Pie', description: '', buy: Infinity, sell: 1160 },
	{ id: ItemId.AppetizingChickenAndLeekPie, quality: 'Appetizing', dish: 'Chicken and Leek Pie', description: '', buy: Infinity, sell: 1520 },
	{ id: ItemId.FineChickenAndLeekPie, quality: 'Fine', dish: 'Chicken and Leek Pie', description: '', buy: Infinity, sell: 2110 },
	{ id: ItemId.TastyChickenAndLeekPie, quality: 'Tasty', dish: 'Chicken and Leek Pie', description: '', buy: Infinity, sell: 2830 },
	{ id: ItemId.DeliciousChickenAndLeekPie, quality: 'Delicious', dish: 'Chicken and Leek Pie', description: '', buy: Infinity, sell: 4160 },
	{ id: ItemId.GourmetChickenAndLeekPie, quality: 'Gourmet', dish: 'Chicken and Leek Pie', description: '', buy: Infinity, sell: 7040 },

	{ id: ItemId.BasicCodAndChips, quality: 'Basic', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 2530 },
	{ id: ItemId.AppetizingCodAndChips, quality: 'Appetizing', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 3470 },
	{ id: ItemId.FineCodAndChips, quality: 'Fine', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 4800 },
	{ id: ItemId.TastyCodAndChips, quality: 'Tasty', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 6080 },
	{ id: ItemId.DeliciousCodAndChips, quality: 'Delicious', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 7760 },
	{ id: ItemId.SumptuousCodAndChips, quality: 'Sumptuous', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 11500 },
	{ id: ItemId.GourmetCodAndChips, quality: 'Gourmet', dish: 'Cod and Chips', description: '', buy: Infinity, sell: 14600 },

	{ id: ItemId.CommonFriedRayWings, quality: 'Common', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 794 },
	{ id: ItemId.DimFriedRayWings, quality: 'Dim', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 1240 },
	{ id: ItemId.SoldierFriedRayWings, quality: 'Soldier', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 1580 },
	{ id: ItemId.NimbleFriedRayWings, quality: 'Nimble', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 1980 },
	{ id: ItemId.TigerFriedRayWings, quality: 'Tiger', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 2420 },
	{ id: ItemId.BroadFriedRayWings, quality: 'Broad', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 3460 },
	{ id: ItemId.JadeFriedRayWings, quality: 'Jade', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 4810 },
	{ id: ItemId.PrimeFriedRayWings, quality: 'Prime', dish: 'Fried Ray Wings', description: '', buy: Infinity, sell: 5740 },

	{ id: ItemId.PlacidGrilledBass, quality: 'Placid', dish: 'Grilled Bass', description: '', buy: Infinity, sell: 688 },
	{ id: ItemId.StripedGrilledBass, quality: 'Striped', dish: 'Grilled Bass', description: '', buy: Infinity, sell: 1510 },
	{ id: ItemId.EmeraldGrilledBass, quality: 'Emerald', dish: 'Grilled Bass', description: '', buy: Infinity, sell: 2250 },
	{ id: ItemId.DroptheGrilledBass, quality: 'Dropthe', dish: 'Grilled Bass', description: '', buy: Infinity, sell: 2900 },
	{ id: ItemId.GiantGrilledBass, quality: 'Giant', dish: 'Grilled Bass', description: '', buy: Infinity, sell: 4970 },

	{ id: ItemId.YellowtailGurnardSoup, quality: 'Yellowtail', dish: 'Gurnard Soup', description: '', buy: Infinity, sell: 765 },
	{ id: ItemId.BigeyeGurnardSoup, quality: 'Bigeye', dish: 'Gurnard Soup', description: '', buy: Infinity, sell: 1260 },
	{ id: ItemId.BlackfinGurnardSoup, quality: 'Blackfin', dish: 'Gurnard Soup', description: '', buy: Infinity, sell: 1880 },
	{ id: ItemId.ShinyGurnardSoup, quality: 'Shiny', dish: 'Gurnard Soup', description: '', buy: Infinity, sell: 2490 },
	{ id: ItemId.TorpedoGurnardSoup, quality: 'Torpedo', dish: 'Gurnard Soup', description: '', buy: Infinity, sell: 3510 },
	{ id: ItemId.GrandGurnardSoup, quality: 'Grand', dish: 'Gurnard Soup', description: '', buy: Infinity, sell: 5550 },

	{ id: ItemId.LesserJelliedEels, quality: 'Lesser', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 556 },
	{ id: ItemId.GrayJelliedEels, quality: 'Gray', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 662 },
	{ id: ItemId.RockyJelliedEels, quality: 'Rocky', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 815 },
	{ id: ItemId.RordJelliedEels, quality: 'Rord', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 1120 },
	{ id: ItemId.MorayJelliedEels, quality: 'Moray', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 1720 },
	{ id: ItemId.CongerJelliedEels, quality: 'Conger', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 2580 },
	{ id: ItemId.LeopardJelliedEels, quality: 'Leopard', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 3250 },
	{ id: ItemId.GreaterJelliedEels, quality: 'Greater', dish: 'Jellied Eels', description: '', buy: Infinity, sell: 5210 },

	{ id: ItemId.AppetizingLobsterThermidor, quality: 'Appetizing', dish: 'Lobster Thermidor', description: '', buy: Infinity, sell: 3220 },
	{ id: ItemId.FineLobsterThermidor, quality: 'Fine', dish: 'Lobster Thermidor', description: '', buy: Infinity, sell: 4600 },
	{ id: ItemId.DeliciousLobsterThermidor, quality: 'Delicious', dish: 'Lobster Thermidor', description: '', buy: Infinity, sell: 6040 },
	{ id: ItemId.GourmetLobsterThermidor, quality: 'Gourmet', dish: 'Lobster Thermidor', description: '', buy: Infinity, sell: 8980 },

	{ id: ItemId.BasicOmelette, quality: 'Basic', dish: 'Omelette', description: '', buy: Infinity, sell: 336 },
	{ id: ItemId.AppetizingOmelette, quality: 'Appetizing', dish: 'Omelette', description: '', buy: Infinity, sell: 1230 },
	{ id: ItemId.TastyOmelette, quality: 'Tasty', dish: 'Omelette', description: '', buy: Infinity, sell: 2290 },
	{ id: ItemId.DeliciousOmelette, quality: 'Delicious', dish: 'Omelette', description: '', buy: Infinity, sell: 4140 },
	{ id: ItemId.GourmetOmelette, quality: 'Gourmet', dish: 'Omelette', description: '', buy: Infinity, sell: 7140 },

	{ id: ItemId.BeachOysterWithLemonJuice, quality: 'Beach', dish: 'Oyster with Lemon Juice', description: '', buy: Infinity, sell: 2950 },
	{ id: ItemId.SignalOystersWithLemonJuice, quality: 'Signal', dish: 'Oysters with Lemon Juice', description: '', buy: Infinity, sell: 4380 },
	{ id: ItemId.SpeckledOystersWithLemonJuice, quality: 'Speckled', dish: 'Oysters with Lemon Juice', description: '', buy: Infinity, sell: 6130 },
	{ id: ItemId.RustyOystersWithLemonJuice, quality: 'Rusty', dish: 'Oysters with Lemon Juice', description: '', buy: Infinity, sell: 10700 },

	{ id: ItemId.UnicornPufferSashimi, quality: 'Unicorn', dish: 'Puffer Sashimi', description: '', buy: Infinity, sell: 8370 },

	{ id: ItemId.BasicSausageAndMash, quality: 'Basic', dish: 'Sausage and Mash', description: '', buy: Infinity, sell: 850 },
	{ id: ItemId.AppetizingSausageAndMash, quality: 'Appetizing', dish: 'Sausage and Mash', description: '', buy: Infinity, sell: 1260 },
	{ id: ItemId.FineSausageAndMash, quality: 'Fine', dish: 'Sausage and Mash', description: '', buy: Infinity, sell: 2490 },
	{ id: ItemId.TastySausageAndMash, quality: 'Tasty', dish: 'Sausage and Mash', description: '', buy: Infinity, sell: 3550 },
	{ id: ItemId.DeliciousSausageAndMash, quality: 'Delicious', dish: 'Sausage and Mash', description: '', buy: Infinity, sell: 4470 },
	{ id: ItemId.GourmetSausageAndMash, quality: 'Gourmet', dish: 'Sausage and Mash', description: '', buy: Infinity, sell: 7900 },

	{ id: ItemId.BasicVegetableStew, quality: 'Basic', dish: 'Vegetable Stew', description: '', buy: Infinity, sell: 492 },
	{ id: ItemId.AppetizingVegetableStew, quality: 'Appetizing', dish: 'Vegetable Stew', description: '', buy: Infinity, sell: 791 },
	{ id: ItemId.FineVegetableStew, quality: 'Fine', dish: 'Vegetable Stew', description: '', buy: Infinity, sell: 1450 },
	{ id: ItemId.TastyVegetableStew, quality: 'Tasty', dish: 'Vegetable Stew', description: '', buy: Infinity, sell: 2460 },
	{ id: ItemId.DeliciousVegetableStew, quality: 'Delicious', dish: 'Vegetable Stew', description: '', buy: Infinity, sell: 4160 },
	{ id: ItemId.GourmetVegetableStew, quality: 'Gourmet', dish: 'Vegetable Stew', description: '', buy: Infinity, sell: 8040 },
];

export const dishes: Item[] = rawDishes.map((dish) => {
	return {
		...dish,
		quality: dish.quality,
		name: dish.dish,
		fullName: `${dish.quality} ${dish.dish}`,
		professions: [
			{ profession: ProfessionId.Chef, level: rawCookingRecipes.find((r) => r.dish === dish.id)?.lvl ?? Infinity },
		],
		buyValue: dish.buy,
		sellValue: dish.sell,
	};
});

// Baked Bream
// 8200
// 11200
// 17000
// 21000
// 25200
// 34

// Dab Stew
// 4400
// 6600
// 10600
// 12600
// 17400
// 22200
// 34400
// 52400
