<script lang="ts">
	import type { Item } from '$lib/model/item/Item';

	interface Props {
		item: Item;
	}

	let { item }: Props = $props();
</script>

{#if item.quality && item.name}
	<span class="text-primary-900-100">{item.quality}</span>
	<span>{item.name}</span>
{:else}
	<span>{item.fullName}</span>
{/if}
