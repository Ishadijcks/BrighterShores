// prettier-ignore
import type { Foragee } from '$lib/data/profession/forager/items/Foragees';
import type { Item } from '$lib/model/item/Item';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ItemId } from '$lib/data/game/ItemId';

// prettier-ignore
export const rawPassiveForagees: Foragee[] = [
	{id: ItemId.BeadletAnemone, quality: 'Beadlet', name: 'Anemone', description: '', buy: 0, sell: 0 },
	{id: ItemId.DahliaAnemone, quality: 'Dahlia', name: 'Anemone', description: '', buy: 0, sell: 0 },
	{id: ItemId.SnakelocksAnemone, quality: 'Snakelocks', name: 'Anemone', description: '', buy: 0, sell: 0 },
	{id: ItemId.ElegantAnemone, quality: 'Elegant', name: 'Anemone', description: '', buy: 0, sell: 0 },
	{id: ItemId.StrawberryAnemone, quality: 'Strawberry', name: 'Anemone', description: '', buy: 0, sell: 0 },

	{id: ItemId.RedandBlackFeather, quality: 'Red', name: 'and Black Feather', description: '', buy: 0, sell: 0 },
	{id: ItemId.WhiteFluffyFeather, quality: 'White', name: 'Fluffy Feather', description: '', buy: 0, sell: 0 },
	{id: ItemId.ShimmeringFeather, quality: 'Shimmering', name: 'Feather', description: '', buy: 0, sell: 0 },

	{id: ItemId.GrayLouse, quality: 'Gray', name: 'Louse', description: '', buy: 0, sell: 0},
	{id: ItemId.ReclusiveLouse, quality: 'Reclusive', name: 'Louse', description: '', buy: 0, sell: 0 },
	{id: ItemId.ShadowLouse, quality: 'Shadow', name: 'Louse', description: '', buy: 0, sell: 0 },

	{id: ItemId.BlotchyMaggots, quality: 'Blotchy', name: 'Maggots', description: '', buy: 0, sell: 0 },
	{id: ItemId.PastyMaggots, quality: 'Pasty', name: 'Maggots', description: '', buy: 0, sell: 0 },
	{id: ItemId.IckyMaggots, quality: 'Icky', name: 'Maggots', description: '', buy: 0, sell: 0 },
	{id: ItemId.RosyMaggots, quality: 'Rosy', name: 'Maggots', description: '', buy: 0, sell: 0 },
	{id: ItemId.WrithingMaggots, quality: 'Writhing', name: 'Maggots', description: '', buy: 0, sell: 0 },

	{id: ItemId.BrownMothWing, quality: 'Brown', name: 'Moth Wing', description: '', buy: 0, sell: 0 },
	{id: ItemId.LacyMothWing, quality: 'Lacy', name: 'Moth Wing', description: '', buy: 0, sell: 0 },
	{id: ItemId.EyedMothWing, quality: 'Eyed', name: 'Moth Wing', description: '', buy: 0, sell: 0 },

	{id: ItemId.RustyScrapMetal, quality: 'Rusty', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.TarnishedScrapMetal, quality: 'Tarnished', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.TwistedScrapMetal, quality: 'Twisted', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.MiscellaneousScrapMetal, quality: 'Miscellaneous', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.InterestingScrapMetal, quality: 'Interesting', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.SubstantialScrapMetal, quality: 'Substantial', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.SplendidScrapMetal, quality: 'Splendid', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },
	{id: ItemId.ValuableScrapMetal, quality: 'Valuable', name: 'Scrap Metal', description: '', buy: 0, sell: 0 },

	{id: ItemId.WartySeaPotato, quality: 'Warty', name: 'Sea Potato', description: '', buy: 0, sell: 0 },
	{id: ItemId.BlueSeaPotato, quality: 'Blue', name: 'Sea Potato', description: '', buy: 0, sell: 0 },
	{id: ItemId.SleekSeaPotato, quality: 'Sleek', name: 'Sea Potato', description: '', buy: 0, sell: 0 },

	{id: ItemId.SlippySeaSlug, quality: 'Slippy', name: 'Sea Slug', description: '', buy: 0, sell: 0 },
	{id: ItemId.GunkySeaSlug, quality: 'Gunky', name: 'Sea Slug', description: '', buy: 0, sell: 0 },
	{id: ItemId.JuicySeaSlug, quality: 'Juicy', name: 'Sea Slug', description: '', buy: 0, sell: 0 },
	{id: ItemId.BlackSeaSlug, quality: 'Black', name: 'Sea Slug', description: '', buy: 0, sell: 0 },
	{id: ItemId.BrownSeaSlug, quality: 'Brown', name: 'Sea Slug', description: '', buy: 0, sell: 0 },

	{id: ItemId.SoftShimmerbean, quality: 'Soft', name: 'Shimmerbean', description: '', buy: 0, sell: 0 },
	{id: ItemId.GlowShimmerbean, quality: 'Glow', name: 'Shimmerbean', description: '', buy: 0, sell: 0 },
	{id: ItemId.DazzleShimmerbean, quality: 'Dazzle', name: 'Shimmerbean', description: '', buy: 0, sell: 0 },

	{id: ItemId.BristleSpinseed, quality: 'Bristle', name: 'Spinseed', description: '', buy: 0, sell: 0 },
	{id: ItemId.WingSpinseed, quality: 'Wing', name: 'Spinseed', description: '', buy: 0, sell: 0 },
	{id: ItemId.WhirlSpinseed, quality: 'Whirl', name: 'Spinseed', description: '', buy: 0, sell: 0 },

	{id: ItemId.DitchSprey, quality: 'Ditch', name: 'Sprey', description: '', buy: 0, sell: 0 },
	{id: ItemId.GravelSprey, quality: 'Gravel', name: 'Sprey', description: '', buy: 0, sell: 0 },
	{id: ItemId.BalkSprey, quality: 'Balk', name: 'Sprey', description: '', buy: 0, sell: 0 },
	{id: ItemId.SentinelSprey, quality: 'Sentinel', name: 'Sprey', description: '', buy: 0, sell: 0 },
	{id: ItemId.DukeSprey, quality: 'Duke', name: 'Sprey', description: '', buy: 0, sell: 0 },
];

export const passiveForagees: Item[] = rawPassiveForagees.map((item) => {
	return {
		quality: item.quality,
		name: item.name,
		fullName: `${item.quality} ${item.name}`,
		description: item.description,
		professions: [],
		id: item.id,
		episodes: [EpisodeId.Hopeport],
		buyValue: item.buy,
		sellValue: item.sell,
		// shops: [ShopId.HideStall],
		// storages: [StorageType.HidesBank],
	};
});
