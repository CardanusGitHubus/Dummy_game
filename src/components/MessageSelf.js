import Message from "./Message";
import defaultImage from '../images/defaultuser.svg';

export default class MessageSelf extends Message{
  constructor(data) {
    super(data);
  }

  static _pic = defaultImage;

  static _templateSelf = document
      .querySelector('#message-template-self')
      .content
      .querySelector('.message_self');
  
  getElement() {
    const messageElement = MessageSelf._templateSelf.cloneNode(true);
    this._fillMessage(messageElement);
    this._setEventListeners(messageElement);
    return messageElement;
  }
  
}