<script lang="ts">
	import { ItemRepository } from '$lib/data/repository/ItemRepository';
	import type { Shop } from '$lib/model/world/Shop';
	import type { Item } from '$lib/model/item/Item';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import ItemNameDisplay from '$lib/components/ItemNameDisplay.svelte';

	interface Props {
		shop: Shop;
	}

	let { shop }: Props = $props();

	const keys: string[] = $derived(Object.keys(shop.items));
	const items: Item[][] = $derived(Object.values(shop.items).map((ids) => ids.map((id) => ItemRepository.getItem(id))));
</script>

<div class="flex w-full flex-col items-center space-y-8">
	{#each keys as key, index}
		<table class="table w-1/2">
			<thead>
				<tr>
					<th class="w-48">{key}</th>
					<th class="w-24">Buy</th>
					<th class="w-24">Sell</th>
				</tr>
			</thead>
			<tbody class="hover:[&>tr]:preset-tonal-primary">
				{#each items[index] as item}
					<tr>
						<td>
							<ItemNameDisplay {item}></ItemNameDisplay>
						</td>
						<td>
							<CurrencyDisplay amount={item.buyValue} />
						</td>
						<td>
							<CurrencyDisplay amount={item.sellValue} />
						</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2">Total</td>
					<td class="text-right">{items[index].length} Items</td>
				</tr>
			</tfoot>
		</table>
	{/each}
</div>
