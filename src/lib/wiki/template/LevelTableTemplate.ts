import { WikiTemplate } from '$lib/wiki/WikiTemplate';
import { expPerLevel, getKnowledgeForLevel, getTotalExpForLevel } from '$lib/model/profession/LevelData';

export class LevelTableTemplate extends WikiTemplate {
	public name: string = 'Level Table';

	public render(): string {
		const rows = expPerLevel.map((exp, level) => {
			return [
				level.toLocaleString(),
				exp.toLocaleString(),
				getTotalExpForLevel(level).toLocaleString(),
				getKnowledgeForLevel(level).toLocaleString(),
			];
		});
		return this._renderTable(rows);
	}
}
