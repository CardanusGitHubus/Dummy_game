export {fakeuserList, fakeChatHistory, fakeChatHistoryTwo};
import defaultImage from '../images/defaultuser.svg';

const fakeChatHistory = [
  {
    self: false,
    text: 'раз!',
    date: '00:00',
  },
  {
    self: true,
    text: 'Два!',
    date: '00:00',
  },
  {
    self: false,
    text: 'Три!',
    date: '00:00',
  },
]

const fakeChatHistoryTwo = [
  {
    self: false,
    text: 'chetire!',
    date: '00:00',
  },
  {
    self: true,
    text: 'pyat`!',
    date: '00:00',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:00',
  },
]

const fakeuserList = [
  {
    userName: 'User1',
    userPic: defaultImage,
    history: fakeChatHistory
  },
  {
    
    userName: 'User1',
    userPic: defaultImage,
    history: fakeChatHistoryTwo
  }
]

