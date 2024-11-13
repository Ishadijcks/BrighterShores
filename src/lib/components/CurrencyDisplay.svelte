<script lang="ts">
	import { base } from '$app/paths';

	import { toCurrency } from '$lib/util/Pricing';

	interface Props {
		amount: number;
		highlightSign?: boolean;
	}

	let { amount, highlightSign = false }: Props = $props();
	const isNegative = $derived(amount < 0);
	const currency = $derived(toCurrency(Math.abs(amount)));
	const textColor = $derived(highlightSign ? (isNegative ? 'text-error-500' : 'text-success-500') : '');
</script>

<div class="flex flex-row space-x-2">
	{#if amount === Infinity}
		<span>-</span>
	{:else}
		{#if currency.gold !== 0}
			<div class="flex flex-row items-center space-x-1">
				<img class="h-4 w-4" src="{base}/images/currency/gold.png" alt="Gold" />
				<span class={textColor}>{currency.gold}</span>
			</div>
		{/if}

		{#if currency.silver !== 0}
			<div class="flex flex-row items-center space-x-1">
				<img class="h-4 w-4" src="{base}/images/currency/silver.png" alt="Silver" />
				<span class={textColor}>{currency.silver}</span>
			</div>
		{/if}

		{#if currency.copper !== 0}
			<div class="flex flex-row items-center space-x-1">
				<img class="h-4 w-4" src="{base}/images/currency/copper.png" alt="Copper" />
				<span class={textColor}>{currency.copper}</span>
			</div>
		{/if}
	{/if}
</div>
