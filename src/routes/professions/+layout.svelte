<script lang="ts">
	import { base } from '$app/paths';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository.js';
	import ProfessionIcon from '$lib/components/ProfessionIcon.svelte';

	const professions = $derived(ProfessionRepository.professions);

	let { children } = $props();
</script>

<AppBar>
	<div class="flex flex-row flex-wrap justify-center">
		{#each professions as profession}
			<a href="{base}/professions/{profession.name}">
				<div class="flex flex-col items-center p-2">
					<ProfessionIcon id={profession.id} />
					<span class="text-sm">{profession.name}</span>
				</div>
			</a>
		{/each}
	</div>
</AppBar>

<div class="flex flex-col items-center p-4">
	<div class="w-3/4">
		{@render children()}
	</div>
</div>
