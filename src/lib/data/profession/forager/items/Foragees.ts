import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { EpisodeId } from '$lib/data/game/EpisodeId';

export interface Foragee {
	quality: string;
	name: string;
	description: string;
	id: ItemId;
	// TODO(@Isha): Grab from actions instead?
	lvl?: number;
	buy: number;
	sell: number;
}

// prettier-ignore
export const rawForagees: Foragee[] = [
	{ id: ItemId.MauveBellplant, quality: 'Mauve', name: 'Bellplant', description: '', buy: 0, sell: 320 },
	{ id: ItemId.CrimsonBellplant, quality: 'Crimson', name: 'Bellplant', description: '', buy: 0, sell: 0 },
	{ id: ItemId.StarshineBellplant, quality: 'Starshine', name: 'Bellplant', description: '', buy: 0, sell: 0 },


	{ id: ItemId.GreenHogberries, quality: 'Green', name: 'Hogberries', description: '', buy: 0, sell: 490 },
	{ id: ItemId.PurpleHogberries, quality: 'Purple', name: 'Hogberries', description: '', buy: 0, sell: 0 },
	{ id: ItemId.RedHogberries, quality: 'Red', name: 'Hogberries', description: '', buy: 0, sell: 0 },


	{ id: ItemId.BrownKelp, quality: 'Brown', name: 'Kelp', description: '', buy: 0, sell: 200 },
	{ id: ItemId.GreenKelp, quality: 'Green', name: 'Kelp', description: '', buy: 0, sell: 670 },
	{ id: ItemId.SilverKelp, quality: 'Silver', name: 'Kelp', description: '', buy: 0, sell: 0 },

	{ id: ItemId.CommonLimpet, quality: 'Common', name: 'Limpet', description: '', buy: 0, sell: 610 },
	{ id: ItemId.TigerLimpet, quality: 'Tiger', name: 'Limpet', description: '', buy: 0, sell: 0 },
	{ id: ItemId.IrongripLimpet, quality: 'Irongrip', name: 'Limpet', description: '', buy: 0, sell: 0 },

	{ id: ItemId.HugeMonumentPiece, quality: 'Huge', name: 'Monument Piece', description: '', buy: 0, sell: 255 },
	{ id: ItemId.HeftyMonumentPiece, quality: 'Hefty', name: 'Monument Piece', description: '', buy: 0, sell: 387 },
	{ id: ItemId.SubstantialMonumentPiece, quality: 'Substantial', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.ChunkyMonumentPiece, quality: 'Chunky', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.LargeMonumentPiece, quality: 'Large', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.BigMonumentPiece, quality: 'Big', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.MediumMonumentPiece, quality: 'Medium', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.AverageMonumentPiece, quality: 'Average', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.FairMonumentPiece, quality: 'Fair', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.MiddlingMonumentPiece, quality: 'Middling', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.SmallMonumentPiece, quality: 'Small', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.WeenyMonumentPiece, quality: 'Weeny', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.TeenyMonumentPiece, quality: 'Teeny', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.MinuteMonumentPiece, quality: 'Minute', name: 'Monument Piece', description: '', buy: 0, sell: 0 },
	{ id: ItemId.MinisculeMonumentPiece, quality: 'Miniscule', name: 'Monument Piece', description: '', buy: 0, sell: 0 },

	{ id: ItemId.WhiteNettle, quality: 'White', name: 'Nettle', description: '', buy: 0, sell: 0 },
	{ id: ItemId.BloodNettle, quality: 'Blood', name: 'Nettle', description: '', buy: 0, sell: 0 },

	{ id: ItemId.WhitePeriwinkle, quality: 'White', name: 'Periwinkle', description: '', buy: 0, sell: 180 },
	{ id: ItemId.BluePeriwinkle, quality: 'Blue', name: 'Periwinkle', description: '', buy: 0, sell: 0 },
	{ id: ItemId.StripedPeriwinkle, quality: 'Striped', name: 'Periwinkle', description: '', buy: 0, sell: 0 },

	{ id: ItemId.TangledPondWeed, quality: 'Tangled', name: 'Pond Weed', description: '', buy: 0, sell: 225 },
	{ id: ItemId.ReachingPondWeed, quality: 'Reaching', name: 'Pond Weed', description: '', buy: 0, sell: 0 },
	{ id: ItemId.GreenveilPondWeed, quality: 'Greenveil', name: 'Pond Weed', description: '', buy: 0, sell: 0 },


	{ id: ItemId.PiperPotato, quality: 'Piper', name: 'Potato', description: '', buy: 700, sell: 280, lvl: 6 },
	{ id: ItemId.KingPhelwanPotato, quality: 'King Phelwan', name: 'Potato', description: '', buy: 1540, sell: 550, lvl: 18 },
	{ id: ItemId.CalystraPotato, quality: 'Calystra', name: 'Potato', description: '', buy: 3590, sell: 190, lvl: 76 },
	{ id: ItemId.ColawanPotato, quality: 'Colawan', name: 'Potato', description: '', buy: 5960, sell: 1570, lvl: 125 },
	{ id: ItemId.BitterbidePotato, quality: 'Bitterbide', name: 'Potato', description: '', buy: 9280, sell: 2110, lvl: 157 },
	{ id: ItemId.GreengrailPotato, quality: 'Greengrail', name: 'Potato', description: '', buy: 19400, sell: 3410, lvl: 336 },
	{ id: ItemId.GalimeerPotato, quality: 'Galimeer', name: 'Potato', description: '', buy: 30800, sell: 4530, lvl: 464 },


	{ id: ItemId.HornShell, quality: 'Horn', name: 'Shell', description: '', buy: 0, sell: 260 },
	{ id: ItemId.BowlShell, quality: 'Bowl', name: 'Shell', description: '', buy: 0, sell: 0 },
	{ id: ItemId.CrownShell, quality: 'Crown', name: 'Shell', description: '', buy: 0, sell: 0 },

	{ id: ItemId.WrinkledStarfish, quality: 'Wrinkled', name: 'Starfish', description: '', buy: 0, sell: 380 },
	{ id: ItemId.ClingyStarfish, quality: 'Clingy', name: 'Starfish', description: '', buy: 0, sell: 0 },
	{ id: ItemId.BeadedStarfish, quality: 'Beaded', name: 'Starfish', description: '', buy: 0, sell: 0 },

	{ id: ItemId.CreamyWallplant, quality: 'Creamy', name: 'Wallplant', description: '', buy: 0, sell: 165 },
	{ id: ItemId.VibrantWallplant, quality: 'Vibrant', name: 'Wallplant', description: '', buy: 0, sell: 0 },
	{ id: ItemId.ScarletWallplant, quality: 'Scarlet', name: 'Wallplant', description: '', buy: 0, sell: 0 },

	{ id: ItemId.WhiteWaterLily, quality: 'White', name: 'Water Lily', description: '', buy: 0, sell: 360 },
	{ id: ItemId.CopperWaterLily, quality: 'Copper', name: 'Water Lily', description: '', buy: 0, sell: 0 },
	{ id: ItemId.BroadWaterLily, quality: 'Broad', name: 'Water Lily', description: '', buy: 0, sell: 0 },

	{ id: ItemId.BladderWrack, quality: 'Bladder', name: 'Wrack', description: '', buy: 0, sell: 0 },
	{ id: ItemId.SpiralWrack, quality: 'Spiral', name: 'Wrack', description: '', buy: 0, sell: 0 },
];

export const foragees: Item[] = rawForagees.map((item) => {
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
