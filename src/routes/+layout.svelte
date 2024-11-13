<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import GitHub from 'lucide-svelte/icons/github';

	let { children } = $props();

	import { setContext } from 'svelte';
	import { localStore } from '$lib/util/LocalStore.svelte';
	import { createDefaultState } from '$lib/state/State';

	const state = localStore('state', createDefaultState());
	setContext('state', state);
</script>

<AppBar>
	{#snippet trail()}
		<a href="https://github.com/ishadijcks/BrighterShores" target="_blank">
			<GitHub size={20} />
		</a>
	{/snippet}

	<a class="px-4" href="{base}/">Home</a>
	<a class="px-4" href="{base}/episodes">Episodes</a>
	<a class="px-4" href="{base}/professions">Professions</a>
	<a class="px-4" href="{base}/items">Items</a>
	<a class="px-4" href="{base}/player">Player</a>
</AppBar>

<div class="p-4">
	{@render children()}
</div>
