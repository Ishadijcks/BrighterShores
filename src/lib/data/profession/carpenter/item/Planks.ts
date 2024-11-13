import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/data/world/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';
import { rawSawmillActions } from '$lib/data/profession/carpenter/Sawmill';

interface Plank {
	quality: string;
	plank: string;
	description: string;
	id: ItemId;
	buy: number;
	sell: number;
}

// prettier-ignore
export const rawPlanks: Plank[] = [
	{ id: ItemId.CoarseAshPlank, quality: 'Coarse', plank: 'Ash Plank', description: '', buy: 392, sell: 157 },
	{ id: ItemId.RuggedAshPlank, quality: 'Rugged', plank: 'Ash Plank', description: '', buy: 756, sell: 291 },
	{ id: ItemId.AverageAshPlank, quality: 'Average', plank: 'Ash Plank', description: '', buy: 2160, sell: 699 },
	{ id: ItemId.FineAshPlank, quality: 'Fine', plank: 'Ash Plank', description: '', buy: 4180, sell: 1130 },
	{ id: ItemId.SturdyAshPlank, quality: 'Sturdy', plank: 'Ash Plank', description: '', buy: 6830, sell: 1590 },
	{ id: ItemId.PerfectAshPlank, quality: 'Perfect', plank: 'Ash Plank', description: '', buy: 16000, sell: 2770 },

	{ id: ItemId.CoarseHickoryPole, quality: 'Coarse', plank: 'Hickory Pole', description: '', buy: 742, sell: 297 },
	{ id: ItemId.RuggedHickoryPole, quality: 'Rugged', plank: 'Hickory Pole', description: '', buy: 1620, sell: 581 },
	{ id: ItemId.AverageHickoryPole, quality: 'Average', plank: 'Hickory Pole', description: '', buy: 4050, sell: 1230 },
	{ id: ItemId.FineHickoryPole, quality: 'Fine', plank: 'Hickory Pole', description: '', buy: 7370, sell: 1890 },
	{ id: ItemId.SturdyHickoryPole, quality: 'Sturdy', plank: 'Hickory Pole', description: '', buy: 12100, sell: 2640 },
	{ id: ItemId.PerfectHickoryPole, quality: 'Perfect', plank: 'Hickory Pole', description: '', buy: 31200, sell: 4810 },

	{ id: ItemId.CoarseJuniperStave, quality: 'Coarse', plank: 'Juniper Stave', description: '', buy: 590, sell: 236 },
	{ id: ItemId.RuggedJuniperStave, quality: 'Rugged', plank: 'Juniper Stave', description: '', buy: 1370, sell: 492 },
	{ id: ItemId.AverageJuniperStave, quality: 'Average', plank: 'Juniper Stave', description: '', buy: 3270, sell: 962 },
	{ id: ItemId.FineJuniperStave, quality: 'Fine', plank: 'Juniper Stave', description: '', buy: 5680, sell: 1420 },
	{ id: ItemId.SturdyJuniperStave, quality: 'Sturdy', plank: 'Juniper Stave', description: '', buy: 10500, sell: 2150 },
	{ id: ItemId.PerfectJuniperStave, quality: 'Perfect', plank: 'Juniper Stave', description: '', buy: 24900, sell: 3670 },

	{ id: ItemId.CoarseOakPole, quality: 'Coarse', plank: 'Oak Pole', description: '', buy: 615, sell: 246 },
	{ id: ItemId.RuggedOakPole, quality: 'Rugged', plank: 'Oak Pole', description: '', buy: 1150, sell: 443 },
	{ id: ItemId.AverageOakPole, quality: 'Average', plank: 'Oak Pole', description: '', buy: 3320, sell: 1040 },
	{ id: ItemId.FineOakPole, quality: 'Fine', plank: 'Oak Pole', description: '', buy: 6460, sell: 1700 },
	{ id: ItemId.SturdyOakPole, quality: 'Sturdy', plank: 'Oak Pole', description: '', buy: 10200, sell: 2340 },
	{ id: ItemId.PerfectOakPole, quality: 'Perfect', plank: 'Oak Pole', description: '', buy: 25000, sell: 4180 },

	{ id: ItemId.CoarsePinePole, quality: 'Coarse', plank: 'Pine Pole', description: '', buy: 685, sell: 274 },
	{ id: ItemId.RuggedPinePole, quality: 'Rugged', plank: 'Pine Pole', description: '', buy: 1350, sell: 503 },
	{ id: ItemId.AveragePinePole, quality: 'Average', plank: 'Pine Pole', description: '', buy: 3820, sell: 1160 },
	{ id: ItemId.FinePinePole, quality: 'Fine', plank: 'Pine Pole', description: '', buy: 6870, sell: 1810 },
	{ id: ItemId.SturdyPinePole, quality: 'Sturdy', plank: 'Pine Pole', description: '', buy: 11200, sell: 2490 },
	{ id: ItemId.PerfectPinePole, quality: 'Perfect', plank: 'Pine Pole', description: '', buy: 28500, sell: 4530 },

	{ id: ItemId.CoarsePoplarPole, quality: 'Coarse', plank: 'Poplar Pole', description: '', buy: 915, sell: 352 },
	{ id: ItemId.RuggedPoplarPole, quality: 'Rugged', plank: 'Poplar Pole', description: '', buy: 2220, sell: 767 },
	{ id: ItemId.AveragePoplarPole, quality: 'Average', plank: 'Poplar Pole', description: '', buy: 4970, sell: 1420 },
	{ id: ItemId.FinePoplarPole, quality: 'Fine', plank: 'Poplar Pole', description: '', buy: 8520, sell: 2080 },
	{ id: ItemId.SturdyPoplarPole, quality: 'Sturdy', plank: 'Poplar Pole', description: '', buy: 16600, sell: 3260 },
	{ id: ItemId.PerfectPoplarPole, quality: 'Perfect', plank: 'Poplar Pole', description: '', buy: 37000, sell: 5370 },

	{ id: ItemId.CoarseSuavePole, quality: 'Coarse', plank: 'Suave Pole', description: '', buy: 954, sell: 367 },
	{ id: ItemId.RuggedSuavePole, quality: 'Rugged', plank: 'Suave Pole', description: '', buy: 2470, sell: 825 },
	{ id: ItemId.AverageSuavePole, quality: 'Average', plank: 'Suave Pole', description: '', buy: 5250, sell: 1460 },
	{ id: ItemId.FineSuavePole, quality: 'Fine', plank: 'Suave Pole', description: '', buy: 8860, sell: 2110 },
	{ id: ItemId.SturdySuavePole, quality: 'Sturdy', plank: 'Suave Pole', description: '', buy: 18700, sell: 3470 },
	{ id: ItemId.PerfectSuavePole, quality: 'Perfect', plank: 'Suave Pole', description: '', buy: 39500, sell: 5490 },

	{ id: ItemId.CoarseYewPole, quality: 'Coarse', plank: 'Yew Pole', description: '', buy: 1220, sell: 471 },
	{ id: ItemId.RuggedYewPole, quality: 'Rugged', plank: 'Yew Pole', description: '', buy: 3240, sell: 1080 },
	{ id: ItemId.AverageYewPole, quality: 'Average', plank: 'Yew Pole', description: '', buy: 6660, sell: 1850 },
	{ id: ItemId.FineYewPole, quality: 'Fine', plank: 'Yew Pole', description: '', buy: 11000, sell: 2640 },
	{ id: ItemId.SturdyYewPole, quality: 'Sturdy', plank: 'Yew Pole', description: '', buy: 24900, sell: 4450 },
	{ id: ItemId.PerfectYewPole, quality: 'Perfect', plank: 'Yew Pole', description: '', buy: 50600, sell: 6850 },

];

export const planks: Item[] = rawPlanks.map((h) => {
	return {
		fullName: h.plank,
		quality: h.quality,
		name: h.plank,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Carpenter, level: rawSawmillActions.find((s) => s.plank === h.id)?.level ?? Infinity },
			{ profession: ProfessionId.Bonewright, level: 0 },
		],
		id: h.id,
		episodes: [EpisodeId.Hopeforest, EpisodeId.MineOfMantuban],
		buyValue: h.buy,
		sellValue: h.sell,
		shops: [ShopId.TimberMerchant],
		storages: [StorageType.TimberBank],
	};
});
