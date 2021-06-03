import { Negotiation } from "./index"
import { Printable, Sameless } from "./types/index"

export class Negotiations implements Printable, Sameless<Negotiations> {
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

	isSame(negotiations: Negotiations): boolean {
		return JSON.stringify(negotiations) == JSON.stringify(this._negotiations)
	}
}