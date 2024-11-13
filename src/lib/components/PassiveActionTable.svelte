<script lang="ts">
	import type { PassiveAction } from '$lib/model/profession/PassiveAction';
	import LevelRequirementDisplay from '$lib/components/LevelRequirementDisplay.svelte';
	import ExpDisplay from '$lib/components/ExpDisplay.svelte';
	import GameIcon from '$lib/components/GameIcon.svelte';

	interface Props {
		actions: PassiveAction[];
	}

	let { actions }: Props = $props();

	// let hasInput: boolean = $derived(actions.some((a) => a.input.length > 0));
	// let hasOutput: boolean = $derived(actions.some((a) => a.output.length > 0));
</script>

<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Level</th>
				<!--{#if hasInput}-->
				<!--	<th>Input</th>-->
				<!--	<th>Cost</th>-->
				<!--{/if}-->
				<!--{#if hasOutput}-->
				<!--	<th>Output</th>-->
				<!--	<th>Value</th>-->
				<!--{/if}-->
				<!--{#if hasInput && hasOutput}-->
				<!--	<th>Profit</th>-->
				<!--{/if}-->
				<th>Action</th>
				<th>Category</th>
				<th>Experience</th>
				<th>Knowledge</th>
			</tr>
		</thead>
		<tbody class="hover:[&>tr]:preset-tonal-primary">
			{#each actions as action}
				<tr>
					<td>
						<LevelRequirementDisplay req={action.lvl} />
					</td>
					<td>{action.activity}</td>
					<td>{action.category}</td>
					<!--{#if hasInput}-->
					<!--	<td>-->
					<!--		<ItemAmountsDisplay items={action.input} />-->
					<!--	</td>-->
					<!--	<td>-->
					<!--		<CurrencyDisplay amount={calculateBuyValue(action.input)} />-->
					<!--	</td>-->
					<!--{/if}-->
					<!--{#if hasOutput}-->
					<!--	<td>-->
					<!--		<ItemAmountsDisplay items={action.output} />-->
					<!--	</td>-->
					<!--	<td>-->
					<!--		<CurrencyDisplay amount={calculateSellValue(action.output)} />-->
					<!--	</td>-->
					<!--{/if}-->
					<!--{#if hasInput && hasOutput}-->
					<!--	<td>-->
					<!--		<CurrencyDisplay amount={calculateProfit(action)} />-->
					<!--	</td>-->
					<!--{/if}-->
					<td>
						<ExpDisplay exp={action.exp} />
					</td>
					<td>
						<div class="flex flex-row items-center space-x-1">
							<GameIcon path="knowledge.png" />
							<span>{action.knowledgeCost}</span>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<!--				<td colspan={6 - (hasInput ? 0 : 2) - (hasOutput ? 0 : 2) - (hasInput && hasOutput ? 0 : 1)}>Total</td>-->
				<td colspan="4">Total</td>
				<td class="text-right">{actions.length} Passive Actions</td>
			</tr>
		</tfoot>
	</table>
</div>
