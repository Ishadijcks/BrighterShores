<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import { expPerLevel, getKnowledgeForLevel, getTotalExpForLevel } from '$lib/model/profession/LevelData';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		new Chart(canvas, {
			type: 'line',
			data: {
				labels: Array.from(Array(expPerLevel.length).keys()),
				datasets: [{ data: expPerLevel }],
			},
			options: {
				plugins: {
					legend: {
						display: false,
					},
					title: {
						display: true,
						text: `asdasdl`,
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

<div class="flex flex-col items-center">
	<div>
		<canvas class="h-96" bind:this={canvas}></canvas>
	</div>

	<div class="w-96">
		<table class="table">
			<thead>
				<tr>
					<th>Level</th>
					<th>Experience</th>
					<th>Exp to next</th>
					<th>Knowledge</th>
				</tr>
			</thead>
			<tbody class="hover:[&>tr]:preset-tonal-primary">
				{#each expPerLevel as exp, level}
					<tr>
						<td>{level}</td>
						<td>{exp.toLocaleString()}</td>
						<td>{getTotalExpForLevel(level) || ''}</td>
						<td>{getKnowledgeForLevel(level) || ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
