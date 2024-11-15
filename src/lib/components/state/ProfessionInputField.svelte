<script lang="ts">
	import type { ProfessionId } from '$lib/data/game/ProfessionId';
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
	import { getLevel } from '$lib/model/profession/LevelData';
	import ProfessionIcon from '$lib/components/ProfessionIcon.svelte';
	import { getContext } from 'svelte';
	import type { LocalStore } from '$lib/util/LocalStore.svelte';
	import type { State } from '$lib/state/State';

	interface Props {
		id: ProfessionId;
	}

	let { id }: Props = $props();

	const state = getContext<LocalStore<State>>('state')?.value;

	const profession = $derived(ProfessionRepository.getProfession(id));
</script>

<div class="flex w-80 flex-col">
	<div class="input-group grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
		<div class="input-group-cell preset-tonal-surface">
			<div class="w-42 flex flex-row items-center space-x-2">
				<ProfessionIcon id={profession.id} />
				<span>{profession.name}</span>
				<span>({getLevel(state.profession[profession.id])})</span>
			</div>
		</div>
		<input type="number" bind:value={state.profession[profession.id]} />
	</div>

	<div class="table-wrap">
		<table class="table">
			<tbody>
				{#each profession.tools ?? [] as tool}
					<tr>
						<td>
							<span class="text-xs">{tool.name}</span>
						</td>
						<td>
							<div class="input-group w-24 grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
								<input class="input" type="number" bind:value={state.tool[tool.id].tier} />
								<div class="input-group-cell">✨</div>
							</div>
						</td>
						<td>
							<div class="input-group w-24 grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
								<input class="input" type="number" bind:value={state.tool[tool.id].enhancements} />
								<div class="input-group-cell">❗</div>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
