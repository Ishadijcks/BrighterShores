import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { tanningActions } from '$lib/data/profession/leatherworker/Tanning';
import { leatherworkerPassives } from '$lib/data/profession/leatherworker/LeatherworkerPassives';

export const leatherworker: Profession = {
	id: ProfessionId.Leatherworker,
	name: 'Leatherworker',
	icon: 'profession/leatherworker.png',
	actions: [...tanningActions],
	passives: [...leatherworkerPassives],
};
