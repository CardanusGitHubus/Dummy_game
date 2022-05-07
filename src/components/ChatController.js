import Chat from "./Chat";
import ChatRoom from "./ChatRoom"
import Section from "./Section";


// controls state of all users with message historys,
// calls updates in state of ui elements
// users = [{userName, userPic, history}]
// history = [{self?, date, text}]
export default class ChatController {
  constructor(initialUsers) {
    this._activateRoom = _ => {};
    this._activeChat = new Chat('.chat', (name, mess) => {this._getMessage(name, mess)});
    this._roomContainer = new Section('.chatlist__list');
    this._users = initialUsers;
    this.buildChatList(initialUsers);
  }

  buildChatList(users) {
    const chatRooms = {};
    users.forEach(user => {
      const room = new ChatRoom(
      {
        user: user,
        clickHandler: _ => {
          this._activateRoom(user);
          this._activeChat.switchRoom(user)
        },
        renderChatRoom: _ => {this._roomContainer.add(_)},
      });
      chatRooms[user.userName] = room;
    });
    this._rooms = chatRooms;
  }
  
  _activateRoom(user) {
    for (const key in this._rooms) {
      (key == user.userName)
        ? this._rooms[key].activate()
        : this._rooms[key].deactivate();
    }
    this._activeChat.switchRoom(user)
  }

  _getMessage(username, message) {
    this._users.forEach(_ => {
      if (_.userName == username) {
        _.history.push(message);
      };
    });
    this._rooms[username].update(message);
  }
}