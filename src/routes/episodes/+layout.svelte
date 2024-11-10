<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import EpisodeIcon from '$lib/components/EpisodeIcon.svelte';
	import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';

	const episodes = $derived(EpisodeRepository.episodes);

	let { children } = $props();
</script>

<AppBar>
	<div class="flex flex-row flex-wrap justify-center">
		{#each episodes as episode}
			<a href="/episodes/{episode.name}">
				<div class="flex flex-col items-center p-2">
					<EpisodeIcon id={episode.id} />
					<span class="text-sm">{episode.name}</span>
				</div>
			</a>
		{/each}
	</div>
</AppBar>

<div class="p-4">
	{@render children()}
</div>
