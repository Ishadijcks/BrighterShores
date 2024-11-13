<script lang="ts">
	import type { PageData } from './$types';
	import type { Shop } from '$lib/model/world/Shop';
	import ShopDisplay from '$lib/components/ShopDisplay.svelte';

	let { data }: { data: PageData } = $props();

	const shop: Shop = $derived(data.shop);
</script>

<div class="flex flex-col space-y-8">
	<ShopDisplay {shop} />
</div>
