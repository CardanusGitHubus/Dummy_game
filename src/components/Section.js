// basic functions now,
// no deletion no nothing

export default class Section {
  constructor(selector, backwards) {
    this._backwards = backwards;
    this._selector = selector;
    this._containerElement = document.querySelector(this._selector);
  }

  add(...elements){
    this._backwards
      ? elements.forEach(_ => this._containerElement.prepend(_))
      : elements.forEach(_ => this._containerElement.append(_));
  }

  clear(){
    this._containerElement.innerHTML = '';
  }
}