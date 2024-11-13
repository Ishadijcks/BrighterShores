import type { Npc } from '$lib/model/world/Npc';
import type { NpcId } from '$lib/data/world/NpcId';
import { kevin } from '$lib/data/episode/hopeport/npc/Kevin';

export class NpcRepository {
	// TODO(@Isha): Get from episodes? Or the other way around?
	public static npcs: Npc[] = [kevin];

	public static getNpc(id: NpcId): Npc {
		const npc = this.npcs.find((npc) => npc.id === id);
		if (npc === undefined) {
			throw new Error(`Could not find npc with id '${id}'`);
		}
		return npc;
	}

	public static getNpcByName(name: string): Npc {
		const npc = this.npcs.find((npc) => npc.name === name);
		if (npc === undefined) {
			throw new Error(`Could not find npc with name '${name}'`);
		}
		return npc;
	}
}
