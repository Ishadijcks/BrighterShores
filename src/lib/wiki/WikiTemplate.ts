export abstract class WikiTemplate {
	public abstract name: string;

	public abstract render(data: object): string;

	protected _render(config: object): string {
		const argumentString: string = Object.entries(config)
			.filter(([, value]) => value)
			.map(([key, value]) => {
				return `| ${key} = ${value}`;
			})
			.join('\n');

		return `{{ ${this.name}\n` + argumentString + '\n}}\n';
	}

	protected _renderTable(rows: string[][]): string {
		return rows
			.map((row) => {
				return '|-\n| ' + row.join(' || ');
			})
			.join('\n');
	}
}
