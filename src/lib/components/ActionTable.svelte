<script lang="ts">
	import type { Action } from '$lib/model/profession/Action';
	import ExpsDisplay from '$lib/components/ExpsDisplay.svelte';
	import ItemAmountsDisplay from '$lib/components/ItemAmountsDisplay.svelte';
	import LevelRequirementsDisplay from '$lib/components/LevelRequirementsDisplay.svelte';
	import CurrencyDisplay from '$lib/components/CurrencyDisplay.svelte';
	import { calculateBuyValue, calculateProfit, calculateSellValue } from '$lib/util/Pricing';
	import { calculateExperiences, hasExpModifiers } from '$lib/calculations/ActionCalculator';
	import { getContext } from 'svelte';
	import type { LocalStore } from '$lib/util/LocalStore.svelte';
	import type { State } from '$lib/state/State';
	import type { ProfessionId } from '$lib/data/game/ProfessionId';

	interface Props {
		actions: Action[];
		professionId: ProfessionId;
	}

	let { actions, professionId }: Props = $props();

	let hasInput: boolean = $derived(actions.some((a) => a.input.length > 0));
	let hasOutput: boolean = $derived(actions.some((a) => a.output.length > 0));

	const playerState = getContext<LocalStore<State>>('state')?.value;

	const rowIndexHighlights = $state({} as Record<number, boolean>);
	const toggleIndex = (i: number) => (rowIndexHighlights[i] = !rowIndexHighlights[i]);

	let showExpModifier = $state(hasExpModifiers(professionId));
	const showYourExp: boolean = $derived(playerState.config.showYourExp);
	const showValues: boolean = $derived(playerState.config.showValues);
</script>

<div class="flex flex-row space-x-8">
	<label class="flex items-center space-x-2">
		<input class="checkbox" type="checkbox" bind:checked={playerState.config.showValues} />
		<span>Show values</span>
	</label>

	{#if showExpModifier}
		<label class="flex items-center space-x-2">
			<input class="checkbox" type="checkbox" bind:checked={playerState.config.showYourExp} />
			<span>Show your exp</span>
		</label>
	{/if}
</div>
<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Level</th>
				{#if hasInput}
					<th>Input</th>
					{#if showValues}
						<th>Cost</th>
					{/if}
				{/if}
				{#if hasOutput}
					<th>Output</th>
					{#if showValues}
						<th>Value</th>
					{/if}
				{/if}
				<th>{showYourExp && showExpModifier ? 'Your Exp' : 'Experience'}</th>
				{#if hasInput && hasOutput && showValues}
					<th>Profit</th>
				{/if}
			</tr>
		</thead>
		<tbody class="hover:[&>tr]:preset-tonal-primary">
			{#each actions as action, index}
				<tr class={rowIndexHighlights[index] ? '[&&&]:preset-tonal-secondary' : ''} onclick={() => toggleIndex(index)}>
					<td>
						<LevelRequirementsDisplay reqs={action.requirements} />
					</td>
					{#if hasInput}
						<td>
							<ItemAmountsDisplay items={action.input} />
						</td>
						{#if showValues}
							<td>
								<CurrencyDisplay amount={calculateBuyValue(action.input)} />
							</td>
						{/if}
					{/if}
					{#if hasOutput}
						<td>
							<ItemAmountsDisplay items={action.output} />
						</td>
						{#if showValues}
							<td>
								<CurrencyDisplay amount={calculateSellValue(action.output)} />
							</td>
						{/if}
					{/if}
					<td class={showYourExp ? 'text-primary-900-100' : ''}>
						<ExpsDisplay exps={showYourExp ? calculateExperiences(playerState, action) : action.experience} />
					</td>
					{#if hasInput && hasOutput && showValues}
						<td>
							<CurrencyDisplay amount={calculateProfit(action)} highlightSign={true} />
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="100" class="text-right">{actions.length} Actions</td>
			</tr>
		</tfoot>
	</table>
</div>
