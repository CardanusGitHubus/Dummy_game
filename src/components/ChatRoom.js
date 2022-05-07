// keeping and updating chat history
// getting callbacks to render history in chat
// mb active chatRoom should have separate class ChatRoomActive extends Chatroom

export default class ChatRoom {

  constructor({ user, clickHandler, renderChatRoom,}) {
    this._userPic = user.userPic;
    this._userName = user.userName;
    this._history = user.history;
    this._clickHandler = clickHandler;
    this._clickListener = this._clickListener.bind(this);
    
    this._message = this._history[this._history.length -1].text;
    this._lsasOnline = this._history[this._history.length - 1].date;

    this._chatRoomElement = ChatRoom._template.cloneNode(true);
    this._fill();
    this._setEvenListenersts();
    this._renderSelf = () => {renderChatRoom(this._chatRoomElement)};
    this._renderSelf();
  }

  static _template = document
    .querySelector('#chatroom-template')
    .content
    .querySelector('.chatlist__item');   


  _fill() {
    this._chatRoomElement.querySelector('.user__name').textContent = this._userName;
    this._chatRoomElement.querySelector('.user__pic').src = this._userPic;
    this._chatRoomElement.querySelector('.user__online').textContent = this._lsasOnline;
    this._chatRoomElement.querySelector('.chatlist__message').textContent = this._message;
  }
  
  _clickListener() {
    this._clickHandler({
      userPic: this._userPic,
      userName: this._userName,
      history: this._history
    });
  }

  _setEvenListenersts() {
    this._chatRoomElement.addEventListener('click', this._clickListener);
  }

  pushMessage({self, text, date}) {
    this._history.push({self, text, date});
  }

  activate(){
    this._chatRoomElement.classList.add('chatlist__item_active');
  }

  deactivate(){
    this._chatRoomElement.classList.remove('chatlist__item_active');
  }

  update(message) {
    this._message = message.text;
    this._lsasOnline = message.date;
    this._fill();
  }
}