<script lang="ts">
	import { ItemRepository } from '$lib/data/repository/ItemRepository';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import LevelRequirementsDisplay from '$lib/components/LevelRequirementsDisplay.svelte';

	const items = $derived(ItemRepository.items);
</script>

<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Item</th>
				<th>Description</th>
				<th>Professions</th>
				<th>Buy</th>
				<th>Sell</th>
			</tr>
		</thead>
		<tbody class="hover:[&>tr]:preset-tonal-primary">
			{#each items as item}
				<tr>
					<td>
						{#if item.quality && item.name}
							<span class="text-primary-900-100">{item.quality}</span>
							<span>{item.name}</span>
						{:else}
							<span>{item.fullName}</span>
						{/if}
					</td>
					<td>{item.description}</td>
					<td>
						<LevelRequirementsDisplay reqs={item.professions} />
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
				<td colspan="3">Total</td>
				<td class="text-right">{items.length} Items</td>
			</tr>
		</tfoot>
	</table>
</div>
