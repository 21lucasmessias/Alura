export abstract class View<T> {
  private _element: JQuery
  private _skip: boolean

  constructor(selector: string, skip?: boolean) {
    this._skip = skip
    this._element = $(selector)
  }

  update(model: T): void {
    let template: string = this.template(model)

    if(this._skip)
      template.replace(/<script>[\s\S]*?<\/script>/, '')

    this._element.html(template)
  }

  abstract template(model: T): string
}