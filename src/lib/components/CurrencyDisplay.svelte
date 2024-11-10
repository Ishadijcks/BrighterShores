<script lang="ts">
	import { base } from '$app/paths';

	import { toCurrency } from '$lib/util/Pricing';

	interface Props {
		amount: number;
	}

	let { amount }: Props = $props();
	const currency = $derived(toCurrency(amount));
</script>

<div class="flex flex-row space-x-2">
	{#if currency.gold > 0}
		<div class="flex flex-row items-center space-x-1">
			<img class="h-4 w-4" src="{base}/images/currency/gold.png" alt="Gold" />
			<span>{currency.gold}</span>
		</div>
	{/if}

	{#if currency.silver > 0}
		<div class="flex flex-row items-center space-x-1">
			<img class="h-4 w-4" src="{base}/images/currency/silver.png" alt="Silver" />
			<span>{currency.silver}</span>
		</div>
	{/if}

	{#if currency.copper > 0}
		<div class="flex flex-row items-center space-x-1">
			<img class="h-4 w-4" src="{base}/images/currency/copper.png" alt="Copper" />
			<span>{currency.copper}</span>
		</div>
	{/if}
</div>
