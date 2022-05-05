// basic functions now,
// no deletion no nothing

export default class Section {
  constructor(selector) {
    this._selector = selector;
    this._containerElement = document.querySelector('.chatlist__list');
  }

  add(...elements){
    elements.forEach(_ => this._containerElement.prepend(_));
  }

  clear(){
    this._containerElement.innerHTML = '';
  }
}