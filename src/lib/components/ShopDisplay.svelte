<script lang="ts">
	import type { Npc } from '$lib/model/world/Npc';
	import { NpcRepository } from '$lib/data/repository/NpcRepository';
	import { ItemRepository } from '$lib/data/repository/ItemRepository';
	import type { Shop } from '$lib/model/world/Shop';
	import type { Item } from '$lib/model/item/Item';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import ItemNameDisplay from '$lib/components/ItemNameDisplay.svelte';

	interface Props {
		shop: Shop;
	}

	let { shop }: Props = $props();

	const owner: Npc = $derived(NpcRepository.getNpc(shop.owner));

	const keys: string[] = $derived(Object.keys(shop.items));
	const items: Item[][] = $derived(Object.values(shop.items).map((ids) => ids.map((id) => ItemRepository.getItem(id))));
</script>

<p>{shop.name} is a shop run by {owner.name}</p>

{#each keys as key, index}
	<div class="table-wrap">
		<table class="table">
			<thead>
				<tr>
					<th>{key}</th>
					<th>Buy</th>
					<th>Sell</th>
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
					<td colspan="4">Total</td>
					<td class="text-right">{items[index].length} Items</td>
				</tr>
			</tfoot>
		</table>
	</div>
{/each}
