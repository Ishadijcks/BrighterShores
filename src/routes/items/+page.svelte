<script lang="ts">
	import { ItemRepository } from '$lib/data/repository/ItemRepository';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import LevelRequirementsDisplay from '$lib/components/LevelRequirementsDisplay.svelte';
	import EpisodeIcon from '$lib/components/EpisodeIcon.svelte';
	import { canUseItem, type State } from '$lib/state/State';
	import { getContext } from 'svelte';
	import type { LocalStore } from '$lib/util/LocalStore.svelte';

	const items = $derived(ItemRepository.items);

	const state = getContext<LocalStore<State>>('state')?.value;
</script>

<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Item</th>
				<th>Description</th>
				<th>Ep</th>
				<th>Professions</th>
				<th>Buy</th>
				<th>Sell</th>
			</tr>
		</thead>
		<tbody class="hover:[&>tr]:preset-tonal-primary">
			{#each items as item}
				{@const canUse = canUseItem(state, item)}
				<tr class={canUse ? '' : ''}>
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
						<div class="flex flex-row justify-center space-x-2">
							{#each item.episodes ?? [] as episode}
								<EpisodeIcon id={episode} />
							{/each}
						</div>
					</td>
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
				<td colspan="5">Total</td>
				<td class="text-right">{items.length} Items</td>
			</tr>
		</tfoot>
	</table>
</div>
