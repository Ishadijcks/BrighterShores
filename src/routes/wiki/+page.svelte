<script lang="ts">
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
	import { ProfessionId } from '$lib/data/game/ProfessionId';
	import type { Action } from '$lib/model/profession/Action';
	import { RecipeTemplate } from '$lib/wiki/template/RecipeTemplate';
	import { ItemRepository } from '$lib/data/repository/ItemRepository.js';

	const recipes: Action[] = ProfessionRepository.getProfession(ProfessionId.Chef).actions;
	let selectedIndex: number = $state(0);
	let selectedRecipe: Action = $derived(recipes[selectedIndex]);

	const template = new RecipeTemplate();
	const templateResult = $derived(template.render(selectedRecipe));
</script>

<p>This page contains automatically generated tables for the <a href="https://brightershoreswiki.org/">wiki</a>.</p>

<label class="label">
	<span class="label-text">Recipe</span>
	<select class="select" bind:value={selectedIndex}>
		{#each recipes as recipe, index}
			<option value={index}>{ItemRepository.getItem(recipe.output[0].id).fullName}</option>
		{/each}
	</select>
</label>

<pre class="whitespace-pre-line">
	{templateResult}
</pre>
