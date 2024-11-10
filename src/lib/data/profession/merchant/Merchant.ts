import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const merchant: Profession = {
	id: ProfessionId.Merchant,
	name: 'Merchant',
	icon: 'profession/merchant.png',
	actions: [],
	passives: []
};
