<script lang="ts">
	import type { EpisodeId } from '$lib/data/game/EpisodeId';
	import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';

	interface Props {
		id: EpisodeId;
	}

	let { id }: Props = $props();

	const episode = EpisodeRepository.getEpisode(id);
</script>

<img class="h-4 w-4" src="/images/{episode.icon}" alt={episode.name} />
