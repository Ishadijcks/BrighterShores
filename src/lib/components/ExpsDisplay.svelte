<script lang="ts">
	import ExpDisplay from '$lib/components/ExpDisplay.svelte';
	import type { Experience } from '$lib/model/profession/Experience';

	interface Props {
		exps: Experience[];
	}

	let { exps }: Props = $props();

</script>

{#each exps as exp}
	<ExpDisplay {exp} />
{/each}
