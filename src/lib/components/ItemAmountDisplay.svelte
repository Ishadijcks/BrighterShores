<script lang="ts">
	import type { ItemAmount } from '$lib/model/item/ItemAmount';
	import { ItemRepository } from '$lib/data/repository/ItemRepository';

	interface Props {
		itemAmount: ItemAmount;
	}

	let { itemAmount }: Props = $props();

	const item = $derived(ItemRepository.getItem(itemAmount.id));
</script>

<span>{itemAmount.amount}x {item.name}</span>
