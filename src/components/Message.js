export default class Message {
  constructor (data, selector) {
    this._clickHandler = data.clickHandler;
  }
  
  static _template = document
      .querySelector('#message-template')
      .content
      .querySelector(selector); 

  _getElement() {
    const messageElement = Message._template.cloneNode(true);
    this._fillMessage(messageElement);
    this._setEventListeners(messageElement);
    return newElement;
  }

  _fillMessage(element) {
    element.querySelector('.message__user').src = this._pic;
    element.querySelector('.message__text').textContent = this._text;
    element.querySelector('.message__time').textContent = this._time;
  }

  _setEventListeners(element) {
    element.addEventListener('click', this._clickHandler);
  }
  
  _removeEventListeners(element){
    element.removeEventListener('click', this._clickHandler);
  }
  
}