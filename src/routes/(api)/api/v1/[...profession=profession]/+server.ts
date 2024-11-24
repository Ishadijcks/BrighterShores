import type { EntryGenerator } from './$types';
import { json } from '@sveltejs/kit';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export function GET({ params }) {
	return json(ProfessionRepository.getProfession(('/' + params.profession) as ProfessionId));
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	return ProfessionRepository.professions.map((i) => {
		return {
			profession: i.id.slice(1),
		};
	});
};
