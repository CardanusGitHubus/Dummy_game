import Chat from "./Chat";
import ChatRoom from "./ChatRoom"
import Section from "./Section";


// controls state of all users with message historys,
// calls updates in state of ui elements
// users = [{userName, userPic, history}]
// history = [{self?, date, text}]
class ChatController {
  constructor(initialUsers) {
    this._activateRoom = _ => {};
    this._activeChat = new Chat('.chat', this._getMessage);
    this._roomContainer = new Section('.chatlist__list');
    this._users = initialUsers;
    this.buildChatList(initialUsers);
  }

  buildChatList(users) {
    chatRooms = {};
    const chatRooms = users.map(user => {
      const room = new ChatRoom(
      {
        user: user,
        clickHandler: _ => {
          this._activateRoom(user);
          this._activeChat.switchRoom(user)
        },
        renderChatRoom: _ => {this._roomContainer.add(_)},
      })
      chatRooms[`${user.userName}`] = room;
    });
    this._rooms = chatRooms;
  }
  
  _activateRoom(name) {
    for (const key in this._rooms) {
      (key == name)
        ? this._rooms[key].activate()
        : this._rooms[key].deactivate();
    }
  }

  _getMessage(message) {
    const name = message.name;
    this._users.forEach(_ => {
      if (_.name == message.name) _.history.push(message);
    });
    this._rooms[name].update();
  }
}