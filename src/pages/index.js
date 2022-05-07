import {Message, MessageSelf} from "../scripts/message.js";
import './index.css';
import {
  fakeuserList,
  fakeChatHistory,
  fakeChatHistoryTwo
} from "../utils/constants.js";

import { Swiper, Scrollbar, Manipulation, Mousewheel} from 'swiper';
import defaultImage from '../images/defaultuser.svg';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

import Section from "../components/Section.js";
import ChatRoom from "../components/ChatRoom.js";
import Chat from "../components/Chat.js";
import ChatList from "../components/ChatList.js";

// Swiper.use([Scrollbar, Mousewheel]);
const chatSwiper = new Swiper('.swiper', {
  modules: [Scrollbar, Mousewheel, Manipulation],
  watchOverflow: true,
  direction: "vertical",
  speed: 220,

  // refuses to work:

  slidesPerView: "auto",
  centeredSlides:false,
  freeMode: true,
  mousewheel: {
    eventsTarget: '.chat',
    enabled: true,
    sensitivity: 9.9,
    releaseOnEdges: true,
  },

  scrollbar: {
    el: "swiper-scrollbar",
    draggable: true,
    dragSize: 600
  },
  autoHeight: true
});

const uglyClassList = {
  formClass: '.form',
  switchClass: '.form__switch-link',
  visableClass: 'form_visable',
}


//creating chat list from array for now

const chatRoomList = new Section('.chatlist__list');
const activeChat = new Chat('.chat');

const chatRooms = fakeuserList.map(user => {
  const room = new ChatRoom(
  {
    user: user,
    clickHandler: () => {
      room.activate();
      activeChat.switchRoom(user)
    },
    renderChatRoom: (_) => {chatRoomList.add(_)},
  })
  return room;
});

const chatList = new ChatList('chatlist__item_active');