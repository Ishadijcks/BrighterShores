<script lang="ts">
	import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
	import LevelRequirementDisplay from '$lib/components/LevelRequirementDisplay.svelte';

	interface Props {
		reqs: LevelRequirement[];
	}

	let { reqs }: Props = $props();
</script>

<div class="flex flex-row space-x-2">
	{#each reqs as req}
		<LevelRequirementDisplay {req} />&nbsp;
	{/each}
</div>
