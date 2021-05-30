class NegotiationController {
	private _inputDate: HTMLInputElement
	private _inputQuantity: HTMLInputElement
	private _inputValue: HTMLInputElement
	private _negotiations: Negotiations
	private _negotiationsView =  new NegotiationsView('#negotiationsView')

	constructor() {
		this._inputDate = document.querySelector<HTMLInputElement>('#data')
		this._inputQuantity = document.querySelector<HTMLInputElement>('#quantidade')
		this._inputValue = document.querySelector<HTMLInputElement>('#valor')

		this._negotiations = new Negotiations()

		this._negotiationsView.update(this._negotiations)
	}

	addHandle(event: Event): void {
		event.preventDefault();

		const negotiation = new Negotiation(
			new Date(this._inputDate.value.replace(/-/g, ',')),
			parseInt(this._inputQuantity.value),
			parseFloat(this._inputValue.value)
		)

		this._negotiations.add(negotiation)

		this._negotiationsView.update(this._negotiations)
	}
}