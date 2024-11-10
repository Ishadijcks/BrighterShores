import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shops/ShopId';
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
	{ id: ItemId.BasicWhiteCowLeather, name: 'Basic White Cow Leather', description: '', buyValue: 0, sellValue: 799, armorerLevel: 0 },
	{ id: ItemId.BasicDeerLeather, name: 'Basic Deer Leather', description: '', buyValue: 0, sellValue: 875, armorerLevel: 0 },
	{ id: ItemId.BasicBlackCowLeather, name: 'Basic Black Cow Leather', description: '', buyValue: 0, sellValue: 1138, armorerLevel: 0 },
	{ id: ItemId.BasicSheepLeather, name: 'Basic Sheep Leather', description: '', buyValue: 0, sellValue: 1283, armorerLevel: 0 },
	{ id: ItemId.BasicBrownCowLeather, name: 'Basic Brown Cow Leather', description: '', buyValue: 0, sellValue: 1347, armorerLevel: 0 },
	{ id: ItemId.BasicBisonLeather, name: 'Basic Bison Leather', description: '', buyValue: 0, sellValue: 1539, armorerLevel: 0 },
	{ id: ItemId.BasicBuffaloLeather, name: 'Basic Buffalo Leather', description: '', buyValue: 0, sellValue: 1671, armorerLevel: 0 },
	{ id: ItemId.BasicHalebeastLeather, name: 'Basic Halebeast Leather', description: '', buyValue: 0, sellValue: 1932, armorerLevel: 0 },
	{ id: ItemId.ModerateWhiteCowLeather, name: 'Moderate White Cow Leather', description: '', buyValue: 0, sellValue: 2045, armorerLevel: 0 },
	{ id: ItemId.ModerateDeerLeather, name: 'Moderate Deer Leather', description: '', buyValue: 0, sellValue: 2094, armorerLevel: 0 },
	{ id: ItemId.ModerateBlackCowLeather, name: 'Moderate Black Cow Leather', description: '', buyValue: 0, sellValue: 2525, armorerLevel: 0 },
	{ id: ItemId.ModerateSheepLeather, name: 'Moderate Sheep Leather', description: '', buyValue: 0, sellValue: 2601, armorerLevel: 0 },
	{ id: ItemId.ModerateBrownCowLeather, name: 'Moderate Brown Cow Leather', description: '', buyValue: 0, sellValue: 2792, armorerLevel: 0 },
	{ id: ItemId.ModerateBisonLeather, name: 'Moderate Bison Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.ModerateBuffaloLeather, name: 'Moderate Buffalo Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.ModerateHalebeastLeather, name: 'Moderate Halebeast Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineWhiteCowLeather, name: 'Fine White Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineDeerLeather, name: 'Fine Deer Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineBlackCowLeather, name: 'Fine Black Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineSheepLeather, name: 'Fine Sheep Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineBrownCowLeather, name: 'Fine Brown Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineBisonLeather, name: 'Fine Bison Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineBuffaloLeather, name: 'Fine Buffalo Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.FineHalebeastLeather, name: 'Fine Halebeast Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongWhiteCowLeather, name: 'Strong White Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongDeerLeather, name: 'Strong Deer Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongBlackCowLeather, name: 'Strong Black Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongSheepLeather, name: 'Strong Sheep Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongBrownCowLeather, name: 'Strong Brown Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongBisonLeather, name: 'Strong Bison Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongBuffaloLeather, name: 'Strong Buffalo Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.StrongHalebeastLeather, name: 'Strong Halebeast Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorWhiteCowLeather, name: 'Superior White Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorDeerLeather, name: 'Superior Deer Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorBlackCowLeather, name: 'Superior Black Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorSheepLeather, name: 'Superior Sheep Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorBrownCowLeather, name: 'Superior Brown Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorBisonLeather, name: 'Superior Bison Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorBuffaloLeather, name: 'Superior Buffalo Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.SuperiorHalebeastLeather, name: 'Superior Halebeast Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectWhiteCowLeather, name: 'Perfect White Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectDeerLeather, name: 'Perfect Deer Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectBlackCowLeather, name: 'Perfect Black Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectSheepLeather, name: 'Perfect Sheep Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectBrownCowLeather, name: 'Perfect Brown Cow Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectBisonLeather, name: 'Perfect Bison Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectBuffaloLeather, name: 'Perfect Buffalo Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },
	{ id: ItemId.PerfectHalebeastLeather, name: 'Perfect Halebeast Leather', description: '', buyValue: 0, sellValue: 0, armorerLevel: 0 },

];

export const leathers: Item[] = rawLeathers.map((h) => {

	const leatherWorkerLevel = rawHides.find(hide => hide.name === h.name.replace("Leather", "Hide"))?.leatherworkerLevel ?? 0;

	return {
		name: h.name,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Leatherworker, level: leatherWorkerLevel },
			{ profession: ProfessionId.Armorer, level: h.armorerLevel }
		],
		id: h.id,
		episodes: [EpisodeId.Crenopolis],
		buyValue: h.buyValue,
		sellValue: h.sellValue,
		shops: [ShopId.LeatherStall],
		storages: [StorageType.LeathersBank],
	};
});