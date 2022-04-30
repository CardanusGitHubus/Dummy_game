export {Message, MessageSelf};

class Message {
  static _template() {
    const newElement = document
      .querySelector('#message-template')
      .content
      .querySelector('.message')
      .cloneNode(true);
    return newElement;
  }

  constructor (textString, userPicUrl) {
    this._text = textString;
    this._time = (new Date).toLocaleTimeString('it-IT');
    this._pic = userPicUrl;
 }


  getElement() {
    this._messageElement = Message._template();
    this._messageElement.querySelector('.message__user').src = this._pic;
    this._messageElement.querySelector('.message__text').textContent = this._text;
    this._messageElement.querySelector('.message__time').textContent = this._time;
    this._setListeners();
    return this._messageElement;
  }

  _setListeners() {
    this._messageElement.addEventListener('click', _ => this._clickHandler());
  }

  _clickHandler() {
    this._messageElement.classList.toggle('message_select');
  }
}

class MessageSelf extends Message {
  static _template() {
    const newElement = document
      .querySelector('#message-template-self')
      .content
      .querySelector('.message')
      .cloneNode(true);
    return newElement;
  }

  constructor(textString) {
    super(textString, '');
  }

  getElement() {
    this._messageElement = MessageSelf._template();
    this._messageElement.querySelector('.message__text').textContent = this._text;
    this._messageElement.querySelector('.message__time').textContent = this._time;
    this._setListeners();
    return this._messageElement;
  }
}