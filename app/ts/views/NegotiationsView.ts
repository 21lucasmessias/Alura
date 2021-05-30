class NegotiationsView {
	private _element: Element

	constructor(selector: string) {
		this._element = document.querySelector(selector)
	}

	update(): void {
		this._element.innerHTML = this.template()
	}

	template(): string {
		return `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
						<th>VOLUME</th>
					</tr>
				</thead>
				
				<tbody>
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		`
	}
}