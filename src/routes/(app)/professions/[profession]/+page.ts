import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';

export const load: PageLoad = ({ params }) => {
	try {
		return {
			profession: ProfessionRepository.getProfessionByName(params.profession),
		};
	} catch {
		error(404, 'Not found');
	}
};
