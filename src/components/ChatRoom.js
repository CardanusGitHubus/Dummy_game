// keeping and updating chat history
// getting callbacks to render history in chat
// mb active chatRoom should have separate class ChatRoomActive extends Chatroom

export default class ChatRoom {

  constructor({
                user,
                renderMessage,
                renderChatRoom,
              }
                ){

    this._userPic = user.userPic;
    this._userName = user.userName;
    this._history = user.history;
    
    this._message = this._history[this._history.length -1].text;
    this._lsasOnline = this._history[this._history.length - 1].date;

    this._chatRoomElement = ChatRoom._template.cloneNode(true);
    this._fill();
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
  
}