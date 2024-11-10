import { ProfessionId } from '$lib/data/game/ProfessionId';

export interface State {
	profession: Record<ProfessionId, number>;
}

export const state: State = {
	profession: {
		[ProfessionId.Guard]: 0,
		[ProfessionId.Chef]: 0,
		[ProfessionId.Fisherman]: 0,
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

		[ProfessionId.Watchman]: 0,
		[ProfessionId.Detective]: 0,
		[ProfessionId.Leatherworker]: 0,
		[ProfessionId.Merchant]: 0,

		[ProfessionId.Armorer]: 0,
	},
};
