import type { EntryGenerator } from './$types';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';

export const entries: EntryGenerator = () => {
	return ProfessionRepository.professions.map((p) => {
		return { profession: p.id.slice(1) };
	});
};

export const prerender = true;
