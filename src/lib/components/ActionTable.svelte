<script lang="ts">
	import type { Action } from '$lib/model/profession/Action';
	import ExpsDisplay from '$lib/components/ExpsDisplay.svelte';
	import ItemAmountsDisplay from '$lib/components/ItemAmountsDisplay.svelte';
	import LevelRequirementsDisplay from '$lib/components/LevelRequirementsDisplay.svelte';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import { calculateBuyValue, calculateProfit, calculateSellValue } from '$lib/util/Pricing';

	interface Props {
		actions: Action[];
	}

	let { actions }: Props = $props();
</script>

<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Level</th>
				<th>Input</th>
				<th>Cost</th>
				<th>Output</th>
				<th>Value</th>
				<th>Experience</th>
				<th>Profit</th>
			</tr>
		</thead>
		<tbody class="hover:[&>tr]:preset-tonal-primary">
			{#each actions as action}
				<tr>
					<td><LevelRequirementsDisplay reqs={action.requirements} /></td>
					<td><ItemAmountsDisplay items={action.input} /></td>
					<td><CurrencyDisplay amount={calculateBuyValue(action.input)} /></td>

					<td><ItemAmountsDisplay items={action.output} /></td>
					<td><CurrencyDisplay amount={calculateSellValue(action.output)} /></td>

					<td><ExpsDisplay exps={action.experience} /></td>
					<td><CurrencyDisplay amount={calculateProfit(action)} /></td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="6">Total</td>
				<td class="text-right">{actions.length} Actions</td>
			</tr>
		</tfoot>
	</table>
</div>
