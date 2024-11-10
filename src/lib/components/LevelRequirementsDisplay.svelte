<script lang="ts">
	import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
	import LevelRequirementDisplay from '$lib/components/LevelRequirementDisplay.svelte';

	interface Props {
		reqs: LevelRequirement[];
	}

	let { reqs }: Props = $props();

</script>

{#each reqs as req}
	<LevelRequirementDisplay {req} />&nbsp;
{/each}
