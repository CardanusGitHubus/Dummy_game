import {Message, MessageSelf} from "../scripts/message.js";
import './index.css';

import defaultImage from '../images/defaultuser.svg';

import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';

const chatSwiper = new Swiper('.swiper',{
  modules: [Scrollbar],
  direction: "vertical",
  slidesPerView: "auto",
  centeredSlides:false,
  loop:false,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});

const fakeMessageHistory = [
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

const uglyClassList = {
  formClass: '.form',
  switchClass: '.form__switch-link',
  visableClass: 'form_visable',
}

const loginForms = Array.from(document.querySelectorAll(uglyClassList.formClass));

const toggleForm = (elements, visableClass) => {
  elements.forEach((elem) => elem.classList.toggle(visableClass));
};


const createToggleListeners = (elements) => {
  elements.forEach((element) => {
    const toggleButton = element.querySelector(uglyClassList.switchClass);
    toggleButton.addEventListener('click', (evt) =>{
      evt.preventDefault();
      toggleForm(loginForms, uglyClassList.visableClass);
    }); 
  });
};

window.onload = createToggleListeners(loginForms);

// creating message on load
// all code here to be refactored to separete Chat class
const chatForm = document.querySelector('.chat__form');
const chatWrapper = document.querySelector('.chat__wrapper');
const chatInput = chatForm.querySelector('.chat__textarea');
const chatFormButton = chatForm.querySelector('.chat__button_send');

const handleSubmit = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  if (chatInput.value !='') chatWrapper.append(new MessageSelf(chatInput.value, defaultImage).getElement());
  chatInput.value = '';
}

fakeMessageHistory.forEach(element => 
  chatWrapper.append((element.self? new MessageSelf(element.text) :new Message(element.text, defaultImage)).getElement())
);

const testMessage = new Message('HI Im form JS', defaultImage);
chatWrapper.append(testMessage.getElement());

chatForm.addEventListener('submit', _ => handleSubmit(_));
chatFormButton.addEventListener('click', _ => handleSubmit(_));
chatInput.addEventListener('keydown', (evt) => {
  if (evt.keyCode == 13) handleSubmit(evt);
  
});