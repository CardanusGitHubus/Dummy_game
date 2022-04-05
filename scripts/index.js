const uglyClassList = {
  formClass: '.form',
  visableClass: 'form_visable',
}

const loginForms = Array.from(document.querySelectorAll('.form'));

const toggleForm = (elements, visableClass) => {
  elements.forEach((elem) => elem.classList.toggle(uglyClassList.visableClass));
};

const createToggleListeners = (elements) => {
  elements.forEach((element) => {
    const toggleButton = element.querySelector('.form__switch-link');
    toggleButton.addEventListener('click', (evt) =>{
      evt.preventDefault();
      toggleForm(loginForms);
    }); 
  });
};

window.onload = createToggleListeners(loginForms);