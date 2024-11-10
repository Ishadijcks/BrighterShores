<script lang="ts">
	import type { LevelRequirement } from '$lib/model/profession/LevelRequirement';
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';

	interface Props {
		req: LevelRequirement;
	}

	let { req }: Props = $props();

	const profession = $derived(ProfessionRepository.getProfession(req.profession));
</script>

<span>{req.level} {profession.name}</span>