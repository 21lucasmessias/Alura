import { Printable } from "./types/Printable";

export class Negotiation implements Printable {
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
}