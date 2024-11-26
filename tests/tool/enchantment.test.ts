import { expect, test } from 'vitest';
import { calculateEnchantmentBonus } from '$lib/calculations/ActionCalculator';

test.each([
	[0, 0],
	[10, 0.04],
	[20, 0.08],
	[25, 0.1],
	[26, 0.102],
	[30, 0.11],
	[40, 0.13],
	[50, 0.15],
	[51, 0.151],
])('Enchantment level %i give a bonus of %f', (level: number, bonus: number) => {
	expect(calculateEnchantmentBonus(level)).toBeCloseTo(bonus);
});
