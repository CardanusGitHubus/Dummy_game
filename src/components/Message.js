export default class Message {
  constructor (data, clickHandler) {
    this._pic = data.userPic;
    this._text = data.text;
    this._time = data._time;
    this._clickHandler = clickHandler;
  }
  
  static _template = document
      .querySelector('#message-template')
      .content
      .querySelector(selector); 

  getElement() {
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