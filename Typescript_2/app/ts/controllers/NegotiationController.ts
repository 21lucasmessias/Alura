import { Negotiation, Negotiations } from "../models/index"
import { MessageView, NegotiationsView } from "../views/index"

export class NegotiationController {
	private _inputDate: JQuery
	private _inputQuantity: JQuery
	private _inputValue: JQuery
	private _negotiations: Negotiations
	private _negotiationsView =  new NegotiationsView('#negotiationsView', true)
	private _messageView = new MessageView('#messageView', true)

	constructor() {
		this._inputDate = $('#data')
		this._inputQuantity = $('#quantidade')
		this._inputValue = $('#valor')

		this._negotiations = new Negotiations()

		this._negotiationsView.update(this._negotiations)
	}

	addHandle(event: Event): void {
		event.preventDefault();

		const negotiation = new Negotiation(
			new Date((this._inputDate.val() as string).replace(/-/g, ',')),
			parseInt(this._inputQuantity.val() as string),
			parseFloat(this._inputValue.val() as string)
		)

		this._negotiations.add(negotiation)
		
		this._negotiationsView.update(this._negotiations)
		this._messageView.update('Negotiation added successfully!')
	}
}