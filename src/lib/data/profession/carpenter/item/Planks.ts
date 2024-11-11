import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ShopId } from '$lib/model/shops/ShopId';
import { StorageType } from '$lib/model/storage/StorageType';

interface Plank {
	name: string;
	description: string;
	id: ItemId;
	c: number;
	b: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
export const rawPlanks: Plank[] = [
	{ id: ItemId.CoarseAshPlank, name: 'Coarse Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseOakPole, name: 'Coarse Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarsePinePole, name: 'Coarse Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseHickoryPole, name: 'Coarse Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseJuniperStave, name: 'Coarse Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarsePoplarPole, name: 'Coarse Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseSuavePole, name: 'Coarse Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.CoarseYewPole, name: 'Coarse Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedAshPlank, name: 'Rugged Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedOakPole, name: 'Rugged Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedPinePole, name: 'Rugged Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedHickoryPole, name: 'Rugged Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedJuniperStave, name: 'Rugged Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedPoplarPole, name: 'Rugged Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedSuavePole, name: 'Rugged Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.RuggedYewPole, name: 'Rugged Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageAshPlank, name: 'Average Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageOakPole, name: 'Average Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AveragePinePole, name: 'Average Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageHickoryPole, name: 'Average Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageJuniperStave, name: 'Average Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AveragePoplarPole, name: 'Average Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageSuavePole, name: 'Average Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.AverageYewPole, name: 'Average Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineAshPlank, name: 'Fine Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineOakPole, name: 'Fine Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FinePinePole, name: 'Fine Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineHickoryPole, name: 'Fine Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineJuniperStave, name: 'Fine Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FinePoplarPole, name: 'Fine Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineSuavePole, name: 'Fine Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.FineYewPole, name: 'Fine Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyAshPlank, name: 'Sturdy Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyOakPole, name: 'Sturdy Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyPinePole, name: 'Sturdy Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyHickoryPole, name: 'Sturdy Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyJuniperStave, name: 'Sturdy Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyPoplarPole, name: 'Sturdy Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdySuavePole, name: 'Sturdy Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.SturdyYewPole, name: 'Sturdy Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectAshPlank, name: 'Perfect Ash Plank', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectOakPole, name: 'Perfect Oak Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectPinePole, name: 'Perfect Pine Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectHickoryPole, name: 'Perfect Hickory Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectJuniperStave, name: 'Perfect Juniper Stave', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectPoplarPole, name: 'Perfect Poplar Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectSuavePole, name: 'Perfect Suave Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },
	{ id: ItemId.PerfectYewPole, name: 'Perfect Yew Pole', description: '', buyValue: 0, sellValue: 0, c: 0, b: 0 },

];

export const planks: Item[] = rawPlanks.map((h) => {
	return {
		name: h.name,
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
