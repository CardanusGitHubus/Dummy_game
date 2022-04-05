const uglyClassList = {
  formClass: '.form',
  switchClass: '.form__switch-link',
  visableClass: 'form_visable',
}

const loginForms = Array.from(document.querySelectorAll(uglyClassList.formClass));

const toggleForm = (elements, visableClass) => {
  elements.forEach((elem) => elem.classList.toggle(uglyClassList.visableClass));
};

const createToggleListeners = (elements) => {
  elements.forEach((element) => {
    const toggleButton = element.querySelector(uglyClassList.switchClass);
    toggleButton.addEventListener('click', (evt) =>{
      evt.preventDefault();
      toggleForm(loginForms);
    }); 
  });
};

window.onload = createToggleListeners(loginForms);