import { json } from '@sveltejs/kit';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import type { ProfessionId } from '$lib/data/game/ProfessionId';

export function GET({ params }) {
	return json(ProfessionRepository.getProfession(('/' + params.profession) as ProfessionId));
}
