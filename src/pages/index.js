import './index.css';
import {
  fakeuserList,
} from "../utils/constants.js";

import {Swiper, Navigation, Pagination, Scrollbar, EffectCoverflow, Mousewheel } from 'swiper';


import 'swiper/bundle';

import ChatController from "../components/ChatController.js";

//still refuses to work
const swiperChat = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination, Scrollbar, EffectCoverflow, Mousewheel ],
  direction: "vertical",

  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
const controller = new ChatController(fakeuserList);