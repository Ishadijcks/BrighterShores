import type { ProfessionId } from '$lib/data/game/ProfessionId';
import type { Action } from '$lib/model/profession/Action';

export interface Profession {
	id: ProfessionId;
	name: string;
	icon: string;
	actions: Action[];
	passives: [];
}
