import { domInject } from "../helpers/decorators/index"
import { Negotiation, Negotiations } from "../models/index"
import { MessageView, NegotiationsView } from "../views/index"

export class NegotiationController {
	@domInject('#data')
	private _inputDate: JQuery

	@domInject('#quantidade')
	private _inputQuantity: JQuery

	@domInject('#valor')
	private _inputValue: JQuery

	private _negotiations = new Negotiations()
	private _negotiationsView =  new NegotiationsView('#negotiationsView', true)
	private _messageView = new MessageView('#messageView', true)

	constructor() {
		this._negotiationsView.update(this._negotiations)
	}

	addHandle(event: Event): void {
		event.preventDefault();

		let date: Date = new Date((this._inputDate.val() as string).replace(/-/g, ','))

		if(!this._isValidDay(date)){
			this._messageView.update('Negotation are unavaiable on the weekend!')

			return
		}

		const negotiation = new Negotiation(
			date,
			parseInt(this._inputQuantity.val() as string),

			parseFloat(this._inputValue.val() as string)
		)

		this._negotiations.add(negotiation)
		
		this._negotiationsView.update(this._negotiations)
		this._messageView.update('Negotiation added successfully!')
	}

	private _isValidDay(date: Date) {
		return date.getDay() !== DayOfWeek.saturday && date.getDay() !== DayOfWeek.sunday
	}
}

enum DayOfWeek {
	sunday,
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday
}