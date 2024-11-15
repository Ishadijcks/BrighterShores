import type { Tool } from '$lib/model/tool/Tool';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import type { ToolId } from '$lib/data/tool/ToolId';

export class ToolRepository {
	// TODO(@Isha): Get from episodes? Or the other way around?
	public static tools: Tool[] = ProfessionRepository.professions.flatMap((profession) => profession.tools ?? []);

	public static getToolsByType(type: ToolId): Tool[] {
		return this.tools.filter((tool) => tool.id === type);
	}
}
