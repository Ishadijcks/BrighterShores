import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/data/world/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';
import { hides } from '$lib/data/profession/leatherworker/item/Hides';

interface Leather {
	quality: string;
	leather: string;
	description: string;
	id: ItemId;
	armorerLevel: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
const rawLeathers: Leather[] = [
	{ id: ItemId.BasicBisonLeather, quality: 'Basic', leather: 'Bison Leather', description: '', buyValue: 4000, sellValue: 1539, armorerLevel: 0 },
	{ id: ItemId.ModerateBisonLeather, quality: 'Moderate', leather: 'Bison Leather', description: '', buyValue: 9220, sellValue: 3180, armorerLevel: 0 },
	{ id: ItemId.FineBisonLeather, quality: 'Fine', leather: 'Bison Leather', description: '', buyValue: 18500, sellValue: 5295, armorerLevel: 0 },
	{ id: ItemId.StrongBisonLeather, quality: 'Strong', leather: 'Bison Leather', description: '', buyValue: 33300, sellValue: 8342, armorerLevel: 0 },
	{ id: ItemId.SuperiorBisonLeather, quality: 'Superior', leather: 'Bison Leather', description: '', buyValue: 75600, sellValue: 14831, armorerLevel: 0 },
	{ id: ItemId.PerfectBisonLeather, quality: 'Perfect', leather: 'Bison Leather', description: '', buyValue: 183000, sellValue: 26195, armorerLevel: 0 },

	{ id: ItemId.BasicBlackCowLeather, quality: 'Basic', leather: 'Black Cow Leather', description: '', buyValue: 2840, sellValue: 1138, armorerLevel: 0 },
	{ id: ItemId.ModerateBlackCowLeather, quality: 'Moderate', leather: 'Black Cow Leather', description: '', buyValue: 6820, sellValue: 2526, armorerLevel: 0 },
	{ id: ItemId.FineBlackCowLeather, quality: 'Fine', leather: 'Black Cow Leather', description: '', buyValue: 14300, sellValue: 4476, armorerLevel: 0 },
	{ id: ItemId.StrongBlackCowLeather, quality: 'Strong', leather: 'Black Cow Leather', description: '', buyValue: 25700, sellValue: 6764, armorerLevel: 0 },
	{ id: ItemId.SuperiorBlackCowLeather, quality: 'Superior', leather: 'Black Cow Leather', description: '', buyValue: 46300, sellValue: 10532, armorerLevel: 0 },
	{ id: ItemId.PerfectBlackCowLeather, quality: 'Perfect', leather: 'Black Cow Leather', description: '', buyValue: 133000, sellValue: 21200, armorerLevel: 0 },

	{ id: ItemId.BasicBrownCowLeather, quality: 'Basic', leather: 'Brown Cow Leather', description: '', buyValue: 3360, sellValue: 1347, armorerLevel: 0 },
	{ id: ItemId.ModerateBrownCowLeather, quality: 'Moderate', leather: 'Brown Cow Leather', description: '', buyValue: 7810, sellValue: 2792, armorerLevel: 0 },
	{ id: ItemId.FineBrownCowLeather, quality: 'Fine', leather: 'Brown Cow Leather', description: '', buyValue: 16800, sellValue: 4959, armorerLevel: 0 },
	{ id: ItemId.StrongBrownCowLeather, quality: 'Strong', leather: 'Brown Cow Leather', description: '', buyValue: 30600, sellValue: 7665, armorerLevel: 0 },
	{ id: ItemId.SuperiorBrownCowLeather, quality: 'Superior', leather: 'Brown Cow Leather', description: '', buyValue: 64300, sellValue: 13138, armorerLevel: 0 },
	{ id: ItemId.PerfectBrownCowLeather, quality: 'Perfect', leather: 'Brown Cow Leather', description: '', buyValue: 165000, sellValue: 24385, armorerLevel: 0 },

	{ id: ItemId.BasicBuffaloLeather, quality: 'Basic', leather: 'Buffalo Leather', description: '', buyValue: 4340, sellValue: 1671, armorerLevel: 0 },
	{ id: ItemId.ModerateBuffaloLeather, quality: 'Moderate', leather: 'Buffalo Leather', description: '', buyValue: 10200, sellValue: 3410, armorerLevel: 0 },
	{ id: ItemId.FineBuffaloLeather, quality: 'Fine', leather: 'Buffalo Leather', description: '', buyValue: 19800, sellValue: 5525, armorerLevel: 0 },
	{ id: ItemId.StrongBuffaloLeather, quality: 'Strong', leather: 'Buffalo Leather', description: '', buyValue: 34000, sellValue: 8309, armorerLevel: 0 },
	{ id: ItemId.SuperiorBuffaloLeather, quality: 'Superior', leather: 'Buffalo Leather', description: '', buyValue: 80400, sellValue: 14893, armorerLevel: 0 },
	{ id: ItemId.PerfectBuffaloLeather, quality: 'Perfect', leather: 'Buffalo Leather', description: '', buyValue: 218000, sellValue: 30321, armorerLevel: 0 },

	{ id: ItemId.BasicDeerLeather, quality: 'Basic', leather: 'Deer Leather', description: '', buyValue: 2180, sellValue: 875, armorerLevel: 0 },
	{ id: ItemId.ModerateDeerLeather, quality: 'Moderate', leather: 'Deer Leather', description: '', buyValue: 5440, sellValue: 2094, armorerLevel: 0 },
	{ id: ItemId.FineDeerLeather, quality: 'Fine', leather: 'Deer Leather', description: '', buyValue: 13000, sellValue: 4084, armorerLevel: 0 },
	{ id: ItemId.StrongDeerLeather, quality: 'Strong', leather: 'Deer Leather', description: '', buyValue: 24000, sellValue: 6322, armorerLevel: 0 },
	{ id: ItemId.SuperiorDeerLeather, quality: 'Superior', leather: 'Deer Leather', description: '', buyValue: 41800, sellValue: 9510, armorerLevel: 0 },
	{ id: ItemId.PerfectDeerLeather, quality: 'Perfect', leather: 'Deer Leather', description: '', buyValue: 121000, sellValue: 19934, armorerLevel: 0 },


	{ id: ItemId.BasicHalebeastLeather, quality: 'Basic', leather: 'Halebeast Leather', description: '', buyValue: 5020, sellValue: 1932, armorerLevel: 0 },
	{ id: ItemId.ModerateHalebeastLeather, quality: 'Moderate', leather: 'Halebeast Leather', description: '', buyValue: 11200, sellValue: 3761, armorerLevel: 0 },
	{ id: ItemId.FineHalebeastLeather, quality: 'Fine', leather: 'Halebeast Leather', description: '', buyValue: 21200, sellValue: 5908, armorerLevel: 0 },
	{ id: ItemId.StrongHalebeastLeather, quality: 'Strong', leather: 'Halebeast Leather', description: '', buyValue: 36900, sellValue: 8805, armorerLevel: 0 },
	{ id: ItemId.SuperiorHalebeastLeather, quality: 'Superior', leather: 'Halebeast Leather', description: '', buyValue: 93400, sellValue: 16690, armorerLevel: 0 },
	{ id: ItemId.PerfectHalebeastLeather, quality: 'Perfect', leather: 'Halebeast Leather', description: '', buyValue: 244000, sellValue: 33030, armorerLevel: 0 },

	{ id: ItemId.BasicSheepLeather, quality: 'Basic', leather: 'Sheep Leather', description: '', buyValue: 3200, sellValue: 1283, armorerLevel: 0 },
	{ id: ItemId.ModerateSheepLeather, quality: 'Moderate', leather: 'Sheep Leather', description: '', buyValue: 7020, sellValue: 2601, armorerLevel: 0 },
	{ id: ItemId.FineSheepLeather, quality: 'Fine', leather: 'Sheep Leather', description: '', buyValue: 15400, sellValue: 4677, armorerLevel: 0 },
	{ id: ItemId.StrongSheepLeather, quality: 'Strong', leather: 'Sheep Leather', description: '', buyValue: 28500, sellValue: 7313, armorerLevel: 0 },
	{ id: ItemId.SuperiorSheepLeather, quality: 'Superior', leather: 'Sheep Leather', description: '', buyValue: 52200, sellValue: 11356, armorerLevel: 0 },
	{ id: ItemId.PerfectSheepLeather, quality: 'Perfect', leather: 'Sheep Leather', description: '', buyValue: 141000, sellValue: 21786, armorerLevel: 0 },

	{ id: ItemId.BasicWhiteCowLeather, quality: 'Basic', leather: 'White Cow Leather', description: '', buyValue: 1990, sellValue: 799, armorerLevel: 0 },
	{ id: ItemId.ModerateWhiteCowLeather, quality: 'Moderate', leather: 'White Cow Leather', description: '', buyValue: 5310, sellValue: 2045, armorerLevel: 0 },
	{ id: ItemId.FineWhiteCowLeather, quality: 'Fine', leather: 'White Cow Leather', description: '', buyValue: 11900, sellValue: 3867, armorerLevel: 0 },
	{ id: ItemId.StrongWhiteCowLeather, quality: 'Strong', leather: 'White Cow Leather', description: '', buyValue: 23000, sellValue: 6232, armorerLevel: 0 },
	{ id: ItemId.SuperiorWhiteCowLeather, quality: 'Superior', leather: 'White Cow Leather', description: '', buyValue: 40700, sellValue: 9470, armorerLevel: 0 },
	{ id: ItemId.PerfectWhiteCowLeather, quality: 'Perfect', leather: 'White Cow Leather', description: '', buyValue: 108000, sellValue: 18722, armorerLevel: 0 },





];

export const leathers: Item[] = rawLeathers.map((h) => {
	const fullName = `${h.quality} ${h.leather}`;

	const leatherWorkerLevel =
		hides
			.find((hide) => hide.fullName === fullName.replace('Leather', 'Hide'))
			?.professions.find((p) => p.profession === ProfessionId.Leatherworker)?.level ?? 0;

	return {
		fullName: fullName,
		quality: h.quality,
		name: h.leather,
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
