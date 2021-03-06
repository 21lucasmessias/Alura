import { domInject, throttle } from "../helpers/decorators/index"
import { printer } from "../helpers/utils/index"
import { Negotiation, Negotiations } from "../models/index"
import { HandlerFunction, NegotiationService } from "../services/index"
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

	private _service = new NegotiationService()

	constructor() {
		this._negotiationsView.update(this._negotiations)
	}

	@throttle()
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

		printer(negotiation, this._negotiations)
		
		this._negotiationsView.update(this._negotiations)
		this._messageView.update('Negotiation added successfully!')
	}

	private _isValidDay(date: Date) {
		return date.getDay() !== DayOfWeek.saturday && date.getDay() !== DayOfWeek.sunday
	}

	async import() {
		const isOk: HandlerFunction = (res: Response) => {
			if(res.ok){
				return res;
			}

			throw new Error(res.statusText)
		}

		try {
			const negotiationsToImport = await this._service.getNegotiations(isOk)

			const negotiationsAlreadyImported = this._negotiations.toArray()
	
			negotiationsToImport
			.filter(negotiation => !negotiationsAlreadyImported.some(alreadyImported => negotiation.isSame(alreadyImported)))
			.forEach(negotiation => this._negotiations.add(negotiation))
		} catch (error) {
			this._messageView.update(error.message)
		}

		this._negotiationsView.update(this._negotiations)
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