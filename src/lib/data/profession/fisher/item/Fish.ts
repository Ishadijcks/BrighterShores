import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface Fish {
	quality: string;
	species: string;
	description: string;
	id: ItemId;
	f: number;
	buy: number;
	sell: number;
}

// prettier-ignore
const rawFish: Fish[] = [
	// Active Fish
	{ id: ItemId.PlacidBass, quality: 'Placid', species: 'Bass', description: '', buy: 1290, sell: 480, f: 28 },
	{ id: ItemId.StripedBass, quality: 'Striped', species: 'Bass', description: '', buy: 3430, sell: 1040, f: 84 },
	{ id: ItemId.EmeraldBass, quality: 'Emerald', species: 'Bass', description: '', buy: 5960, sell: 1570, f: 137 },
	{ id: ItemId.DroptheBass, quality: 'Dropthe', species: 'Bass', description: '', buy: 9280, sell: 2110, f: 191 },
	{ id: ItemId.GiantBass, quality: 'Giant', species: 'Bass', description: '', buy: 21700, sell: 3690, f: 349 },

	{ id: ItemId.SlightCod, quality: 'Slight', species: 'Cod', description: '', buy: 2880, sell: 900, f: 70 },
	{ id: ItemId.WaltzingCod, quality: 'Waltzing', species: 'Cod', description: '', buy: 4340, sell: 1240, f: 104 },
	{ id: ItemId.TealCod, quality: 'Teal', species: 'Cod', description: '', buy: 6430, sell: 1650, f: 145 },
	{ id: ItemId.PearlyCod, quality: 'Pearly', species: 'Cod', description: '', buy: 8310, sell: 1980, f: 178 },
	{ id: ItemId.MosaicCod, quality: 'Mosaic', species: 'Cod', description: '', buy: 12200, sell: 2550, f: 235 },
	{ id: ItemId.BurlyCod, quality: 'Burly', species: 'Cod', description: '', buy: 23500, sell: 3860, f: 366 },
	{ id: ItemId.EmperorCod, quality: 'Emperor', species: 'Cod', description: '', buy: 33100, sell: 4740, f: 454 },

	{ id: ItemId.LesserEel, quality: 'Lesser', species: 'Eel', description: '', buy: 412, sell: 165, f: 2 },
	{ id: ItemId.GrayEel, quality: 'Gray', species: 'Eel', description: '', buy: 525, sell: 210, f: 8 },
	{ id: ItemId.RockyEel, quality: 'Rocky', species: 'Eel', description: '', buy: 702, sell: 270, f: 16 },
	{ id: ItemId.RordEel, quality: 'Rord', species: 'Eel', description: '', buy: 1170, sell: 420, f: 36 },
	{ id: ItemId.MorayEel, quality: 'Moray', species: 'Eel', description: '', buy: 2300, sell: 720, f: 76 },
	{ id: ItemId.CongerEel, quality: 'Conger', species: 'Eel', description: '', buy: 4290, sell: 1130, f: 131 },
	{ id: ItemId.LeopardEel, quality: 'Leopard', species: 'Eel', description: '', buy: 6620, sell: 1540, f: 186 },
	{ id: ItemId.GreaterEel, quality: 'Greater', species: 'Eel', description: '', buy: 14600, sell: 2570, f: 323 },

	{ id: ItemId.MottledFlounder, quality: 'Mottled', species: 'Flounder', description: '', buy: 0, sell: 150, f: 0 },
	{ id: ItemId.OliveFlounder, quality: 'Olive', species: 'Flounder', description: '', buy: 0, sell: 195, f: 6 },
	{ id: ItemId.StoneFlounder, quality: 'Stone', species: 'Flounder', description: '', buy: 0, sell: 240, f: 12 },
	{ id: ItemId.ArrowtoothFlounder, quality: 'Arrowtooth', species: 'Flounder', description: '', buy: 0, sell: 315, f: 22 },
	{ id: ItemId.FloweryFlounder, quality: 'Flowery', species: 'Flounder', description: '', buy: 0, sell: 615, f: 62 },
	{ id: ItemId.JellyFlounder, quality: 'Jelly', species: 'Flounder', description: '', buy: 0, sell: 1030, f: 118 },
	{ id: ItemId.PeacockFlounder, quality: 'Peacock', species: 'Flounder', description: '', buy: 0, sell: 1440, f: 172 },
	{ id: ItemId.StarryFlounder, quality: 'Starry', species: 'Flounder', description: '', buy: 0, sell: 2240, f: 279 },
	{ id: ItemId.BlackFlounder, quality: 'Black', species: 'Flounder', description: '', buy: 0, sell: 3690, f: 472 },

	{ id: ItemId.YellowtailGurnard, quality: 'Yellowtail', species: 'Gurnard', description: '', buy: 663, sell: 255, f: 14 },
	{ id: ItemId.BigeyeGurnard, quality: 'Bigeye', species: 'Gurnard', description: '', buy: 1710, sell: 570, f: 56 },
	{ id: ItemId.BlackfinGurnard, quality: 'Blackfin', species: 'Gurnard', description: '', buy: 3560, sell: 990, f: 112 },
	{ id: ItemId.ShinyGurnard, quality: 'Shiny', species: 'Gurnard', description: '', buy: 5650, sell: 1380, f: 164 },
	{ id: ItemId.TorpedoGurnard, quality: 'Torpedo', species: 'Gurnard', description: '', buy: 10700, sell: 2100, f: 261 },
	{ id: ItemId.GrandGurnard, quality: 'Grand', species: 'Gurnard', description: '', buy: 22500, sell: 3360, f: 428 },

	{ id: ItemId.SandyPufferfish, quality: 'Sandy', species: 'Pufferfish', description: '', buy: 0, sell: 180, f: 4 },
	{ id: ItemId.LonelyPufferfish, quality: 'Lonely', species: 'Pufferfish', description: '', buy: 0, sell: 225, f: 10 },
	{ id: ItemId.LemonPufferfish, quality: 'Lemon', species: 'Pufferfish', description: '', buy: 0, sell: 285, f: 18 },
	{ id: ItemId.FigureEightPufferfish, quality: 'Figure', species: 'Eight Pufferfish', description: '', buy: 0, sell: 465, f: 42 },
	{ id: ItemId.RubberPufferfish, quality: 'Rubber', species: 'Pufferfish', description: '', buy: 0, sell: 885, f: 98 },
	{ id: ItemId.MerryOldPufferfish, quality: 'Merry', species: 'Old Pufferfish', description: '', buy: 0, sell: 1270, f: 150 },
	{ id: ItemId.HightidePufferfish, quality: 'Hightide', species: 'Pufferfish', description: '', buy: 0, sell: 1770, f: 217 },
	{ id: ItemId.UnicornPufferfish, quality: 'Unicorn', species: 'Pufferfish', description: '', buy: 0, sell: 3030, f: 384 },

	{ id: ItemId.CommonRay, quality: 'Common', species: 'Ray', description: '', buy: 1570, sell: 525, f: 50 },
	{ id: ItemId.DimRay, quality: 'Dim', species: 'Ray', description: '', buy: 2800, sell: 825, f: 90 },
	{ id: ItemId.SoldierRay, quality: 'Soldier', species: 'Ray', description: '', buy: 3950, sell: 1070, f: 123 },
	{ id: ItemId.NimbleRay, quality: 'Nimble', species: 'Ray', description: '', buy: 5360, sell: 1340, f: 159 },
	{ id: ItemId.TigerRay, quality: 'Tiger', species: 'Ray', description: '', buy: 7120, sell: 1620, f: 197 },
	{ id: ItemId.BroadRay, quality: 'Broad', species: 'Ray', description: '', buy: 13300, sell: 2430, f: 305 },
	{ id: ItemId.JadeRay, quality: 'Jade', species: 'Ray', description: '', buy: 21200, sell: 3220, f: 410 },
	{ id: ItemId.PrimeRay, quality: 'Prime', species: 'Ray', description: '', buy: 28200, sell: 3820, f: 490 },

	// Passive Fish
	{ id: ItemId.LeatheryBream, quality: 'Leathery', species: 'Bream', description: '', buy: 15600, sell: 5400, f: 48 },
	{ id: ItemId.BlackBream, quality: 'Black', species: 'Bream', description: '', buy: 23000, sell: 7000, f: 87 },
	{ id: ItemId.SurfBream, quality: 'Surf', species: 'Bream', description: '', buy: 42800, sell: 11600, f: 120 },
	{ id: ItemId.GracefulBream, quality: 'Graceful', species: 'Bream', description: '', buy: 55600, sell: 13600, f: 167 },
	{ id: ItemId.CreamBream, quality: 'Cream', species: 'Bream', description: '', buy: 73800, sell: 16800, f: 194 },
	{ id: ItemId.GiltHeadedBream, quality: 'Gilt-Headed', species: 'Bream', description: '', buy: 113000, sell: 21000, f: 296 },
	{ id: ItemId.BrilliantBream, quality: 'Brilliant', species: 'Bream', description: '', buy: 210000, sell: 32600, f: 402 },

	{ id: ItemId.CommonDab, quality: 'Common', species: 'Dab', description: '', buy: 9600, sell: 3600, f: 20 },
	{ id: ItemId.SmallDab, quality: 'Small', species: 'Dab', description: '', buy: 15000, sell: 5000, f: 53 },
	{ id: ItemId.DancingDab, quality: 'Dancing', species: 'Dab', description: '', buy: 27800, sell: 8200, f: 93 },
	{ id: ItemId.SummerDab, quality: 'Summer', species: 'Dab', description: '', buy: 35400, sell: 9600, f: 129 },
	{ id: ItemId.SmoothDab, quality: 'Smooth', species: 'Dab', description: '', buy: 55600, sell: 13600, f: 161 },
	{ id: ItemId.ScreamingAbDab, quality: 'Screaming', species: 'Ab Dab', description: '', buy: 77400, sell: 17200, f: 208 },
	{ id: ItemId.SpottedDab, quality: 'Spotted', species: 'Dab', description: '', buy: 153000, sell: 27400, f: 314 },
	{ id: ItemId.MightyDab, quality: 'Mighty', species: 'Dab', description: '', buy: 226000, sell: 32800, f: 446 },

	{ id: ItemId.RidgedHerring, quality: 'Ridged', species: 'Herring', description: '', buy: 12800, sell: 4600, f: 34 },
	{ id: ItemId.GrayHerring, quality: 'Gray', species: 'Herring', description: '', buy: 26600, sell: 8600, f: 67 },
	{ id: ItemId.RedHerring, quality: 'Red', species: 'Herring', description: '', buy: 43200, sell: 12, f: 110 },
	{ id: ItemId.OchreHerring, quality: 'Ochre', species: 'Herring', description: '', buy: 53000, sell: 13600, f: 148 },
	{ id: ItemId.WishfulHerring, quality: 'Wishful', species: 'Herring', description: '', buy: 75600, sell: 17600, f: 180 },
	{ id: ItemId.HopeHerring, quality: 'Hope', species: 'Herring', description: '', buy: 110000, sell: 21200, f: 270 },
	{ id: ItemId.ShimmeringHerring, quality: 'Shimmering', species: 'Herring', description: '', buy: 194000, sell: 311400, f: 375 },

	{ id: ItemId.SpottedMackibut, quality: 'Spotted', species: 'Mackibut', description: '', buy: 900, sell: 3400, f: 25 },
	{ id: ItemId.WhitespotMackibut, quality: 'Whitespot', species: 'Mackibut', description: '', buy: 14400, sell: 4800, f: 59 },
	{ id: ItemId.BlueJackMackibut, quality: 'Blue', species: 'Jack Mackibut', description: '', buy: 20400, sell: 6200, f: 81 },
	{ id: ItemId.StreakedMackibut, quality: 'Streaked', species: 'Mackibut', description: '', buy: 26600, sell: 7400, f: 115 },
	{ id: ItemId.HorseMackibut, quality: 'Horse', species: 'Mackibut', description: '', buy: 38600, sell: 10200, f: 134 },
	{ id: ItemId.ChubMackibut, quality: 'Chub', species: 'Mackibut', description: '', buy: 44800, sell: 11200, f: 156 },
	{ id: ItemId.BlueMackibut, quality: 'Blue', species: 'Mackibut', description: '', buy: 65200, sell: 15200, f: 189 },
	{ id: ItemId.WahooMackibut, quality: 'Wahoo', species: 'Mackibut', description: '', buy: 89000, sell: 17800, f: 252 },
	{ id: ItemId.EtwayMackibut, quality: 'Etway', species: 'Mackibut', description: '', buy: 149000, sell: 25400, f: 340 },
	{ id: ItemId.KingMackibut, quality: 'King', species: 'Mackibut', description: '', buy: 188000, sell: 28600, f: 419 },

	{ id: ItemId.IdleSturlet, quality: 'Idle', species: 'Sturlet', description: '', buy: 12000, sell: 4200, f: 45 },
	{ id: ItemId.FlatheadSturlet, quality: 'Flathead', species: 'Sturlet', description: '', buy: 17800, sell: 5600, f: 79 },
	{ id: ItemId.StripedSturlet, quality: 'Striped', species: 'Sturlet', description: '', buy: 22400, sell: 6600, f: 95 },
	{ id: ItemId.ThickLippedSturlet, quality: 'Thick-Lipped', species: 'Sturlet', description: '', buy: 29600, sell: 8000, f: 126 },
	{ id: ItemId.WanderingSturlet, quality: 'Wandering', species: 'Sturlet', description: '', buy: 44000, sell: 11000, f: 153 },
	{ id: ItemId.SilverSturlet, quality: 'Silver', species: 'Sturlet', description: '', buy: 52400, sell: 12200, f: 183 },
	{ id: ItemId.WesternSturlet, quality: 'Western', species: 'Sturlet', description: '', buy: 70200, sell: 15600, f: 200 },
	{ id: ItemId.BlondSturlet, quality: 'Blond', species: 'Sturlet', description: '', buy: 101000, sell: 19200, f: 287 },
	{ id: ItemId.BulletSturlet, quality: 'Bullet', species: 'Sturlet', description: '', buy: 176000, sell: 27600, f: 393 },
	{ id: ItemId.MightySturlet, quality: 'Mighty', species: 'Sturlet', description: '', buy: 226000, sell: 31200, f: 481 },

	{ id: ItemId.BallanWraddock, quality: 'Ballan', species: 'Wraddock', description: '', buy: 0, sell: 4600, f: 31 },
	{ id: ItemId.GoldsinnyWraddock, quality: 'Goldsinny', species: 'Wraddock', description: '', buy: 0, sell: 5800, f: 65 },
	{ id: ItemId.CuckooWraddock, quality: 'Cuckoo', species: 'Wraddock', description: '', buy: 0, sell: 10000, f: 101 },
	{ id: ItemId.CleanerWraddock, quality: 'Cleaner', species: 'Wraddock', description: '', buy: 0, sell: 13400, f: 142 },
	{ id: ItemId.OrnateWraddock, quality: 'Ornate', species: 'Wraddock', description: '', buy: 0, sell: 17200, f: 170 },
	{ id: ItemId.SixLineWraddock, quality: 'Six', species: 'Line Wraddock', description: '', buy: 0, sell: 20200, f: 243 },
	{ id: ItemId.CorkwingWraddock, quality: 'Corkwing', species: 'Wraddock', description: '', buy: 0, sell: 30800, f: 358 },
	{ id: ItemId.MegaWraddock, quality: 'Mega', species: 'Wraddock', description: '', buy: 0, sell: 35000, f: 463 },

	// Venture Fish
	{ id: ItemId.OrangeLobster, quality: 'Orange', species: 'Lobster', description: '', buy: 769, sell: 531, f: 39 },
	{ id: ItemId.StripedLobster, quality: 'Striped', species: 'Lobster', description: '', buy: 1710, sell: 1140, f: 107 },
	{ id: ItemId.GhostLobster, quality: 'Ghost', species: 'Lobster', description: '', buy: 2620, sell: 1750, f: 175 },
	{ id: ItemId.CunningLobster, quality: 'Cunning', species: 'Lobster', description: '', buy: 4720, sell: 3150, f: 331 },

	{ id: ItemId.BeachOyster, quality: 'Beach', species: 'Oyster', description: '', buy: 2500, sell: 1670, f: 73 },
	{ id: ItemId.SignalOyster, quality: 'Signal', species: 'Oyster', description: '', buy: 4320, sell: 2880, f: 140 },
	{ id: ItemId.SpeckledOyster, quality: 'Speckled', species: 'Oyster', description: '', buy: 6630, sell: 4420, f: 226 },
	{ id: ItemId.RustyOyster, quality: 'Rusty', species: 'Oyster', description: '', buy: 12300, sell: 8220, f: 437 },
];

export const fish: Item[] = rawFish.map((fish) => {
	return {
		...fish,
		buyValue: fish.buy,
		sellValue: fish.sell,
		name: fish.species,
		fullName: `${fish.quality} ${fish.species}`,
		episodes: [EpisodeId.Hopeport],
		professions: [{ profession: ProfessionId.Fisher, level: fish.f }],
	};
});
