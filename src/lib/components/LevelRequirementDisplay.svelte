<script lang="ts">
	import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
	import ProfessionIcon from '$lib/components/ProfessionIcon.svelte';

	interface Props {
		req: LevelRequirement;
	}

	let { req }: Props = $props();
</script>

<div class="flex flex-row items-center space-x-1">
	<ProfessionIcon id={req.profession}></ProfessionIcon>
	<span>{req.level}</span>
</div>
