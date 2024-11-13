<script lang="ts">
	import type { ItemAmount } from '$lib/model/item/ItemAmount';
	import { ItemRepository } from '$lib/data/repository/ItemRepository';
	import ItemNameDisplay from '$lib/components/ItemNameDisplay.svelte';

	interface Props {
		itemAmount: ItemAmount;
	}

	let { itemAmount }: Props = $props();

	const item = $derived(ItemRepository.getItem(itemAmount.id));
</script>

<span>
	{#if itemAmount.amount !== 1}
		{itemAmount.amount}x
	{/if}
	<ItemNameDisplay {item} />
</span>
