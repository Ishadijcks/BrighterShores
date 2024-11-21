import { WikiTemplate } from '$lib/wiki/WikiTemplate';
import { ProfessionId } from '$lib/data/game/ProfessionId';
import type { Action } from '$lib/model/profession/Action';
import { ProfessionRepository } from '$lib/data/repository/ProfessionRepository';
import { ItemRepository } from '$lib/data/repository/ItemRepository';

export interface RecipeTemplateConfig {
	facility: string;
	profession: string;
	level: number;
	exp: number;
	rawMat1?: string;
	rawMat1qty?: string;
	rawMat2?: string;
	rawMat2qty?: string;
	rawMat3?: string;
	rawMat3qty?: string;
	output1?: string;
	output1qty?: string;
}

export class RecipeTemplate extends WikiTemplate {
	public name: string = 'Infobox RecipeNew';

	public render(action: Action): string {
		const config: RecipeTemplateConfig = {
			// TODO(@Isha): Implement facilities
			facility: 'Preparation Table',
			profession: ProfessionRepository.getProfession(ProfessionId.Chef).name,
			level: action.requirements[0].level,
			exp: action.experience[0].amount,
			rawMat1: ItemRepository.getItem(action.input[0]?.id, true)?.fullName,
			rawMat1qty: action.input[0]?.amount.toString(),
			rawMat2: ItemRepository.getItem(action.input[1]?.id, true)?.fullName,
			rawMat2qty: action.input[1]?.amount.toString(),
			rawMat3: ItemRepository.getItem(action.input[2]?.id, true)?.fullName,
			rawMat3qty: action.input[2]?.amount.toString(),
			output1: ItemRepository.getItem(action.output[0]?.id, true)?.fullName,
			output1qty: action.output[0]?.amount.toString(),
		};
		return this._render(config);
	}
}
