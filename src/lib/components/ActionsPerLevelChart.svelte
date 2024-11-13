<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import type { ProfessionId } from '$lib/data/game/ProfessionId';
	import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
	import { calculateActionsNeededPerLevel } from '$lib/calculations/ProfessionCalculator';

	interface Props {
		id: ProfessionId;
	}

	let { id }: Props = $props();

	const profession = $derived(ProfessionRepository.getProfession(id));
	const actions = $derived(profession.actions);

	// Calculate the highest level that has an unknown (0) amount of experience
	const maxLevel = $derived(
		actions
			.find((a) => a.experience.find((x) => x.profession === profession.id)?.amount === 0)
			?.requirements.find((r) => r.profession === profession.id)?.level ?? 500,
	);
	const actionsNeeded = $derived(calculateActionsNeededPerLevel(profession.id, actions, maxLevel));

	let canvas: HTMLCanvasElement;
	let chart: Chart = $state() as Chart;

	$effect(() => {
		if (chart) {
			if (chart.options.plugins?.title?.text) {
				chart.options.plugins.title.text = `Actions required to reach the next ${profession.name} level`;
			}

			chart.data.labels = Array.from(Array(actionsNeeded.length).keys());
			chart.data.datasets = [{ data: actionsNeeded }];
			chart.update();
		}
	});

	onMount(() => {
		chart = new Chart(canvas, {
			type: 'line',
			data: {
				labels: Array.from(Array(actionsNeeded.length).keys()),
				datasets: [{ data: actionsNeeded }],
			},
			options: {
				plugins: {
					legend: {
						display: false,
					},
					title: {
						display: true,
						text: `Actions required to reach the next ${profession.name} level`,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});
</script>

<div>
	<canvas class="h-96" bind:this={canvas}></canvas>
</div>
