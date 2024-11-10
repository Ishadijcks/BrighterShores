import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shops/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';

interface Hide {
	name: string;
	description: string;
	id: ItemId;
	merchantLevel: number;
	leatherworkerLevel: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawHides: Hide[] = [
	{ id: ItemId.BasicWhiteCowHide, name: 'Basic White Cow Hide', description: 'Quite tatty, but still can be made into leather', buyValue: 546, sellValue: 210, merchantLevel: 10, leatherworkerLevel: 0 },
	{ id: ItemId.BasicDeerHide, name: 'Basic Deer Hide', description: 'Quite tatty, but still can be made into leather', buyValue: 618, sellValue: 238, merchantLevel: 14, leatherworkerLevel: 2 },
	{ id: ItemId.BasicBlackCowHide, name: 'Basic Black Cow Hide', description: 'Quite tatty, but still can be made into leather', buyValue: 850, sellValue: 0, merchantLevel: 25, leatherworkerLevel: 4 },
	{ id: ItemId.BasicSheepHide, name: 'Basic Sheep Hide', description: 'Maybe one day you\'ll get to work on some better hides', buyValue: 980, sellValue: 0, merchantLevel: 30, leatherworkerLevel: 6 },
	{ id: ItemId.BasicBrownCowHide, name: 'Basic Brown Cow Hide', description: 'Cows aren\'t very good at hiding', buyValue: 1030, sellValue: 0, merchantLevel: 33, leatherworkerLevel: 8 },
	{ id: ItemId.BasicBisonHide, name: 'Basic Bison Hide', description: 'Maybe one day you\'ll get to work on some better hides' , buyValue: 1150, sellValue: 413, merchantLevel: 39, leatherworkerLevel:  10},
	{ id: ItemId.BasicBuffaloHide, name: 'Basic Buffalo Hide', description: 'Maybe one day you\'ll get to work on some better hides', buyValue: 1310, sellValue: 0, merchantLevel: 45, leatherworkerLevel: 12 },
	{ id: ItemId.BasicHalebeastHide, name: 'Basic Halebeast Hide', description: 'Halebeasts are substantial animals and so provide sizable hides', buyValue: 1490, sellValue: 0, merchantLevel: 51, leatherworkerLevel: 14 },
	{ id: ItemId.ModerateWhiteCowHide, name: 'Moderate White Cow Hide', description: 'Slightly better quality hide', buyValue: 1590, sellValue: 0, merchantLevel: 56, leatherworkerLevel: 16 },
	{ id: ItemId.ModerateDeerHide, name: 'Moderate Deer Hide', description: 'Oh deer', buyValue: 1650, sellValue: 0, merchantLevel: 59, leatherworkerLevel: 18 },
	{ id: ItemId.ModerateBlackCowHide, name: 'Moderate Black Cow Hide', description: 'Rough around the edges, but the middle is good', buyValue: 2010, sellValue: 0, merchantLevel: 70, leatherworkerLevel: 23 },
	{ id: ItemId.ModerateSheepHide, name: 'Moderate Sheep Hide', description: 'Rough around the edges, but the middle is good', buyValue: 2030, sellValue: 0, merchantLevel: 71, leatherworkerLevel: 29 },
	{ id: ItemId.ModerateBrownCowHide, name: 'Moderate Brown Cow Hide', description: 'Slightly better quality hide', buyValue: 2170, sellValue: 0, merchantLevel: 77, leatherworkerLevel: 35 },
	{ id: ItemId.ModerateBisonHide, name: 'Moderate Bison Hide', description: 'Slightly better quality hide', buyValue: 2350, sellValue: 0, merchantLevel: 82, leatherworkerLevel: 44 },
	{ id: ItemId.ModerateBuffaloHide, name: 'Moderate Buffalo Hide', description: 'Slightly better quality hide', buyValue: 2610, sellValue: 0, merchantLevel: 90, leatherworkerLevel: 51 },
	{ id: ItemId.ModerateHalebeastHide, name: 'Moderate Halebeast Hide', description: 'Slightly better quality hide', buyValue: 2760, sellValue: 0, merchantLevel: 96, leatherworkerLevel: 57 },
	{ id: ItemId.FineWhiteCowHide, name: 'Fine White Cow Hide', description: 'Where does the white cow hide?', buyValue: 2780, sellValue: 0, merchantLevel: 56, leatherworkerLevel: 66 },
	{ id: ItemId.FineDeerHide, name: 'Fine Deer Hide', description: 'This hide will make some pretty fine leather', buyValue: 3010, sellValue: 0, merchantLevel: 103, leatherworkerLevel: 72 },
	{ id: ItemId.FineBlackCowHide, name: 'Fine Black Cow Hide', description: 'This hide will make some pretty fine leather', buyValue: 3300, sellValue: 0, merchantLevel: 111, leatherworkerLevel: 78 },
	{ id: ItemId.FineSheepHide, name: 'Fine Sheep Hide', description: 'But this sheep didn\'t hide', buyValue: 3420, sellValue: 0, merchantLevel: 116, leatherworkerLevel: 88 },
	{ id: ItemId.FineBrownCowHide, name: 'Fine Brown Cow Hide', description: 'This hide will make some pretty fine leather', buyValue: 3670, sellValue: 0, merchantLevel: 122, leatherworkerLevel: 94 },
	{ id: ItemId.FineBisonHide, name: 'Fine Bison Hide', description: 'This hide will make some pretty fine leather', buyValue: 3700, sellValue: 0, merchantLevel: 123, leatherworkerLevel: 103 },
	{ id: ItemId.FineBuffaloHide, name: 'Fine Buffalo Hide', description: 'Fine, the buffalo can hide if it wants to', buyValue: 4060, sellValue: 0, merchantLevel: 134, leatherworkerLevel: 110 },
	{ id: ItemId.FineHalebeastHide, name: 'Fine Halebeast Hide', description: 'This hide will make some pretty fine leather', buyValue: 4140, sellValue: 0, merchantLevel: 137, leatherworkerLevel: 116 },
	{ id: ItemId.StrongWhiteCowHide, name: 'Strong White Cow Hide', description: 'You can make some substantial leather from this', buyValue: 4400, sellValue: 0, merchantLevel: 142, leatherworkerLevel: 125 },
	{ id: ItemId.StrongDeerHide, name: 'Strong Deer Hide', description: 'You can make some substantial leather from this', buyValue: 4560, sellValue: 0, merchantLevel: 148, leatherworkerLevel: 131 },
	{ id: ItemId.StrongBlackCowHide, name: 'Strong Black Cow Hide', description: 'You can make some substantial leather from this', buyValue: 4880, sellValue: 0, merchantLevel: 155, leatherworkerLevel: 137 },
	{ id: ItemId.StrongSheepHide, name: 'Strong Sheep Hide', description: 'You can make some substantial leather from this', buyValue: 5370, sellValue: 0, merchantLevel: 168, leatherworkerLevel: 147 },
	{ id: ItemId.StrongBrownCowHide, name: 'Strong Brown Cow Hide', description: 'You can make some substantial leather from this', buyValue: 5710, sellValue: 0, merchantLevel: 175, leatherworkerLevel: 153 },
	{ id: ItemId.StrongBisonHide, name: 'Strong Bison Hide', description: 'You can make some substantial leather from this', buyValue: 6020, sellValue: 0, merchantLevel: 180, leatherworkerLevel: 159 },
	{ id: ItemId.StrongBuffaloHide, name: 'Strong Buffalo Hide', description: 'Putting the buff into buffalo', buyValue: 6190, sellValue: 0, merchantLevel: 186, leatherworkerLevel: 168 },
	{ id: ItemId.StrongHalebeastHide, name: 'Strong Halebeast Hide', description: 'You can make some substantial leather from this', buyValue: 6270, sellValue: 0, merchantLevel: 189, leatherworkerLevel: 175 },
	{ id: ItemId.SuperiorWhiteCowHide, name: 'Superior White Cow Hide', description: 'This cow hide looks down on the hides that have come before', buyValue: 6930, sellValue: 0, merchantLevel: 200, leatherworkerLevel: 181 },
	{ id: ItemId.SuperiorDeerHide, name: 'Superior Deer Hide', description: 'The main component for some of the best leather in the land', buyValue: 7060, sellValue: 0, merchantLevel: 205, leatherworkerLevel: 190 },
	{ id: ItemId.SuperiorBlackCowHide, name: 'Superior Black Cow Hide', description: 'The main component for some of the best leather in the land', buyValue: 7940, sellValue: 0, merchantLevel: 222, leatherworkerLevel: 196 },
	{ id: ItemId.SuperiorSheepHide, name: 'Superior Sheep Hide', description: 'The main component for some of the best leather in the land', buyValue: 8680, sellValue: 0, merchantLevel: 239, leatherworkerLevel: 210 },
	{ id: ItemId.SuperiorBrownCowHide, name: 'Superior Brown Cow Hide', description: 'The main component for some of the best leather in the land', buyValue: 10200, sellValue: 0, merchantLevel: 266, leatherworkerLevel: 240 },
	{ id: ItemId.SuperiorBisonHide, name: 'Superior Bison Hide', description: 'The main component for some of the best leather in the land', buyValue: 11200, sellValue: 0, merchantLevel: 283, leatherworkerLevel: 260 },
	{ id: ItemId.SuperiorBuffaloHide, name: 'Superior Buffalo Hide', description: 'The main component for some of the best leather in the land', buyValue: 11400, sellValue: 0, merchantLevel: 289, leatherworkerLevel: 290 },
	{ id: ItemId.SuperiorHalebeastHide, name: 'Superior Halebeast Hide', description: 'This hide is the boss', buyValue: 12400, sellValue: 0, merchantLevel: 305, leatherworkerLevel: 310 },
	{ id: ItemId.PerfectWhiteCowHide, name: 'Perfect White Cow Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 14300, sellValue: 0, merchantLevel: 333, leatherworkerLevel: 330 },
	{ id: ItemId.PerfectDeerHide, name: 'Perfect Deer Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 15500, sellValue: 0, merchantLevel: 350, leatherworkerLevel: 360 },
	{ id: ItemId.PerfectBlackCowHide, name: 'Perfect Black Cow Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 16400, sellValue: 0, merchantLevel: 367, leatherworkerLevel: 380 },
	{ id: ItemId.PerfectSheepHide, name: 'Perfect Sheep Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 16900, sellValue: 0, merchantLevel: 372, leatherworkerLevel: 400 },
	{ id: ItemId.PerfectBrownCowHide, name: 'Perfect Brown Cow Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 19300, sellValue: 0, merchantLevel: 406, leatherworkerLevel: 430 },
	{ id: ItemId.PerfectBisonHide, name: 'Perfect Bison Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 20100, sellValue: 0, merchantLevel: 417, leatherworkerLevel: 450 },
	{ id: ItemId.PerfectBuffaloHide, name: 'Perfect Buffalo Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 24800, sellValue: 0, merchantLevel: 473, leatherworkerLevel: 470 },
	{ id: ItemId.PerfectHalebeastHide, name: 'Perfect Halebeast Hide', description: 'The halebeast must have been very warm with such a thick hide', buyValue: 26400, sellValue: 0, merchantLevel: 490, leatherworkerLevel: 490 },
];

export const hides: Item[] = rawHides.map((h) => {
	return {
		name: h.name,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Merchant, level: h.merchantLevel },
			{ profession: ProfessionId.Leatherworker, level: h.leatherworkerLevel },
		],
		id: h.id,
		episodes: [EpisodeId.Crenopolis],
		buyValue: h.buyValue,
		sellValue: h.sellValue,
		shops: [ShopId.HideStall],
		storages: [StorageType.HidesBank],
	};
});
