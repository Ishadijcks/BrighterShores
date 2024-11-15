import { ProfessionId } from '$lib/data/game/ProfessionId';
import { ToolId } from '$lib/data/tool/ToolId';
import type { Item } from '$lib/model/item/Item';
import { getLevel } from '$lib/model/profession/LevelData';

export interface State {
	profession: Record<ProfessionId, number>;
	tool: Record<ToolId, { tier: number; enhancements: number }>;
}

export const createDefaultState = (): State => {
	// TODO(@Isha): Add iteration over enums instead of manual declaration
	return {
		profession: {
			[ProfessionId.Guard]: 0,
			[ProfessionId.Chef]: 0,
			[ProfessionId.Fisher]: 0,
			[ProfessionId.Forager]: 0,
			[ProfessionId.Alchemist]: 0,

			[ProfessionId.Scout]: 0,
			[ProfessionId.Gatherer]: 0,
			[ProfessionId.Woodcutter]: 0,
			[ProfessionId.Carpenter]: 0,

			[ProfessionId.Minefighter]: 0,
			[ProfessionId.Bonewright]: 0,
			[ProfessionId.Miner]: 0,
			[ProfessionId.Blacksmith]: 0,
			[ProfessionId.Stonemason]: 0,

			[ProfessionId.Watchperson]: 0,
			[ProfessionId.Detective]: 0,
			[ProfessionId.Leatherworker]: 0,
			[ProfessionId.Merchant]: 0,

			[ProfessionId.Armorer]: 0,
		},
		tool: {
			[ToolId.UNKNOWN]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.None]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.FishingSpear]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.FishingRod]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.CastNet]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.LobsterPot]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.OysterNet]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Trowel]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.PondNet]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Secateurs]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.HandRake]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Sickle]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Hatchet]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.HandSaw]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.TwoPersonSaw]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.TreeLoppers]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Pickaxe]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.GoldPanningSieve]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Handcuffs]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.MagnifyingGlass]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.Binoculars]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolId.WantedPosters]: {
				tier: 0,
				enhancements: 0,
			},
		},
	};
};

export const canUseItem = (state: State, item: Item): boolean => {
	return item.professions.every((p) => getLevel(state.profession[p.profession]) >= p.level);
};
