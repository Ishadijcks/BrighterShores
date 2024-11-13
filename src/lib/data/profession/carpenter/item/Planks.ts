import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shop/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';

interface Plank {
	quality: string;
	plank: string;
	description: string;
	id: ItemId;
	c: number;
	b: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawPlanks: Plank[] = [
	{ id: ItemId.CoarseAshPlank, quality: 'Coarse', plank: 'Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseOakPole, quality: 'Coarse', plank: 'Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarsePinePole, quality: 'Coarse', plank: 'Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseHickoryPole, quality: 'Coarse', plank: 'Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseJuniperStave, quality: 'Coarse', plank: 'Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarsePoplarPole, quality: 'Coarse', plank: 'Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseSuavePole, quality: 'Coarse', plank: 'Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseYewPole, quality: 'Coarse', plank: 'Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedAshPlank, quality: 'Rugged', plank: 'Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedOakPole, quality: 'Rugged', plank: 'Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedPinePole, quality: 'Rugged', plank: 'Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedHickoryPole, quality: 'Rugged', plank: 'Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedJuniperStave, quality: 'Rugged', plank: 'Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedPoplarPole, quality: 'Rugged', plank: 'Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedSuavePole, quality: 'Rugged', plank: 'Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedYewPole, quality: 'Rugged', plank: 'Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageAshPlank, quality: 'Average', plank: 'Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageOakPole, quality: 'Average', plank: 'Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AveragePinePole, quality: 'Average', plank: 'Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageHickoryPole, quality: 'Average', plank: 'Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageJuniperStave, quality: 'Average', plank: 'Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AveragePoplarPole, quality: 'Average', plank: 'Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageSuavePole, quality: 'Average', plank: 'Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageYewPole, quality: 'Average', plank: 'Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineAshPlank, quality: 'Fine', plank: 'Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineOakPole, quality: 'Fine', plank: 'Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FinePinePole, quality: 'Fine', plank: 'Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineHickoryPole, quality: 'Fine', plank: 'Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineJuniperStave, quality: 'Fine', plank: 'Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FinePoplarPole, quality: 'Fine', plank: 'Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineSuavePole, quality: 'Fine', plank: 'Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineYewPole, quality: 'Fine', plank: 'Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyAshPlank, quality: 'Sturdy', plank: 'Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyOakPole, quality: 'Sturdy', plank: 'Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyPinePole, quality: 'Sturdy', plank: 'Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyHickoryPole, quality: 'Sturdy', plank: 'Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyJuniperStave, quality: 'Sturdy', plank: 'Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyPoplarPole, quality: 'Sturdy', plank: 'Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdySuavePole, quality: 'Sturdy', plank: 'Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyYewPole, quality: 'Sturdy', plank: 'Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectAshPlank, quality: 'Perfect', plank: 'Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectOakPole, quality: 'Perfect', plank: 'Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectPinePole, quality: 'Perfect', plank: 'Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectHickoryPole, quality: 'Perfect', plank: 'Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectJuniperStave, quality: 'Perfect', plank: 'Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectPoplarPole, quality: 'Perfect', plank: 'Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectSuavePole, quality: 'Perfect', plank: 'Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectYewPole, quality: 'Perfect', plank: 'Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },

];

export const planks: Item[] = rawPlanks.map((h) => {
	return {
		fullName: h.plank,
		quality: h.quality,
		name: h.plank,
		description: h.description,
		professions: [
			{ profession: ProfessionId.Carpenter, level: h.c },
			{ profession: ProfessionId.Bonewright, level: h.b },
		],
		id: h.id,
		episodes: [EpisodeId.Hopeforest, EpisodeId.MineOfMantuban],
		buyValue: h.buyValue,
		sellValue: h.sellValue,
		shops: [ShopId.TimberMerchant],
		storages: [StorageType.TimberBank],
	};
});
