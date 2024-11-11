import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shop/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';

interface Log {
	name: string;
	description: string;
	id: ItemId;
	w: number;
	c: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawLogs: Log[] = [
	{ id: ItemId.CoarseAshLog, name: 'Coarse Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarseOakLog, name: 'Coarse Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarsePineLog, name: 'Coarse Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarseHickoryLog, name: 'Coarse Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarseJuniperLog, name: 'Coarse Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarsePoplarLog, name: 'Coarse Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarseSuaveLog, name: 'Coarse Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.CoarseYewLog, name: 'Coarse Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedAshLog, name: 'Rugged Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedOakLog, name: 'Rugged Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedPineLog, name: 'Rugged Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedHickoryLog, name: 'Rugged Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedJuniperLog, name: 'Rugged Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedPoplarLog, name: 'Rugged Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedSuaveLog, name: 'Rugged Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.RuggedYewLog, name: 'Rugged Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageAshLog, name: 'Average Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageOakLog, name: 'Average Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AveragePineLog, name: 'Average Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageHickoryLog, name: 'Average Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageJuniperLog, name: 'Average Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AveragePoplarLog, name: 'Average Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageSuaveLog, name: 'Average Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.AverageYewLog, name: 'Average Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineAshLog, name: 'Fine Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineOakLog, name: 'Fine Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FinePineLog, name: 'Fine Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineHickoryLog, name: 'Fine Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineJuniperLog, name: 'Fine Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FinePoplarLog, name: 'Fine Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineSuaveLog, name: 'Fine Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.FineYewLog, name: 'Fine Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyAshLog, name: 'Sturdy Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyOakLog, name: 'Sturdy Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyPineLog, name: 'Sturdy Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyHickoryLog, name: 'Sturdy Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyJuniperLog, name: 'Sturdy Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyPoplarLog, name: 'Sturdy Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdySuaveLog, name: 'Sturdy Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.SturdyYewLog, name: 'Sturdy Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectAshLog, name: 'Perfect Ash Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectOakLog, name: 'Perfect Oak Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectPineLog, name: 'Perfect Pine Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectHickoryLog, name: 'Perfect Hickory Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectJuniperLog, name: 'Perfect Juniper Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectPoplarLog, name: 'Perfect Poplar Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectSuaveLog, name: 'Perfect Suave Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },
	{ id: ItemId.PerfectYewLog, name: 'Perfect Yew Log', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },

];

export const logs: Item[] = rawLogs.map((h) => {
	return {
		name: h.name,
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
