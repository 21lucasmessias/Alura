class NegotiationController {
    private _inputDate: HTMLInputElement
    private _inputQuantity: HTMLInputElement
    private _inputValue: HTMLInputElement

    constructor() {
        this._inputDate = document.querySelector<HTMLInputElement>('#data')
        this._inputQuantity = document.querySelector<HTMLInputElement>('#quantidade')
        this._inputValue = document.querySelector<HTMLInputElement>('#valor')
    }

    handle(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        )

        console.log(negotiation)
    }
}