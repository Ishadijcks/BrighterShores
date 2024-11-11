import type { Profession } from '$lib/model/profession/Profession';
import type { ProfessionId } from '$lib/data/game/ProfessionId';
import { leatherworker } from '$lib/data/profession/leatherworker/Leatherworker';
import { armorer } from '$lib/data/profession/armorer/Armorer';
import { merchant } from '$lib/data/profession/merchant/Merchant';
import { fisher } from '$lib/data/profession/fisher/Fisher';
import { gatherer } from '$lib/data/profession/gatherer/Gatherer';
import { alchemist } from '$lib/data/profession/alchemist/Alchemist';
import { scout } from '$lib/data/profession/scout/Scout';
import { forager } from '$lib/data/profession/forager/Forager';
import { woodcutter } from '$lib/data/profession/woodcutter/Woodcutter';
import { carpenter } from '$lib/data/profession/carpenter/Carpenter';
import { minefighter } from '$lib/data/profession/minefighter/Minefighter';
import { bonewright } from '$lib/data/profession/bonewright/Bonewright';
import { miner } from '$lib/data/profession/miner/Miner';
import { blacksmith } from '$lib/data/profession/blacksmith/Blacksmith';
import { stonemason } from '$lib/data/profession/stonemason/Stonemason';
import { watchperson } from '$lib/data/profession/watchperson/Watchperson';
import { detective } from '$lib/data/profession/detective/Detective';
import { chef } from '$lib/data/profession/chef/Chef';
import { guard } from '$lib/data/profession/guard/Guard';

export class ProfessionRepository {
	public static professions: Profession[] = [
		guard,
		chef,
		fisher,
		gatherer,
		alchemist,

		scout,
		forager,
		woodcutter,
		carpenter,

		minefighter,
		bonewright,
		miner,
		blacksmith,
		stonemason,

		watchperson,
		detective,
		leatherworker,
		merchant,

		armorer,
	];

	public static getProfession(id: ProfessionId): Profession {
		const profession = this.professions.find((profession) => profession.id === id);
		if (profession === undefined) {
			throw new Error(`Could not find profession with id '${id}'`);
		}
		return profession;
	}

	public static getProfessionByName(name: string): Profession {
		const profession = this.professions.find((profession) => profession.name === name);
		if (profession === undefined) {
			throw new Error(`Could not find profession with name '${name}'`);
		}
		return profession;
	}
}
