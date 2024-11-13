<script lang="ts">
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
	import ProfessionIcon from '$lib/components/ProfessionIcon.svelte';

	import { EpisodeRepository } from '$lib/data/repository/EpisodeRepository';
	import { getLevel } from '$lib/model/profession/LevelData';
	import EpisodeIcon from '$lib/components/EpisodeIcon.svelte';

	import { getContext } from 'svelte';
	import type { LocalStore } from '$lib/util/LocalStore.svelte';
	import type { State } from '$lib/state/State';

	const state = getContext<LocalStore<State>>('state')?.value;
	const episodes = $derived(EpisodeRepository.episodes);
</script>

<div class="flex flex-col space-y-8">
	{#each episodes as episode}
		<div class="flex flex-col space-y-1">
			<div class="flex flex-row items-center justify-center space-x-1">
				<EpisodeIcon id={episode.id}></EpisodeIcon>
				<span>{episode.name}</span>
			</div>

			<div class="flex flex-row justify-center space-x-4">
				{#each episode.professions as professionId}
					{@const profession = ProfessionRepository.getProfession(professionId)}

					<div class="input-group w-72 grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
						<div class="input-group-cell preset-tonal-surface">
							<div class="flex w-36 flex-row items-center space-x-2">
								<ProfessionIcon id={profession.id} />
								<span>{profession.name}</span>
								<span>({getLevel(state.profession[profession.id])})</span>
							</div>
						</div>
						<input type="number" bind:value={state.profession[profession.id]} />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
