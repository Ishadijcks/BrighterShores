import type { ItemAmount } from '$lib/model/item/ItemAmount';
import { ItemRepository } from '$lib/data/repository/ItemRepository';
import type { Currency } from '$lib/model/Currency';
import type { Action } from '$lib/model/profession/Action';

export const calculateBuyValue = (items: ItemAmount[]): number => {
	return items
		.map((item) => {
			return item.amount * ItemRepository.getItem(item.id).buyValue;
		})
		.reduce((acc, value) => acc + value, 0);
};

export const calculateSellValue = (items: ItemAmount[]): number => {
	return items
		.map((item) => {
			return item.amount * ItemRepository.getItem(item.id).sellValue;
		})
		.reduce((acc, value) => acc + value, 0);
};

export const calculateProfit = (action: Action): number => {
	return calculateSellValue(action.output) - calculateBuyValue(action.input);
};

export const toCurrency = (value: number): Currency => {
	return {
		gold: Math.floor(value / 1000000),
		silver: Math.floor((value % 1000000) / 1000),
		bronze: Math.floor(value % 1000)
	};
};
