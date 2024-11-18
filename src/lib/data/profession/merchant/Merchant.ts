import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import { trades } from '$lib/data/profession/merchant/Trading';

export const merchant: Profession = {
	id: ProfessionId.Merchant,
	name: 'Merchant',
	icon: 'profession/merchant.png',
	actions: [...trades],
	passives: [],
};
