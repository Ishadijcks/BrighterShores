import type { ProfessionId } from '$lib/data/game/ProfessionId';
import type { Action } from '$lib/model/profession/Action';
import type { Tool } from '$lib/model/tool/Tool';
import type { Venture } from '$lib/model/profession/Venture';
import type { Passive } from '$lib/model/profession/Passive';

export interface Profession {
	id: ProfessionId;
	name: string;
	icon: string;
	tools?: Tool[];
	actions: Action[];
	ventures?: Venture[];
	passives?: Passive[];
}
