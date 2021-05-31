import { Negotiation } from "./index"

export class Negotiations {
	private _negotiations: Array<Negotiation> = []

	add(negotiation: Negotiation): Negotiation {
		this._negotiations.push(negotiation)
		
		return negotiation
	}

	toArray(): Array<Negotiation>{
		return ([] as Array<Negotiation>).concat(this._negotiations)
	}
}