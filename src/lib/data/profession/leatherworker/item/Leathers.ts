import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shop/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';
import { rawHides } from '$lib/data/profession/leatherworker/item/Hides';

interface Leather {
	name: string;
	description: string;
	id: ItemId;
	armorerLevel: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
const rawLeathers: Leather[] = [
	{ id: ItemId.BasicWhiteCowLeather, name: 'Basic White Cow Leather', description: '', buyValue: 1990, sellValue: 799, armorerLevel: 0 },
	{ id: ItemId.BasicDeerLeather, name: 'Basic Deer Leather', description: '', buyValue: 2180, sellValue: 875, armorerLevel: 0 },
	{ id: ItemId.BasicBlackCowLeather, name: 'Basic Black Cow Leather', description: '', buyValue: 2840, sellValue: 1138, armorerLevel: 0 },
	{ id: ItemId.BasicSheepLeather, name: 'Basic Sheep Leather', description: '', buyValue: 3200, sellValue: 1283, armorerLevel: 0 },
	{ id: ItemId.BasicBrownCowLeather, name: 'Basic Brown Cow Leather', description: '', buyValue: 3360, sellValue: 1347, armorerLevel: 0 },
	{ id: ItemId.BasicBisonLeather, name: 'Basic Bison Leather', description: '', buyValue: 4000, sellValue: 1539, armorerLevel: 0 },
	{ id: ItemId.BasicBuffaloLeather, name: 'Basic Buffalo Leather', description: '', buyValue: 4340, sellValue: 1671, armorerLevel: 0 },
	{ id: ItemId.BasicHalebeastLeather, name: 'Basic Halebeast Leather', description: '', buyValue: 5020, sellValue: 1932, armorerLevel: 0 },
	{ id: ItemId.ModerateWhiteCowLeather, name: 'Moderate White Cow Leather', description: '', buyValue: 5310, sellValue: 2045, armorerLevel: 0 },
	{ id: ItemId.ModerateDeerLeather, name: 'Moderate Deer Leather', description: '', buyValue: 5440, sellValue: 2094, armorerLevel: 0 },
	{ id: ItemId.ModerateBlackCowLeather, name: 'Moderate Black Cow Leather', description: '', buyValue: 6820, sellValue: 2526, armorerLevel: 0 },
	{ id: ItemId.ModerateSheepLeather, name: 'Moderate Sheep Leather', description: '', buyValue: 7020, sellValue: 2601, armorerLevel: 0 },
	{ id: ItemId.ModerateBrownCowLeather, name: 'Moderate Brown Cow Leather', description: '', buyValue: 7810, sellValue: 2792, armorerLevel: 0 },
	{ id: ItemId.ModerateBisonLeather, name: 'Moderate Bison Leather', description: '', buyValue: 9220, sellValue: 3180, armorerLevel: 0 },
	{ id: ItemId.ModerateBuffaloLeather, name: 'Moderate Buffalo Leather', description: '', buyValue: 10200, sellValue: 3410, armorerLevel: 0 },
	{ id: ItemId.ModerateHalebeastLeather, name: 'Moderate Halebeast Leather', description: '', buyValue: 11200, sellValue: 3761, armorerLevel: 0 },
	{ id: ItemId.FineWhiteCowLeather, name: 'Fine White Cow Leather', description: '', buyValue: 11900, sellValue: 3867, armorerLevel: 0 },
	{ id: ItemId.FineDeerLeather, name: 'Fine Deer Leather', description: '', buyValue: 13000, sellValue: 4084, armorerLevel: 0 },
	{ id: ItemId.FineBlackCowLeather, name: 'Fine Black Cow Leather', description: '', buyValue: 14300, sellValue: 4476, armorerLevel: 0 },
	{ id: ItemId.FineSheepLeather, name: 'Fine Sheep Leather', description: '', buyValue: 15400, sellValue: 4677, armorerLevel: 0 },
	{ id: ItemId.FineBrownCowLeather, name: 'Fine Brown Cow Leather', description: '', buyValue: 16800, sellValue: 4959, armorerLevel: 0 },
	{ id: ItemId.FineBisonLeather, name: 'Fine Bison Leather', description: '', buyValue: 18500, sellValue: 5295, armorerLevel: 0 },
	{ id: ItemId.FineBuffaloLeather, name: 'Fine Buffalo Leather', description: '', buyValue: 19800, sellValue: 5525, armorerLevel: 0 },
	{ id: ItemId.FineHalebeastLeather, name: 'Fine Halebeast Leather', description: '', buyValue: 21200, sellValue: 5908, armorerLevel: 0 },
	{ id: ItemId.StrongWhiteCowLeather, name: 'Strong White Cow Leather', description: '', buyValue: 23000, sellValue: 6232, armorerLevel: 0 },
	{ id: ItemId.StrongDeerLeather, name: 'Strong Deer Leather', description: '', buyValue: 24000, sellValue: 6322, armorerLevel: 0 },
	{ id: ItemId.StrongBlackCowLeather, name: 'Strong Black Cow Leather', description: '', buyValue: 25700, sellValue: 6764, armorerLevel: 0 },
	{ id: ItemId.StrongSheepLeather, name: 'Strong Sheep Leather', description: '', buyValue: 28500, sellValue: 7313, armorerLevel: 0 },
	{ id: ItemId.StrongBrownCowLeather, name: 'Strong Brown Cow Leather', description: '', buyValue: 30600, sellValue: 7665, armorerLevel: 0 },
	{ id: ItemId.StrongBisonLeather, name: 'Strong Bison Leather', description: '', buyValue: 33300, sellValue: 8342, armorerLevel: 0 },
	{ id: ItemId.StrongBuffaloLeather, name: 'Strong Buffalo Leather', description: '', buyValue: 34000, sellValue: 8309, armorerLevel: 0 },
	{ id: ItemId.StrongHalebeastLeather, name: 'Strong Halebeast Leather', description: '', buyValue: 36900, sellValue: 8805, armorerLevel: 0 },
	{ id: ItemId.SuperiorWhiteCowLeather, name: 'Superior White Cow Leather', description: '', buyValue: 40700, sellValue: 9470, armorerLevel: 0 },
	{ id: ItemId.SuperiorDeerLeather, name: 'Superior Deer Leather', description: '', buyValue: 41800, sellValue: 9510, armorerLevel: 0 },
	{ id: ItemId.SuperiorBlackCowLeather, name: 'Superior Black Cow Leather', description: '', buyValue: 46300, sellValue: 10532, armorerLevel: 0 },
	{ id: ItemId.SuperiorSheepLeather, name: 'Superior Sheep Leather', description: '', buyValue: 52200, sellValue: 11356, armorerLevel: 0 },
	{ id: ItemId.SuperiorBrownCowLeather, name: 'Superior Brown Cow Leather', description: '', buyValue: 64300, sellValue: 13138, armorerLevel: 0 },
	{ id: ItemId.SuperiorBisonLeather, name: 'Superior Bison Leather', description: '', buyValue: 75600, sellValue: 14831, armorerLevel: 0 },
	{ id: ItemId.SuperiorBuffaloLeather, name: 'Superior Buffalo Leather', description: '', buyValue: 80400, sellValue: 14893, armorerLevel: 0 },
	{ id: ItemId.SuperiorHalebeastLeather, name: 'Superior Halebeast Leather', description: '', buyValue: 93400, sellValue: 16690, armorerLevel: 0 },
	{ id: ItemId.PerfectWhiteCowLeather, name: 'Perfect White Cow Leather', description: '', buyValue: 108000, sellValue: 18722, armorerLevel: 0 },
	{ id: ItemId.PerfectDeerLeather, name: 'Perfect Deer Leather', description: '', buyValue: 121000, sellValue: 19934, armorerLevel: 0 },
	{ id: ItemId.PerfectBlackCowLeather, name: 'Perfect Black Cow Leather', description: '', buyValue: 133000, sellValue: 21200, armorerLevel: 0 },
	{ id: ItemId.PerfectSheepLeather, name: 'Perfect Sheep Leather', description: '', buyValue: 141000, sellValue: 21786, armorerLevel: 0 },
	{ id: ItemId.PerfectBrownCowLeather, name: 'Perfect Brown Cow Leather', description: '', buyValue: 165000, sellValue: 24385, armorerLevel: 0 },
	{ id: ItemId.PerfectBisonLeather, name: 'Perfect Bison Leather', description: '', buyValue: 183000, sellValue: 26195, armorerLevel: 0 },
	{ id: ItemId.PerfectBuffaloLeather, name: 'Perfect Buffalo Leather', description: '', buyValue: 218000, sellValue: 30321, armorerLevel: 0 },
	{ id: ItemId.PerfectHalebeastLeather, name: 'Perfect Halebeast Leather', description: '', buyValue: 244000, sellValue: 33030, armorerLevel: 0 },

];

export const leathers: Item[] = rawLeathers.map((h) => {
	const leatherWorkerLevel =
		rawHides.find((hide) => hide.name === h.name.replace('Leather', 'Hide'))?.leatherworkerLevel ?? 0;

	return {
		name: h.name,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Leatherworker, level: leatherWorkerLevel },
			{ profession: ProfessionId.Armorer, level: h.armorerLevel },
		],
		id: h.id,
		episodes: [EpisodeId.Crenopolis],
		buyValue: h.buyValue,
		sellValue: h.sellValue,
		shops: [ShopId.LeatherStall],
		storages: [StorageType.LeathersBank],
	};
});
