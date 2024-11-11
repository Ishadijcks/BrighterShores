<script lang="ts">
	import type { PageData } from './$types';
	import type { Profession } from '$lib/model/profession/Profession';
	import ActionTable from '$lib/components/ActionTable.svelte';
	import ActionsPerLevelChart from '$lib/components/ActionsPerLevelChart.svelte';

	let { data }: { data: PageData } = $props();

	const profession: Profession = $derived(data.profession);
</script>

<ActionTable actions={profession.actions} />

<ActionsPerLevelChart id={data.profession.id} />
