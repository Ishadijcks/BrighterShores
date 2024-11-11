const qualities = ['Coarse', 'Rugged', 'Average', 'Fine', 'Sturdy', 'Perfect'];
const logs = ['Ash Log', 'Oak Log', 'Pine Log', 'Hickory Log', 'Juniper Log', 'Poplar Log', 'Suave Log', 'Yew Log'];
const types = [
	'Ash Plank',
	'Oak Pole',
	'Pine Pole',
	'Hickory Pole',
	'Juniper Stave',
	'Poplar Pole',
	'Suave Pole',
	'Yew Pole',
];

qualities.forEach((q) => {
	logs.forEach((t) => {
		console.log(
			`	{ id: ItemId.${q}${t.replace(' ', '')}, name: '${q} ${t}', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },`,
		);
	});
});

console.log();
qualities.forEach((q) => {
	types.forEach((t) => {
		console.log(
			`	{ id: ItemId.${q}${t.replace(' ', '')}, name: '${q} ${t}', description: '', buyValue: 0, sellValue: 0, w: 0, c: 0 },`,
		);
	});
});
//
// qualities.forEach((q) => {
// 	types.forEach(t => {
// 		console.log(`${q}${t}Leather,`);
// 	});
// });
