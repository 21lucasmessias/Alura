import { Printable } from "./Printable";

export class Negotiation extends Printable {
	constructor(readonly data: Date, readonly quantity: number, readonly value: number) {
		super()
	}

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
}