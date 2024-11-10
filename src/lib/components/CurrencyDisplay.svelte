<script lang="ts">

	import { toCurrency } from '$lib/util/Pricing';

	interface Props {
		amount: number;
	}

	let { amount }: Props = $props();
	const currency = $derived(toCurrency(amount))
</script>

<span> {amount} </span>
<!--<span>-->
<!--	{#if currency.gold}{currency.gold}G, {/if}-->
<!--	{#if currency.silver}{currency.silver}S, {/if}-->
<!--	{#if currency.bronze}{currency.bronze}B {/if}-->
<!--</span>-->