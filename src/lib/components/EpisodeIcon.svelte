<script lang="ts">
	import { base } from '$app/paths';

	import type { EpisodeId } from '$lib/data/game/EpisodeId';
	import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';

	interface Props {
		id: EpisodeId;
	}

	let { id }: Props = $props();

	const episode = EpisodeRepository.getEpisode(id);
</script>

<img class="h-4 w-4" src="{base}/images/{episode.icon}" alt={episode.name} />
