import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const watchman: Profession = {
	id: ProfessionId.Watchman,
	name: 'Watchman',
	icon: 'profession/watchman.png',
	actions: [],
	passives: []
};
