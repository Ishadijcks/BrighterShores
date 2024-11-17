<script lang="ts">
	import type { Experience } from '$lib/model/profession/Experience';
	import ProfessionIcon from '$lib/components/ProfessionIcon.svelte';

	interface Props {
		exp: Experience;
	}

	let { exp }: Props = $props();
</script>

<div class="flex flex-row items-center space-x-1">
	<ProfessionIcon id={exp.profession} />
	<span>{exp.amount > 0 ? Math.round(exp.amount) : '??'}</span>
</div>
