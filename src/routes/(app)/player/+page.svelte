<script lang="ts">
	import ProfessionInputTable from '$lib/components/state/ProfessionInputTable.svelte';
	import { calculateTotalLevel } from '$lib/calculations/ProfessionCalculator';
	import { getContext } from 'svelte';
	import type { LocalStore } from '$lib/util/LocalStore.svelte.js';
	import type { State } from '$lib/state/State';

	const state = getContext<LocalStore<State>>('state')?.value;

	const totalLevel = $derived(calculateTotalLevel(state));
</script>

<div class="flex flex-col items-center space-y-8">
	<h4 class="type-scale-4">Total Level: {totalLevel}</h4>
	<ProfessionInputTable></ProfessionInputTable>
</div>
