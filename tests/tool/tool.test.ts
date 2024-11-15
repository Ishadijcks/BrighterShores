import { expect, test } from 'vitest';
import { ToolRepository } from '$lib/data/repository/ToolRepository';

test('all tools have the correct amount of tiers', () => {
	ToolRepository.tools.forEach((tool) => {
		expect(tool.bonusXp.length).toEqual(tool.maxTier);
		expect(tool.lvl.length).toEqual(tool.maxTier);
		expect(tool.cost.length).toEqual(tool.maxTier);
	});
});
