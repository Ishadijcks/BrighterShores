import type { PassiveAction } from '$lib/model/profession/PassiveAction';
import { ProfessionId } from '$lib/data/game/ProfessionId';

// TODO(@Isha): Add other stuff like output and gains
interface LeatherworkerPassive {
	lvl: number;
	name: string;
	category: string;
	cost: number;
	exp: number;
}

const rawLeatherworkerPassives: LeatherworkerPassive[] = [
	{ lvl: 20, name: 'Key Ring', category: 'Household', cost: 1, exp: 0 },
	{ lvl: 23, name: 'Wall Panel', category: 'Upholstery', cost: 2, exp: 0 },
	{ lvl: 32, name: 'Pouch', category: 'Container', cost: 3, exp: 0 },
	{ lvl: 38, name: 'Pet Collar', category: 'Animal', cost: 4, exp: 0 },
	{ lvl: 41, name: 'Dining Chair', category: 'Upholstery', cost: 5, exp: 0 },
	{ lvl: 47, name: 'Turtle Patch', category: 'Patch', cost: 6, exp: 0 },
	{ lvl: 54, name: 'Hassock', category: 'Upholstery', cost: 7, exp: 0 },
	{ lvl: 60, name: 'Eye Patch', category: 'Wearable', cost: 8, exp: 0 },
	{ lvl: 63, name: 'Knife Sheath', category: 'Survival', cost: 9, exp: 0 },
	{ lvl: 69, name: 'Barrel Chair', category: 'Upholstery', cost: 10, exp: 0 },
	{ lvl: 82, name: 'Bookmark', category: 'Stationary', cost: 12, exp: 0 },
	{ lvl: 91, name: 'Coaster', category: 'Household', cost: 14, exp: 0 },
	{ lvl: 106, name: 'Pet Leash', category: 'Animal', cost: 17, exp: 0 },
	{ lvl: 119, name: 'Headboard', category: 'Upholstery', cost: 19, exp: 0 },
	{ lvl: 134, name: 'Boot Straps', category: 'Survival', cost: 22, exp: 0 },
	{ lvl: 144, name: 'Footrest', category: 'Upholstery', cost: 24, exp: 0 },
	{ lvl: 156, name: 'Book Cover', category: 'Household', cost: 26, exp: 0 },
	{ lvl: 172, name: 'Blinkers', category: 'Animal', cost: 29, exp: 0 },
	{ lvl: 184, name: 'Eagle Patch', category: 'Patch', cost: 31, exp: 0 },
	{ lvl: 200, name: 'Waterskin', category: 'Survival', cost: 37, exp: 0 },
	{ lvl: 230, name: 'Soccer Ball', category: 'Sports', cost: 45, exp: 0 },
	{ lvl: 280, name: 'Dice Cup', category: 'Household', cost: 57, exp: 0 },
	{ lvl: 320, name: 'Saddle', category: 'Upholstery', cost: 65, exp: 0 },
	{ lvl: 370, name: 'Lawson Sofa', category: 'Upholstery', cost: 77, exp: 0 },
	{ lvl: 410, name: 'Trunk', category: 'Upholstery', cost: 85, exp: 0 },
	{ lvl: 440, name: 'Rugby Ball', category: 'Sports', cost: 93, exp: 0 },
];

export const leatherworkerPassives: PassiveAction[] = rawLeatherworkerPassives.map((p) => {
	return {
		lvl: { level: p.lvl, profession: ProfessionId.Leatherworker },
		activity: p.name,
		category: p.category,
		knowledgeCost: p.cost,
		exp: { amount: p.exp, profession: ProfessionId.Leatherworker },
	};
});
