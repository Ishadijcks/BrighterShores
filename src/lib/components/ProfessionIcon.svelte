<script lang="ts">
	import { base } from '$app/paths';

	import type { ProfessionId } from '$lib/data/game/ProfessionId';
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';

	interface Props {
		id: ProfessionId;
	}

	let { id }: Props = $props();

	const profession = ProfessionRepository.getProfession(id);
</script>

<img class="h-4 w-4" src="{base}/images/{profession.icon}" alt={profession.name} />
