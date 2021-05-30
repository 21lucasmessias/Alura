class MessageView {
  private _element: Element

  constructor(selector: string) {
    this._element = document.querySelector(selector)
  }

  update(model: string) {
    this._element.innerHTML = this.template(model)
  }

  template(model: string) {
    return(
      `
        <p class="alert alert-info">${model}</p>
      `
    )
  }
}