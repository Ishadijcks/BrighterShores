<script lang="ts">
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
	import type { Experience } from '$lib/model/profession/Experience';

	interface Props {
		exp: Experience;
	}

	let { exp }: Props = $props();

	const profession = $derived(ProfessionRepository.getProfession(exp.profession));
</script>

<span>{exp.amount} {profession.name}</span>