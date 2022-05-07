import Message from "./Message";

export default class MessageSelf {
  constructor(data) {
    super(data);
  }

  static _template = document
      .querySelector('#message-template-self')
      .content
      .querySelector(selector);
  
  _getElement() {
    const messageElement = MessageSelf._template.cloneNode(true);
    this._fillMessage(messageElement);
    this._setEventListeners(messageElement);
    return newElement;
  }
  
}