import { expect, test } from 'vitest';
import { getExpLeftForLevel, getLevel, getLevelProgress } from '$lib/model/profession/LevelData';

test('calculates levels', () => {
	expect(getLevel(10)).toBe(0);
	expect(getLevel(100)).toBe(0);
	expect(getLevel(1000)).toBe(1);
	expect(getLevel(10000)).toBe(11);
	expect(getLevel(100000)).toBe(23);

	// Weird flex, but ok ;)
	expect(getLevel(1634308)).toBe(72);
});

test('calculates progress', () => {
	// Arrange
	const exp = 200;

	// Act
	const progress = getLevelProgress(exp);
	const expLeft = getExpLeftForLevel(exp);

	// Assert
	expect(progress).toBe(200 / 500);
	expect(expLeft).toBe(300);
});
