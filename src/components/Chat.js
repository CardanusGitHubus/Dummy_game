
  // front-only object
  // to manage chat window
  // and interract with current chatRoom object


import { Message } from "../scripts/message";

export default class Chat {
  constructor(selector, chatRoom) {
    this._currentRoom = chatRoom;
    this._selector = selector;
    this._element = document.querySelector(selector);
    this._messageContainer = this._element.querySelector('.')
    this._textBox = this._element.querySelector('.chat__textarea');
  }


  //filling userpics and chat room history, creating listeners on-submit
  fillElement() {
    
    this._createListeners();
  }
  

  _clear() {
    this._deleteListeners();
  }

  _createListeners() {
    this._form.addEventListener('submit', this._submitHandler);
  }

  _submitHandler(evt) {
    evt.preventDefault();
    const message = new Message(this._textBox.textContent, true);
    this._currentRoom.getMessage(message);
    this._renderItem(message);
  }

  switchRoom(chatRoom) {
    this._currentRoom = chatRoom;
    this._clear();
    this.fillElement();
  }
}
