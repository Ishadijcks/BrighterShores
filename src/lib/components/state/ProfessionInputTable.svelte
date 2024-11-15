<script lang="ts">
	import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';
	import EpisodeIcon from '$lib/components/EpisodeIcon.svelte';
	import ProfessionInputField from '$lib/components/state/ProfessionInputField.svelte';

	const episodes = $derived(EpisodeRepository.episodes);
</script>

<div class="flex flex-col space-y-8">
	{#each episodes as episode}
		<div class="flex flex-col space-y-2">
			<div class="flex flex-row items-center justify-center space-x-1">
				<EpisodeIcon id={episode.id}></EpisodeIcon>
				<span>{episode.name}</span>
			</div>

			<div class="flex flex-row justify-center space-x-4">
				{#each episode.professions as professionId}
					<ProfessionInputField id={professionId} />
				{/each}
			</div>
		</div>
	{/each}
</div>
