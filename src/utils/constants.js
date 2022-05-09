export {fakeuserList, fakeChatHistory, fakeChatHistoryTwo};
import defaultImage from '../images/defaultuser.svg';

const fakeChatHistory = [
  {
    self: false,
    text: 'раз!',
    date: 'вечер',
  },
  {
    self: true,
    text: 'Два!',
    date: 'ночь',
  },
  {
    self: false,
    text: 'Три!',
    date: 'утро',
  },
]

const fakeChatHistoryTwo = [
  {
    self: false,
    text: 'chetire!',
    date: '00:99',
  },
  {
    self: true,
    text: 'pyat`!',
    date: '00:02',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:03',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:03',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:03',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:03',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:03',
  },
  {
    self: false,
    text: 'SHEST`!',
    date: '00:03',
  },
]

const fakeuserList = [
  {
    userName: 'User1',
    userPic: defaultImage,
    history: fakeChatHistory
  },
  {
    
    userName: 'User2',
    userPic: defaultImage,
    history: fakeChatHistoryTwo
  }
]

