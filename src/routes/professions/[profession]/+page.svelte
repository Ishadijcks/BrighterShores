<script lang="ts">
	import type { PageData } from './$types';
	import type { Profession } from '$lib/model/profession/Profession';
	import ActionTable from '$lib/components/ActionTable.svelte';
	import ActionsPerLevelChart from '$lib/components/ActionsPerLevelChart.svelte';
	import PassiveActionTable from '$lib/components/PassiveActionTable.svelte';
	import ProfessionInputField from '$lib/components/state/ProfessionInputField.svelte';

	let { data }: { data: PageData } = $props();

	const profession: Profession = $derived(data.profession);
</script>

<div class="flex flex-col items-center space-y-8">
	<ProfessionInputField id={profession.id} />

	<ActionTable actions={profession.actions} />
	{#if profession.passives}
		<PassiveActionTable actions={profession.passives} />
	{/if}
	<ActionsPerLevelChart id={data.profession.id} />
</div>
