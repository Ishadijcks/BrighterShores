import type { EntryGenerator } from './$types';
import { json } from '@sveltejs/kit';
import { NpcRepository } from '$lib/data/repository/NpcRepository';
import type { NpcId } from '$lib/data/world/NpcId';

export function GET({ params }) {
	return json(NpcRepository.getNpc(('/' + params.npc) as NpcId));
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	return NpcRepository.npcs.map((i) => {
		return {
			npc: i.id.slice(1),
		};
	});
};
