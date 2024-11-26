<script lang="ts">
	import type { PageData } from './$types';
	import type { Profession } from '$lib/model/profession/Profession';
	import ActionTable from '$lib/components/ActionTable.svelte';
	import ActionsPerLevelChart from '$lib/components/ActionsPerLevelChart.svelte';
	import PassiveActionTable from '$lib/components/PassiveActionTable.svelte';
	import ProfessionInputField from '$lib/components/state/ProfessionInputField.svelte';
	import TimePerLevelChart from '$lib/components/state/TimePerLevelChart.svelte';

	let { data }: { data: PageData } = $props();

	const profession: Profession = $derived(data.profession);
</script>

<div class="flex flex-col items-center space-y-8">
	<ProfessionInputField id={profession.id} />

	{#key profession}
		<ActionTable professionId={profession.id} actions={profession.actions} />
		{#if profession.passives}
			<PassiveActionTable actions={profession.passives} />
		{/if}
		<div class="flex flex-row">
			<ActionsPerLevelChart id={data.profession.id} />
			<TimePerLevelChart id={data.profession.id} />
		</div>
	{/key}
</div>
