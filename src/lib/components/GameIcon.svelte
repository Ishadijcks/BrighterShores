<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		path: string;
	}

	let { path }: Props = $props();
</script>

<img class="h-4 w-4" src="{base}/images/{path}" alt={path} />
