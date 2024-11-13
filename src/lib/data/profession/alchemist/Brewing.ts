import { ItemId } from '$lib/data/game/ItemId';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface BrewingRecipe {
	lvl: number;
	potion: ItemId;
	ingredients: ItemId[];
	// TODO(@Isha): Steps?
	prep: number;
	brew: number;
}

export const rawBrewingRecipes: BrewingRecipe[] = [
	// { lvl: 0, potion: ItemId.TenPHealingPotion, ingredients: [ItemId.BrownKelp], prep: 42, brew: 63 },
];

export const brewingRecipes: Action[] = rawBrewingRecipes.map((r) => {
	return {
		input: r.ingredients.map((id) => ({ id: id, amount: 1 })),
		output: [{ id: r.potion, amount: 1 }],
		requirements: [{ profession: ProfessionId.Alchemist, level: r.lvl }],
		experience: [{ profession: ProfessionId.Alchemist, amount: r.prep + r.brew }],
	};
});
