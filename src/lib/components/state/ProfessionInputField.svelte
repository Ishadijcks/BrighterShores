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

<div class="input-group w-80 grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
	<div class="input-group-cell preset-tonal-surface">
		<div class="w-42 flex flex-row items-center space-x-2">
			<ProfessionIcon id={profession.id} />
			<span>{profession.name}</span>
			<span>({getLevel(state.profession[profession.id])})</span>
		</div>
	</div>
	<input type="number" bind:value={state.profession[profession.id]} />
</div>
