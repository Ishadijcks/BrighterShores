import { json } from '@sveltejs/kit';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';

export function GET() {
	return json(ProfessionRepository.professions);
}

export const prerender = true;
