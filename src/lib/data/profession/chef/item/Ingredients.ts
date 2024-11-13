import type { Item } from '$lib/model/item/Item';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { ItemId } from '$lib/data/game/ItemId';

interface Ingredient {
	id: ItemId;
	quality?: string;
	name: string;
	description: string;
	buy: number;
	sell: number;
	lvl: number;
}

// prettier-ignore
const rawIngredients: Ingredient[] = [
	// TODO(@Isha): Move some of these to foraging
	{ id: ItemId.Bread, name: 'Bread', description: '', buy: 200, sell: 66, lvl: 0 },
	{ id: ItemId.Butter, name: 'Butter', description: '', buy: 650, sell: 216, lvl: 45 },
	{ id: ItemId.Cabbage, name: 'Cabbage', description: '', buy: Infinity, sell: 450, lvl: 0 },
	{ id: ItemId.RawChicken, name: 'Raw Chicken', description: '', buy: 340, sell: 113, lvl: 14 },
	{ id: ItemId.Cream, name: 'Cream', description: '', buy: 650, sell: 216, lvl: 45 },
	{ id: ItemId.Gelatin, name: 'Gelatin', description: '', buy: 220, sell: 73, lvl: 2 },
	{ id: ItemId.LemonJuice, name: 'Lemon Juice', description: '', buy: 940, sell: 313, lvl: 74 },
	{ id: ItemId.Pastry, name: 'Pastry', description: '', buy: 340, sell: 113, lvl: 14 },
	{ id: ItemId.RawSausages, name: 'Raw Sausages', description: '', buy: 260, sell: 86, lvl: 6 },
	{ id: ItemId.SoySauce, name: 'Soy Sauce', description: '', buy: 3990, sell: 1330, lvl: 379 },
	{ id: ItemId.Stock, name: 'Stock', description: '', buy: 360, sell: 120, lvl: 16 },
	{ id: ItemId.Wine, name: 'Wine', description: '', buy: 650, sell: 216, lvl: 45 },

	{ id: ItemId.BasicRawBacon, quality: 'Basic', name: 'Raw Bacon', description: '', buy: 200, sell: 66, lvl: 0 },
	{ id: ItemId.AppetizingRawBacon, quality: 'Appetizing', name: 'Raw Bacon', description: '', buy: 320, sell: 106, lvl: 12 },
	{ id: ItemId.FineRawBacon, quality: 'Fine', name: 'Raw Bacon', description: '', buy: 580, sell: 193, lvl: 38 },
	{ id: ItemId.TastyRawBacon, quality: 'Tasty', name: 'Raw Bacon', description: '', buy: 1140, sell: 380, lvl: 94 },
	{ id: ItemId.DeliciousRawBacon, quality: 'Delicious', name: 'Raw Bacon', description: '', buy: 1900, sell: 633, lvl: 170 },
	{ id: ItemId.GourmetRawBacon, quality: 'Gourmet', name: 'Raw Bacon', description: '', buy: 3650, sell: 1210, lvl: 345 },

	{ id: ItemId.GolbranthBeetroot, quality: 'Golbranth', name: 'Beetroot', description: '', buy: 2400, sell: 1600, lvl: 27 },
	{ id: ItemId.TarangBeetroot, quality: 'Tarang', name: 'Beetroot', description: '', buy: 4800, sell: 3200, lvl: 58 },
	{ id: ItemId.KalbBeetroot, quality: 'Kalb', name: 'Beetroot', description: '', buy: 6200, sell: 4200, lvl: 79 },
	{ id: ItemId.FlexhairBeetroot, quality: 'Flexhair', name: 'Beetroot', description: '', buy: 7400, sell: 5, lvl: 110 },
	{ id: ItemId.ZingBeetroot, quality: 'Zing', name: 'Beetroot', description: '', buy: 9600, sell: 6400, lvl: 136 },
	{ id: ItemId.OldclayBeetroot, quality: 'Oldclay', name: 'Beetroot', description: '', buy: 10800, sell: 7200, lvl: 155 },
	{ id: ItemId.FurtopBeetroot, quality: 'Furtop', name: 'Beetroot', description: '', buy: 12800, sell: 8600, lvl: 186 },
	{ id: ItemId.OlgraveBeetroot, quality: 'Olgrave', name: 'Beetroot', description: '', buy: 16800, sell: 11200, lvl: 242 },
	{ id: ItemId.VolbarnBeetroot, quality: 'Volbarn', name: 'Beetroot', description: '', buy: 21, sell: 14, lvl: 353 },
	{ id: ItemId.JamatoBeetroot, quality: 'Jamato', name: 'Beetroot', description: '', buy: 27800, sell: 18600, lvl: 430 },

	{ id: ItemId.BasicEggs, quality: 'Basic', name: 'Eggs', description: '', buy: 240, sell: 80, lvl: 4 },
	{ id: ItemId.AppetizingEggs, quality: 'Appetizing', name: 'Eggs', description: '', buy: 880, sell: 293, lvl: 68 },
	{ id: ItemId.TastyEggs, quality: 'Tasty', name: 'Eggs', description: '', buy: 1640, sell: 546, lvl: 144 },
	{ id: ItemId.DeliciousEggs, quality: 'Delicious', name: 'Eggs', description: '', buy: 2960, sell: 986, lvl: 276 },
	{ id: ItemId.GourmetEggs, quality: 'Gourmet', name: 'Eggs', description: '', buy: 5100, sell: 1700, lvl: 490 },

	{ id: ItemId.DeepsideGarlic, quality: 'Deepside', name: 'Garlic', description: '', buy: 3600, sell: 2400, lvl: 35 },
	{ id: ItemId.FireveinGarlic, quality: 'Firevein', name: 'Garlic', description: '', buy: 5, sell: 3400, lvl: 66 },
	{ id: ItemId.LangardGarlic, quality: 'Langard', name: 'Garlic', description: '', buy: 7200, sell: 4800, lvl: 104 },
	{ id: ItemId.ShelkramGarlic, quality: 'Shelkram', name: 'Garlic', description: '', buy: 9200, sell: 6200, lvl: 141 },
	{ id: ItemId.GrottoGarlic, quality: 'Grotto', name: 'Garlic', description: '', buy: 11600, sell: 7800, lvl: 176 },
	{ id: ItemId.AmberfleshGarlic, quality: 'Amberflesh', name: 'Garlic', description: '', buy: 17, sell: 11400, lvl: 268 },
	{ id: ItemId.WeldbulbGarlic, quality: 'Weldbulb', name: 'Garlic', description: '', buy: 24, sell: 16, lvl: 370 },

	{ id: ItemId.ValentLeek, quality: 'Valent', name: 'Leek', description: '', buy: 525, sell: 210, lvl: 8 },
	{ id: ItemId.BandedLeek, quality: 'Banded', name: 'Leek', description: '', buy: 1210, sell: 435, lvl: 30 },
	{ id: ItemId.PineshadeLeek, quality: 'Pineshade', name: 'Leek', description: '', buy: 2690, sell: 818, lvl: 56 },
	{ id: ItemId.GlintLeek, quality: 'Glint', name: 'Leek', description: '', buy: 5160, sell: 1290, lvl: 86 },
	{ id: ItemId.WondrousLeek, quality: 'Wondrous', name: 'Leek', description: '', buy: 7690, sell: 1710, lvl: 197 },
	{ id: ItemId.GoldenLeek, quality: 'Golden', name: 'Leek', description: '', buy: 14500, sell: 2550, lvl: 447 },

	{ id: ItemId.BasicMixedVegetables, quality: 'Basic', name: 'Mixed Vegetables', description: '', buy: 280, sell: 93, lvl: 8 },
	{ id: ItemId.AppetizingMixedVegetables, quality: 'Appetizing', name: 'Mixed Vegetables', description: '', buy: 450, sell: 150, lvl: 25 },
	{ id: ItemId.FineMixedVegetables, quality: 'Fine', name: 'Mixed Vegetables', description: '', buy: 830, sell: 276, lvl: 63 },
	{ id: ItemId.TastyMixedVegetables, quality: 'Tasty', name: 'Mixed Vegetables', description: '', buy: 1400, sell: 466, lvl: 120 },
	{ id: ItemId.DeliciousMixedVegetables, quality: 'Delicious', name: 'Mixed Vegetables', description: '', buy: 2370, sell: 790, lvl: 217},
	{ id: ItemId.GourmetMixedVegetables, quality: 'Gourmet', name: 'Mixed Vegetables', description: '', buy: 4580, sell: 1520, lvl: 438 },
];

export const ingredients: Item[] = rawIngredients.map((i) => {
	return {
		id: i.id,
		quality: i.quality,
		name: i.name,
		professions: [{ profession: ProfessionId.Chef, level: i.lvl }],
		buyValue: i.buy,
		sellValue: i.sell,
		fullName: i.quality ? `${i.quality} ${i.name}` : i.name,
		description: i.description,
	};
});
