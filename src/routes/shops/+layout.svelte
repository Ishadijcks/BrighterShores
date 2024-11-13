<script lang="ts">
	import { base } from '$app/paths';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { ShopRepository } from '$lib/data/repository/ShopRepository.js';

	const shops = $derived(ShopRepository.shops);

	let { children } = $props();
</script>

<AppBar>
	<div class="flex flex-row flex-wrap justify-center">
		{#each shops as shop}
			<a href="{base}/shops/{shop.name}">
				<div class="flex flex-col items-center p-2">
					<span class="text-sm">{shop.name}</span>
				</div>
			</a>
		{/each}
	</div>
</AppBar>

<div class="p-4">
	{@render children()}
</div>
