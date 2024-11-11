import { expect, test } from 'vitest';
import { toCurrency } from '$lib/util/Pricing';

test('calculates currencies', () => {
	// Arrange
	const value = 1234567;

	// Act
	const currency = toCurrency(value);

	// Assert
	expect(currency.gold).toBe(1);
	expect(currency.silver).toBe(234);
	expect(currency.copper).toBe(567);
});
