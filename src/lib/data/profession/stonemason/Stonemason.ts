import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const stonemason: Profession = {
	id: ProfessionId.Stonemason,
	name: 'Stonemason',
	icon: 'profession/stonemason.png',
	actions: [],
	passives: []
};
