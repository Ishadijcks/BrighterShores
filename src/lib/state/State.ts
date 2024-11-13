import { ProfessionId } from '$lib/data/game/ProfessionId';
import { ToolType } from '$lib/data/tool/ToolType';

export interface State {
	profession: Record<ProfessionId, number>;
	tools: Record<ToolType, { tier: number; enhancements: number }>;
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
			[ProfessionId.BlackSmith]: 0,
			[ProfessionId.Stonemason]: 0,

			[ProfessionId.Watchperson]: 0,
			[ProfessionId.Detective]: 0,
			[ProfessionId.Leatherworker]: 0,
			[ProfessionId.Merchant]: 0,

			[ProfessionId.Armorer]: 0,
		},
		tools: {
			[ToolType.UNKNOWN]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolType.FishingSpear]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolType.FishingRod]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolType.CastNet]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolType.LobsterPot]: {
				tier: 0,
				enhancements: 0,
			},
			[ToolType.OysterNet]: {
				tier: 0,
				enhancements: 0,
			},
		},
	};
};
