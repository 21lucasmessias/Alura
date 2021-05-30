class View {
  protected _element: Element

  constructor(selector: string) {
    this._element = document.querySelector(selector)
  }
}