<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
	import { ProfessionId } from '$lib/data/game/ProfessionId';
	import type { Action } from '$lib/model/profession/Action';
	import { RecipeTemplate } from '$lib/wiki/template/RecipeTemplate';
	import { ItemRepository } from '$lib/data/repository/ItemRepository.js';
	import { LevelTableTemplate } from '$lib/wiki/template/LevelTableTemplate';

	const recipes: Action[] = ProfessionRepository.getProfession(ProfessionId.Chef).actions;
	let selectedIndex: number = $state(0);
	let selectedRecipe: Action = $derived(recipes[selectedIndex]);

	const recipeTemplate = new RecipeTemplate();
	const recipeTemplateResult = $derived(recipeTemplate.render(selectedRecipe));

	const levelTemplateResult = $derived(new LevelTableTemplate().render());

	const value = $state(['recipe']);
</script>

<p>This page contains automatically generated tables for the <a href="https://brightershoreswiki.org/">wiki</a>.</p>

<Accordion {value} collapsible>
	<Accordion.Item value="club">
		{#snippet control()}Recipe{/snippet}
		{#snippet panel()}
			<label class="label">
				<span class="label-text">Recipe</span>
				<select class="select" bind:value={selectedIndex}>
					{#each recipes as recipe, index}
						<option value={index}>{ItemRepository.getItem(recipe.output[0].id).fullName}</option>
					{/each}
				</select>
			</label>

			<pre class="whitespace-pre-line">
				{recipeTemplateResult}
			</pre>
		{/snippet}
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="exp">
		{#snippet control()}Exp{/snippet}
		{#snippet panel()}
			<pre class="whitespace-pre-line">
	{levelTemplateResult}
</pre>
		{/snippet}
	</Accordion.Item>
	<hr class="hr" />
</Accordion>
