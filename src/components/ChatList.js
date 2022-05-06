export default class ChatList {
  constructor(activeClass) {
    this._activeClass = activeClass;
    this._elements = Array.from(document.querySelectorAll('.chatlist__item'));
    this._setListeners();
  }

  _setListeners() {
    this._elements.forEach(element => {
      element.addEventListener('click', _ => this._paint(element));
    })
  }

  _paint(element) {
    this._elements.forEach(element => element.classList.remove(this._activeClass));
    element.classList.add(this._activeClass);
  }
}