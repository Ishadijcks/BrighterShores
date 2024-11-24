import { json } from '@sveltejs/kit';
import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';

export function GET() {
	return json(EpisodeRepository.episodes);
}
