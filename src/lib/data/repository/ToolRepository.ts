import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import type { Tool } from '$lib/model/tool/Tool';
import type { ToolId } from '$lib/data/tool/ToolId';

export class ToolRepository {
	public static tools: Tool[] = ProfessionRepository.professions.flatMap((profession) => profession.tools ?? []);

	public static getTool(id: ToolId): Tool {
		const tool = this.tools.find((tool) => tool.id === id);
		if (tool === undefined) {
			throw new Error(`Could not find tool with id '${id}'`);
		}
		return tool;
	}
}
