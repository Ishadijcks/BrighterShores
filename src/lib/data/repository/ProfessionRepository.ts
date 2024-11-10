import type { Profession } from '$lib/model/profession/Profession';
import type { ProfessionId } from '$lib/data/game/ProfessionId';
import { leatherworker } from '$lib/data/profession/leatherworker/Leatherworker';
import { armorer } from '$lib/data/profession/armorer/Armorer';
import { merchant } from '$lib/data/profession/merchant/Merchant';

export class ProfessionRepository {
	public static professions: Profession[] = [
		leatherworker,
		armorer,
		merchant,
	];

	public static getProfession(id: ProfessionId): Profession {
		const profession = this.professions.find((profession) => profession.id === id);
		if (profession === undefined) {
			throw new Error(`Could not find profession with id '${id}'`);
		}
		return profession;
	}
}
