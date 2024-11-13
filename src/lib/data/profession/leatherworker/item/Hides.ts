import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shop/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';

interface Hide {
	hide: string;
	quality: string;
	description: string;
	id: ItemId;
	merchantLevel: number;
	leatherworkerLevel: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawHides: Hide[] = [
	{ id: ItemId.BasicWhiteCowHide, quality: 'Basic', hide: 'White Cow Hide', description: 'Quite tatty, but still can be made into leather', buyValue: 546, sellValue: 210, merchantLevel: 10, leatherworkerLevel: 0 },
	{ id: ItemId.BasicDeerHide, quality: 'Basic', hide: 'Deer Hide', description: 'Quite tatty, but still can be made into leather', buyValue: 618, sellValue: 238, merchantLevel: 14, leatherworkerLevel: 2 },
	{ id: ItemId.BasicBlackCowHide, quality: 'Basic', hide: 'Black Cow Hide', description: 'Quite tatty, but still can be made into leather', buyValue: 850, sellValue: 315, merchantLevel: 25, leatherworkerLevel: 4 },
	{ id: ItemId.BasicSheepHide, quality: 'Basic', hide: 'Sheep Hide', description: 'Maybe one day you\'ll get to work on some better hides', buyValue: 980, sellValue: 350, merchantLevel: 30, leatherworkerLevel: 6 },
	{ id: ItemId.BasicBrownCowHide, quality: 'Basic', hide: 'Brown Cow Hide', description: 'Cows aren\'t very good at hiding', buyValue: 1030, sellValue: 371, merchantLevel: 33, leatherworkerLevel: 8 },
	{ id: ItemId.BasicBisonHide, quality: 'Basic', hide: 'Bison Hide', description: 'Maybe one day you\'ll get to work on some better hides' , buyValue: 1150, sellValue: 413, merchantLevel: 39, leatherworkerLevel:  10},
	{ id: ItemId.BasicBuffaloHide, quality: 'Basic', hide: 'Buffalo Hide', description: 'Maybe one day you\'ll get to work on some better hides', buyValue: 1310, sellValue: 455, merchantLevel: 45, leatherworkerLevel: 12 },
	{ id: ItemId.BasicHalebeastHide, quality: 'Basic', hide: 'Halebeast Hide', description: 'Halebeasts are substantial animals and so provide sizable hides', buyValue: 1490, sellValue: 497, merchantLevel: 51, leatherworkerLevel: 14 },
	{ id: ItemId.ModerateWhiteCowHide, quality: 'Moderate', hide: 'White Cow Hide', description: 'Slightly better quality hide', buyValue: 1590, sellValue: 532, merchantLevel: 56, leatherworkerLevel: 16 },
	{ id: ItemId.ModerateDeerHide, quality: 'Moderate', hide: 'Deer Hide', description: 'Oh deer', buyValue: 1650, sellValue: 553, merchantLevel: 59, leatherworkerLevel: 18 },
	{ id: ItemId.ModerateBlackCowHide, quality: 'Moderate', hide: 'Black Cow Hide', description: 'Rough around the edges, but the middle is good', buyValue: 2010, sellValue: 630, merchantLevel: 70, leatherworkerLevel: 23 },
	{ id: ItemId.ModerateSheepHide, quality: 'Moderate', hide: 'Sheep Hide', description: 'Rough around the edges, but the middle is good', buyValue: 2030, sellValue: 637, merchantLevel: 71, leatherworkerLevel: 29 },
	{ id: ItemId.ModerateBrownCowHide, quality: 'Moderate', hide: 'Brown Cow Hide', description: 'Slightly better quality hide', buyValue: 2170, sellValue: 679, merchantLevel: 77, leatherworkerLevel: 35 },
	{ id: ItemId.ModerateBisonHide, quality: 'Moderate', hide: 'Bison Hide', description: 'Slightly better quality hide', buyValue: 2350, sellValue: 714, merchantLevel: 82, leatherworkerLevel: 44 },
	{ id: ItemId.ModerateBuffaloHide, quality: 'Moderate', hide: 'Buffalo Hide', description: 'Slightly better quality hide', buyValue: 2610, sellValue: 770, merchantLevel: 90, leatherworkerLevel: 51 },
	{ id: ItemId.ModerateHalebeastHide, quality: 'Moderate', hide: 'Halebeast Hide', description: 'Slightly better quality hide', buyValue: 2760, sellValue: 812, merchantLevel: 96, leatherworkerLevel: 57 },
	{ id: ItemId.FineWhiteCowHide, quality: 'Fine', hide: 'White Cow Hide', description: 'Where does the white cow hide?', buyValue: 2780, sellValue: 819, merchantLevel: 56, leatherworkerLevel: 66 },
	{ id: ItemId.FineDeerHide, quality: 'Fine', hide: 'Deer Hide', description: 'This hide will make some pretty fine leather', buyValue: 3010, sellValue: 861, merchantLevel: 103, leatherworkerLevel: 72 },
	{ id: ItemId.FineBlackCowHide, quality: 'Fine', hide: 'Black Cow Hide', description: 'This hide will make some pretty fine leather', buyValue: 3300, sellValue: 917, merchantLevel: 111, leatherworkerLevel: 78 },
	{ id: ItemId.FineSheepHide, quality: 'Fine', hide: 'Sheep Hide', description: 'But this sheep didn\'t hide', buyValue: 3420, sellValue: 952, merchantLevel: 116, leatherworkerLevel: 88 },
	{ id: ItemId.FineBrownCowHide, quality: 'Fine', hide: 'Brown Cow Hide', description: 'This hide will make some pretty fine leather', buyValue: 3670, sellValue: 994, merchantLevel: 122, leatherworkerLevel: 94 },
	{ id: ItemId.FineBisonHide, quality: 'Fine', hide: 'Bison Hide', description: 'This hide will make some pretty fine leather', buyValue: 3700, sellValue: 1000, merchantLevel: 123, leatherworkerLevel: 103 },
	{ id: ItemId.FineBuffaloHide, quality: 'Fine', hide: 'Buffalo Hide', description: 'Fine, the buffalo can hide if it wants to', buyValue: 4060, sellValue: 1070, merchantLevel: 134, leatherworkerLevel: 110 },
	{ id: ItemId.FineHalebeastHide, quality: 'Fine', hide: 'Halebeast Hide', description: 'This hide will make some pretty fine leather', buyValue: 4140, sellValue: 1090, merchantLevel: 137, leatherworkerLevel: 116 },
	{ id: ItemId.StrongWhiteCowHide, quality: 'Strong', hide: 'White Cow Hide', description: 'You can make some substantial leather from this', buyValue: 4400, sellValue: 1130, merchantLevel: 142, leatherworkerLevel: 125 },
	{ id: ItemId.StrongDeerHide, quality: 'Strong', hide: 'Deer Hide', description: 'You can make some substantial leather from this', buyValue: 4560, sellValue: 1170, merchantLevel: 148, leatherworkerLevel: 131 },
	{ id: ItemId.StrongBlackCowHide, quality: 'Strong', hide: 'Black Cow Hide', description: 'You can make some substantial leather from this', buyValue: 4880, sellValue: 1220, merchantLevel: 155, leatherworkerLevel: 137 },
	{ id: ItemId.StrongSheepHide, quality: 'Strong', hide: 'Sheep Hide', description: 'You can make some substantial leather from this', buyValue: 5370, sellValue: 1310, merchantLevel: 168, leatherworkerLevel: 147 },
	{ id: ItemId.StrongBrownCowHide, quality: 'Strong', hide: 'Brown Cow Hide', description: 'You can make some substantial leather from this', buyValue: 5710, sellValue: 1360, merchantLevel: 175, leatherworkerLevel: 153 },
	{ id: ItemId.StrongBisonHide, quality: 'Strong', hide: 'Bison Hide', description: 'You can make some substantial leather from this', buyValue: 6020, sellValue: 1400, merchantLevel: 180, leatherworkerLevel: 159 },
	{ id: ItemId.StrongBuffaloHide, quality: 'Strong', hide: 'Buffalo Hide', description: 'Putting the buff into buffalo', buyValue: 6190, sellValue: 1440, merchantLevel: 186, leatherworkerLevel: 168 },
	{ id: ItemId.StrongHalebeastHide, quality: 'Strong', hide: 'Halebeast Hide', description: 'You can make some substantial leather from this', buyValue: 6270, sellValue: 1460, merchantLevel: 189, leatherworkerLevel: 175 },
	{ id: ItemId.SuperiorWhiteCowHide, quality: 'Superior', hide: 'White Cow Hide', description: 'This cow hide looks down on the hides that have come before', buyValue: 6930, sellValue: 1540, merchantLevel: 200, leatherworkerLevel: 181 },
	{ id: ItemId.SuperiorDeerHide, quality: 'Superior', hide: 'Deer Hide', description: 'The main component for some of the best leather in the land', buyValue: 7060, sellValue: 1570, merchantLevel: 205, leatherworkerLevel: 190 },
	{ id: ItemId.SuperiorBlackCowHide, quality: 'Superior', hide: 'Black Cow Hide', description: 'The main component for some of the best leather in the land', buyValue: 7940, sellValue: 1690, merchantLevel: 222, leatherworkerLevel: 196 },
	{ id: ItemId.SuperiorSheepHide, quality: 'Superior', hide: 'Sheep Hide', description: 'The main component for some of the best leather in the land', buyValue: 8680, sellValue: 1810, merchantLevel: 239, leatherworkerLevel: 210 },
	{ id: ItemId.SuperiorBrownCowHide, quality: 'Superior', hide: 'Brown Cow Hide', description: 'The main component for some of the best leather in the land', buyValue: 10200, sellValue: 2000, merchantLevel: 266, leatherworkerLevel: 240 },
	{ id: ItemId.SuperiorBisonHide, quality: 'Superior', hide: 'Bison Hide', description: 'The main component for some of the best leather in the land', buyValue: 11200, sellValue: 2120, merchantLevel: 283, leatherworkerLevel: 260 },
	{ id: ItemId.SuperiorBuffaloHide, quality: 'Superior', hide: 'Buffalo Hide', description: 'The main component for some of the best leather in the land', buyValue: 11400, sellValue: 2160, merchantLevel: 289, leatherworkerLevel: 290 },
	{ id: ItemId.SuperiorHalebeastHide, quality: 'Superior', hide: 'Halebeast Hide', description: 'This hide is the boss', buyValue: 12400, sellValue: 2270, merchantLevel: 305, leatherworkerLevel: 310 },
	{ id: ItemId.PerfectWhiteCowHide, quality: 'Perfect', hide: 'White Cow Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 14300, sellValue: 2470, merchantLevel: 333, leatherworkerLevel: 330 },
	{ id: ItemId.PerfectDeerHide, quality: 'Perfect', hide: 'Deer Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 15500, sellValue: 2590, merchantLevel: 350, leatherworkerLevel: 360 },
	{ id: ItemId.PerfectBlackCowHide, quality: 'Perfect', hide: 'Black Cow Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 16400, sellValue: 2700, merchantLevel: 367, leatherworkerLevel: 380 },
	{ id: ItemId.PerfectSheepHide, quality: 'Perfect', hide: 'Sheep Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 16900, sellValue: 2740, merchantLevel: 372, leatherworkerLevel: 400 },
	{ id: ItemId.PerfectBrownCowHide, quality: 'Perfect', hide: 'Brown Cow Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 19300, sellValue: 2980, merchantLevel: 406, leatherworkerLevel: 430 },
	{ id: ItemId.PerfectBisonHide, quality: 'Perfect', hide: 'Bison Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 20100, sellValue: 3050, merchantLevel: 417, leatherworkerLevel: 450 },
	{ id: ItemId.PerfectBuffaloHide, quality: 'Perfect', hide: 'Buffalo Hide', description: 'So pristine it\'s almost a shame to tan it', buyValue: 24800, sellValue: 3450, merchantLevel: 473, leatherworkerLevel: 470 },
	{ id: ItemId.PerfectHalebeastHide, quality: 'Perfect', hide: 'Halebeast Hide', description: 'The halebeast must have been very warm with such a thick hide', buyValue: 26400, sellValue: 3570, merchantLevel: 490, leatherworkerLevel: 490 },
];

export const hides: Item[] = rawHides.map((h) => {
	return {
		fullName: `${h.quality} ${h.hide}`,
		quality: h.quality,
		name: h.hide,
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
