import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import type { Tool } from '$lib/model/tool/Tool';
import { ToolId } from '$lib/data/tool/ToolId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export class ToolRepository {
	public static tools: Tool[] = [
		...ProfessionRepository.professions.flatMap((profession) => profession.tools ?? []),
		{
			id: ToolId.UNKNOWN,
			lvl: [0],
			bonusXp: [0],
			maxTier: 1,
			name: 'Unknown',
			cost: [0],
			profession: ProfessionId.Guard,
			description: 'Not implemented',
		},
	];

	public static getTool(id: ToolId): Tool {
		const tool = this.tools.find((tool) => tool.id === id);
		if (tool === undefined) {
			throw new Error(`Could not find tool with id '${id}'`);
		}
		return tool;
	}
}
