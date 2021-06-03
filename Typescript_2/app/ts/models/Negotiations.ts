import { Negotiation } from "./index"
import { Printable } from "./Printable"

export class Negotiations extends Printable {
	private _negotiations: Array<Negotiation> = []

	add(negotiation: Negotiation): Negotiation {
		this._negotiations.push(negotiation)
		
		return negotiation
	}

	toArray(): Array<Negotiation>{
		return ([] as Array<Negotiation>).concat(this._negotiations)
	}

	toConsole(): void {
		console.log(this._negotiations)
	}
}