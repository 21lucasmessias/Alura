import { Printable, Sameless } from "./types/index";

export class Negotiation implements Printable, Sameless<Negotiation> {
	constructor(readonly data: Date, readonly quantity: number, readonly value: number) {}

	get volume() {
		return this.quantity * this.value;
	}

	toConsole(): void {
		console.log(`
			Data: ${this.data}
			Quantidade: ${this.quantity}, 
			Valor: ${this.value}, 
			Volume: ${this.volume}
		`)
	}

	isSame(negotiation: Negotiation): boolean {
		return this.data.getDate() == negotiation.data.getDate()
				&& this.data.getMonth() == negotiation.data.getMonth()
				&& this.data.getFullYear() == negotiation.data.getFullYear()
	}
}