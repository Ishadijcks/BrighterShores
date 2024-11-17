<script lang="ts">
	import type { Action } from '$lib/model/profession/Action';
	import ExpsDisplay from '$lib/components/ExpsDisplay.svelte';
	import ItemAmountsDisplay from '$lib/components/ItemAmountsDisplay.svelte';
	import LevelRequirementsDisplay from '$lib/components/LevelRequirementsDisplay.svelte';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import { calculateBuyValue, calculateProfit, calculateSellValue } from '$lib/util/Pricing';
	import { calculateExperiences } from '$lib/calculations/ActionCalculator';
	import { getContext } from 'svelte';
	import type { LocalStore } from '$lib/util/LocalStore.svelte';
	import type { State } from '$lib/state/State';

	interface Props {
		actions: Action[];
	}

	let { actions }: Props = $props();

	let hasInput: boolean = $derived(actions.some((a) => a.input.length > 0));
	let hasOutput: boolean = $derived(actions.some((a) => a.output.length > 0));

	const state = getContext<LocalStore<State>>('state')?.value;
</script>

<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Level</th>
				{#if hasInput}
					<th>Input</th>
					<th>Cost</th>
				{/if}
				{#if hasOutput}
					<th>Output</th>
					<th>Value</th>
				{/if}
				<th>Experience</th>
				<th>Your Exp</th>
				{#if hasInput && hasOutput}
					<th>Profit</th>
				{/if}
			</tr>
		</thead>
		<tbody class="hover:[&>tr]:preset-tonal-primary">
			{#each actions as action}
				<tr>
					<td>
						<LevelRequirementsDisplay reqs={action.requirements} />
					</td>
					{#if hasInput}
						<td>
							<ItemAmountsDisplay items={action.input} />
						</td>
						<td>
							<CurrencyDisplay amount={calculateBuyValue(action.input)} />
						</td>
					{/if}
					{#if hasOutput}
						<td>
							<ItemAmountsDisplay items={action.output} />
						</td>
						<td>
							<CurrencyDisplay amount={calculateSellValue(action.output)} />
						</td>
					{/if}
					<td>
						<ExpsDisplay exps={action.experience} />
					</td>
					<td>
						<ExpsDisplay exps={calculateExperiences(state, action)} />
					</td>
					{#if hasInput && hasOutput}
						<td>
							<CurrencyDisplay amount={calculateProfit(action)} highlightSign={true} />
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<!-- Lol -->
				<td colspan={6 - (hasInput ? 0 : 2) - (hasOutput ? 0 : 2) - (hasInput && hasOutput ? 0 : 1)}>Total</td>
				<td class="text-right">{actions.length} Actions</td>
			</tr>
		</tfoot>
	</table>
</div>
