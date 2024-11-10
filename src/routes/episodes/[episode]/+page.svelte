<script lang="ts">
	import type { PageData } from './$types';
	import ActionTable from '$lib/components/ActionTable.svelte';

	let { data }: { data: PageData } = $props();

	const episode: Episode = $derived(data.episode);
</script>
