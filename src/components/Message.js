import defaultImage from '../images/defaultuser.svg';

export default class Message {
  constructor (message, clickHandler) {
    this._text = message.text;
    this._time = message.date;
    this._clickHandler = clickHandler;
  }

  static _pic = defaultImage;
  
  static _template = document
      .querySelector('#message-template')
      .content
      .querySelector('.message'); 

  getElement() {
    const messageElement = Message._template.cloneNode(true);
    this._fillMessage(messageElement);
    this._setEventListeners(messageElement);
    return messageElement;
  }

  _fillMessage(element) {
    element.querySelector('.message__user').src = Message._pic;
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