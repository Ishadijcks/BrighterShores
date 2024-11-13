import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/data/world/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';
import { rawSawmillActions } from '$lib/data/profession/carpenter/Sawmill';

interface Log {
	quality: string;
	log: string;
	description: string;
	id: ItemId;
	buy: number;
	sell: number;
}

// prettier-ignore
export const rawLogs: Log[] = [
	{ id: ItemId.CoarseAshLog, quality: 'Coarse', log: 'Ash Log', description: '', buy: 450, sell: 180 },
	{ id: ItemId.RuggedAshLog, quality: 'Rugged', log: 'Ash Log', description: '', buy: 889, sell: 342 },
	{ id: ItemId.AverageAshLog, quality: 'Average', log: 'Ash Log', description: '', buy: 2620, sell: 819 },
	{ id: ItemId.FineAshLog, quality: 'Fine', log: 'Ash Log', description: '', buy: 4810, sell: 1300 },
	{ id: ItemId.SturdyAshLog, quality: 'Sturdy', log: 'Ash Log', description: '', buy: 7860, sell: 1830 },
	{ id: ItemId.PerfectAshLog, quality: 'Perfect', log: 'Ash Log', description: '', buy: 18500, sell: 3200 },

	{ id: ItemId.CoarseHickoryLog, quality: 'Coarse', log: 'Hickory Log', description: '', buy: 617, sell: 247 },
	{ id: ItemId.RuggedHickoryLog, quality: 'Rugged', log: 'Hickory Log', description: '', buy: 1380, sell: 494 },
	{ id: ItemId.AverageHickoryLog, quality: 'Average', log: 'Hickory Log', description: '', buy: 3390, sell: 1030 },
	{ id: ItemId.FineHickoryLog, quality: 'Fine', log: 'Hickory Log', description: '', buy: 6160, sell: 1580 },
	{ id: ItemId.SturdyHickoryLog, quality: 'Sturdy', log: 'Hickory Log', description: '', buy: 9720, sell: 2160 },
	{ id: ItemId.PerfectHickoryLog, quality: 'Perfect', log: 'Hickory Log', description: '', buy: 25200, sell: 3950 },

	{ id: ItemId.CoarseJuniperLog, quality: 'Coarse', log: 'Juniper Log', description: '', buy: 741, sell: 285 },
	{ id: ItemId.RuggedJuniperLog, quality: 'Rugged', log: 'Juniper Log', description: '', buy: 1790, sell: 618 },
	{ id: ItemId.AverageJuniperLog, quality: 'Average', log: 'Juniper Log', description: '', buy: 4020, sell: 1150 },
	{ id: ItemId.FineJuniperLog, quality: 'Fine', log: 'Juniper Log', description: '', buy: 6720, sell: 1680 },
	{ id: ItemId.SturdyJuniperLog, quality: 'Sturdy', log: 'Juniper Log', description: '', buy: 12800, sell: 2570 },
	{ id: ItemId.PerfectJuniperLog, quality: 'Perfect', log: 'Juniper Log', description: '', buy: 29500, sell: 4350 },

	{ id: ItemId.CoarseOakLog, quality: 'Coarse', log: 'Oak Log', description: '', buy: 495, sell: 198 },
	{ id: ItemId.RuggedOakLog, quality: 'Rugged', log: 'Oak Log', description: '', buy: 1020, sell: 378 },
	{ id: ItemId.AverageOakLog, quality: 'Average', log: 'Oak Log', description: '', buy: 2760, sell: 864 },
	{ id: ItemId.FineOakLog, quality: 'Fine', log: 'Oak Log', description: '', buy: 5200, sell: 1370 },
	{ id: ItemId.SturdyOakLog, quality: 'Sturdy', log: 'Oak Log', description: '', buy: 8080, sell: 1880 },
	{ id: ItemId.PerfectOakLog, quality: 'Perfect', log: 'Oak Log', description: '', buy: 20100, sell: 3350 },

	{ id: ItemId.CoarsePineLog, quality: 'Coarse', log: 'Pine Log', description: '', buy: 570, sell: 228 },
	{ id: ItemId.RuggedPineLog, quality: 'Rugged', log: 'Pine Log', description: '', buy: 1200, sell: 447 },
	{ id: ItemId.AveragePineLog, quality: 'Average', log: 'Pine Log', description: '', buy: 3260, sell: 988 },
	{ id: ItemId.FinePineLog, quality: 'Fine', log: 'Pine Log', description: '', buy: 5730, sell: 1510 },
	{ id: ItemId.SturdyPineLog, quality: 'Sturdy', log: 'Pine Log', description: '', buy: 9060, sell: 2060 },
	{ id: ItemId.PerfectPineLog, quality: 'Perfect', log: 'Pine Log', description: '', buy: 22900, sell: 3700 },

	{ id: ItemId.CoarsePoplarLog, quality: 'Coarse', log: 'Poplar Log', description: '', buy: 790, sell: 304 },
	{ id: ItemId.RuggedPoplarLog, quality: 'Rugged', log: 'Poplar Log', description: '', buy: 2080, sell: 694 },
	{ id: ItemId.AveragePoplarLog, quality: 'Average', log: 'Poplar Log', description: '', buy: 4200, sell: 1200 },
	{ id: ItemId.FinePoplarLog, quality: 'Fine', log: 'Poplar Log', description: '', buy: 7170, sell: 1750 },
	{ id: ItemId.SturdyPoplarLog, quality: 'Sturdy', log: 'Poplar Log', description: '', buy: 13900, sell: 2730 },
	{ id: ItemId.PerfectPoplarLog, quality: 'Perfect', log: 'Poplar Log', description: '', buy: 31500, sell: 4510 },

	{ id: ItemId.CoarseSuaveLog, quality: 'Coarse', log: 'Suave Log', description: '', buy: 795, sell: 306 },
	{ id: ItemId.RuggedSuaveLog, quality: 'Rugged', log: 'Suave Log', description: '', buy: 2100, sell: 702 },
	{ id: ItemId.AverageSuaveLog, quality: 'Average', log: 'Suave Log', description: '', buy: 4350, sell: 1210 },
	{ id: ItemId.FineSuaveLog, quality: 'Fine', log: 'Suave Log', description: '', buy: 7180, sell: 1710 },
	{ id: ItemId.SturdySuaveLog, quality: 'Sturdy', log: 'Suave Log', description: '', buy: 15100, sell: 2810 },
	{ id: ItemId.PerfectSuaveLog, quality: 'Perfect', log: 'Suave Log', description: '', buy: 31800, sell: 4420 },

	{ id: ItemId.CoarseYewLog, quality: 'Coarse', log: 'Yew Log', description: '', buy: 1260, sell: 488 },
	{ id: ItemId.RuggedYewLog, quality: 'Rugged', log: 'Yew Log', description: '', buy: 3470, sell: 1120 },
	{ id: ItemId.AverageYewLog, quality: 'Average', log: 'Yew Log', description: '', buy: 6990, sell: 1890 },
	{ id: ItemId.FineYewLog, quality: 'Fine', log: 'Yew Log', description: '', buy: 11200, sell: 2680 },
	{ id: ItemId.SturdyYewLog, quality: 'Sturdy', log: 'Yew Log', description: '', buy: 24900, sell: 4460 },
	{ id: ItemId.PerfectYewLog, quality: 'Perfect', log: 'Yew Log', description: '', buy: 51000, sell: 6900 },

];

export const logs: Item[] = rawLogs.map((h) => {
	return {
		fullName: `${h.quality} ${h.log}`,
		name: h.log,
		quality: h.quality,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Woodcutter, level: 0 },
			{ profession: ProfessionId.Carpenter, level: rawSawmillActions.find((s) => s.log === h.id)?.level ?? Infinity },
		],
		id: h.id,
		episodes: [EpisodeId.Hopeforest],
		buyValue: h.buy,
		sellValue: h.sell,
		shops: [ShopId.GwensLumber],
		storages: [StorageType.LumberBank],
	};
});
