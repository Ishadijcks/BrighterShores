import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/data/world/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';

interface Log {
	quality: string;
	log: string;
	description: string;
	id: ItemId;
	w: number;
	c: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawLogs: Log[] = [
	{ id: ItemId.CoarseAshLog, quality: 'Coarse', log:'Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedAshLog, quality: 'Rugged', log:'Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageAshLog, quality: 'Average', log:'Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineAshLog, quality: 'Fine', log:'Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyAshLog, quality: 'Sturdy', log:'Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectAshLog, quality: 'Perfect', log:'Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

	{ id: ItemId.CoarseHickoryLog, quality: 'Coarse', log:'Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedHickoryLog, quality: 'Rugged', log:'Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageHickoryLog, quality: 'Average', log:'Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineHickoryLog, quality: 'Fine', log:'Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyHickoryLog, quality: 'Sturdy', log:'Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectHickoryLog, quality: 'Perfect', log:'Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

	{ id: ItemId.CoarseJuniperLog, quality: 'Coarse', log:'Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedJuniperLog, quality: 'Rugged', log:'Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageJuniperLog, quality: 'Average', log:'Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineJuniperLog, quality: 'Fine', log:'Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyJuniperLog, quality: 'Sturdy', log:'Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectJuniperLog, quality: 'Perfect', log:'Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

	{ id: ItemId.CoarseOakLog, quality: 'Coarse', log:'Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedOakLog, quality: 'Rugged', log:'Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageOakLog, quality: 'Average', log:'Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineOakLog, quality: 'Fine', log:'Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyOakLog, quality: 'Sturdy', log:'Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectOakLog, quality: 'Perfect', log:'Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },


	{ id: ItemId.CoarsePineLog, quality: 'Coarse', log:'Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedPineLog, quality: 'Rugged', log:'Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AveragePineLog, quality: 'Average', log:'Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FinePineLog, quality: 'Fine', log:'Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyPineLog, quality: 'Sturdy', log:'Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectPineLog, quality: 'Perfect', log:'Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

	{ id: ItemId.CoarsePoplarLog, quality: 'Coarse', log:'Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedPoplarLog, quality: 'Rugged', log:'Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AveragePoplarLog, quality: 'Average', log:'Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FinePoplarLog, quality: 'Fine', log:'Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyPoplarLog, quality: 'Sturdy', log:'Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectPoplarLog, quality: 'Perfect', log:'Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

	{ id: ItemId.CoarseSuaveLog, quality: 'Coarse', log:'Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedSuaveLog, quality: 'Rugged', log:'Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageSuaveLog, quality: 'Average', log:'Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineSuaveLog, quality: 'Fine', log:'Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdySuaveLog, quality: 'Sturdy', log:'Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectSuaveLog, quality: 'Perfect', log:'Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

	{ id: ItemId.CoarseYewLog, quality: 'Coarse', log:'Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedYewLog, quality: 'Rugged', log:'Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageYewLog, quality: 'Average', log:'Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineYewLog, quality: 'Fine', log:'Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyYewLog, quality: 'Sturdy', log:'Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectYewLog, quality: 'Perfect', log:'Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

];

export const logs: Item[] = rawLogs.map((h) => {
	return {
		fullName: `${h.quality} ${h.log}`,
		name: h.log,
		quality: h.quality,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Woodcutter, level: h.w },
			{ profession: ProfessionId.Carpenter, level: h.c },
		],
		id: h.id,
		episodes: [EpisodeId.Hopeforest],
		buyValue: h.buyValue,
		sellValue: h.sellValue,
		shops: [ShopId.GwensLumber],
		storages: [StorageType.LumberBank],
	};
});
