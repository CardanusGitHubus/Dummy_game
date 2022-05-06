// chat section rendering
import Section from './Section';
import defaultImage from '../images/defaultuser.svg';
import { Message } from '../scripts/message';

export default class Chat {
  constructor(selector) {
    this._selector = selector;

    this._chatElement = document.querySelector(selector);
    this._userName = this._chatElement.querySelector('.user__name');
    this._userPic = this._chatElement.querySelector('.user__pic');
    this._lastOnline = this._chatElement.querySelector('.user__online');
    
    this._form = this._chatElement.querySelector('.chat__form');
    this._button = this._chatElement.querySelector('.chat__button_send');
    this._textarea = this._chatElement.querySelector('.chat__textarea');

    this._messageContainer = new Section('.chat-wrapper');

    
    this._handleEnterKey = this._handleEnterKey.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    
    this._fill({
      userName: 'pick a user online',
      userPic: defaultImage,
      history: [{date: 'and get a room'}]
    });
    this._setEventListeners();
  }
  
  _fill({userName, userPic, history}) {
    this._userName.textContent = userName;
    this._userPic.src = userPic;
    this._lastOnline.textContent = history[history.length - 1].date;
  }
  
  switchRoom(user) {
    this._fill(user);
    this._pushMessageArray = user.history.push;
  }

  _setEventListeners() {
    this._form.addEventListener('submit', this._handleSubmit);
    this._textarea.addEventListener('keydown', this._handleEnterKey);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._createNewMessage(this._textarea.value);
    this._form.reset();
  }

  _handleEnterKey(evt) {
    //thanks lastpass etc
    evt.stopPropagation();
    if (evt.keyCode == 13) {
      this._handleSubmit(evt);
    }
  }

  _createNewMessage(textContent) {
    const date = new Date();
    const params = {
      self: true,
      text: textContent,
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    const message = new Message(params);
    this._pushMessageArray(params);
    return message;
  }
}