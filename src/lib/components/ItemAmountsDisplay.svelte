<script lang="ts">
	import type { ItemAmount } from '$lib/model/item/ItemAmount';
	import ItemAmountDisplay from '$lib/components/ItemAmountDisplay.svelte';

	interface Props {
		items: ItemAmount[];
	}

	let { items }: Props = $props();
</script>

{#each items as item}
	<ItemAmountDisplay itemAmount={item} />
{/each}
