import { getDOMElements } from "./DOMElements.js";

const {upperInputLabel, lowerInputLabel, clientInputFields, totalOrderBtns} = getDOMElements();
let orderBtnClicked = false;

let userName, userSurname, userEmail, userTel, userTIN = false;
const userData = [userName, userSurname, userEmail, userTel, userTIN];
const validated = [false, false, false, false, false];

function hideError (i) {
  clientInputFields[i].classList.remove('incorrect-input');
  lowerInputLabel[i].classList.add('hidden-label');
}

function showError (i) {
  clientInputFields[i].classList.add('incorrect-input');
  lowerInputLabel[i].classList.remove('hidden-label');
}

function validateInput (i) {
  if (i === 0 || i === 1) {
    // const regex = new RegExp(/(^[а-яА-ЯёЁ ]+$)/); regex.test(userData[i]) && 
      if (userData[i] === '' && orderBtnClicked) {
        showError(i);
        if (i === 0) {
          lowerInputLabel[i].innerText = 'Укажите имя';
        } else {
          lowerInputLabel[i].innerText = 'Укажите фамилию';
        }
      } else if (userData[i] === '') {
        hideError(i);
      } else if (userData[i].trim().length > 0) {
        hideError(i);
      } else if (userData[i] !== '') {
        showError(i);
        if (i === 0) {
            lowerInputLabel[i].innerText = 'Укажите имя';
          } else {
            lowerInputLabel[i].innerText = 'Укажите фамилию';
          }
      }
  } else if (i === 2) {
    let emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})$/iu;
    
    if (userData[i] === '' && orderBtnClicked) {
      showError(i);
      lowerInputLabel[i].innerText = 'Укажите почту';
    } else if (userData[i] === '') {
      hideError(i);
    } else if (emailReg.test(userData[i])) {
      hideError(i);
    } else if (userData[i] !== '') {
      showError(i);
      lowerInputLabel[i].innerText = 'Формат mail@mail.mail';
    }
  } else if (i === 3) {
    const regex = new RegExp(/\+\d{1}\s\d{3}\s\d{3}-\d{2}-\d{2}/);
    if (userData[i] === '' && orderBtnClicked) {
      showError(i);
      lowerInputLabel[i].innerText = 'Укажите телефон';
    } else if (userData[i] === '') {
      hideError(i);
    } else if (regex.test(userData[i])) {
      hideError(i);
    } else if (userData[i] !== '') {
      showError(i);
      lowerInputLabel[i].innerText = 'Формат +7 999 999-99-99';
    } 
  } else if (i === 4) {
    const regex = new RegExp(/^\d{14}$/);
    
    if (userData[i] === '' && orderBtnClicked) {
      showError(i);
      lowerInputLabel[i].innerText = 'Укажите ИНН';
      lowerInputLabel[i].style.color = 'rgb(245, 81, 35)';
    } else if (userData[i] === '') {
      hideError(i);
    } else if (regex.test(userData[i])) {
      hideError(i);
    } else if (userData[i] !== '') {
      showError(i);
      lowerInputLabel[i].innerText = 'Формат - 14 цифр';
      lowerInputLabel[i].style.color = 'rgb(245, 81, 35)';
    } 
  }  
}

function manageInputs ( ) {
  clientInputFields.forEach((input, i) => {   
    input.addEventListener('input', () => {
      if (!input.value) {
        upperInputLabel[i].classList.add('hidden-label');
        userData[i] = input.value;
      } else {
        upperInputLabel[i].classList.remove('hidden-label');
        userData[i] = input.value;
        if (validated[i]) {
          validateInput(i);
        }
      }
    })
    input.addEventListener('change', () => {
      userData[i] = input.value;
        validated[i] = true;
    })
    input.addEventListener('blur', () => {
      userData[i] = input.value;
        validateInput(i);
    })
    if (i === 4) {
      input.addEventListener('keypress', (e) => {
        if (!/\d/.test(e.key) || input.value.length === 14)
          e.preventDefault();
      })
    }
    if (i === 3) {
      input.addEventListener('keypress', (e) => {
        if (!/\d/.test(e.key)) {
          e.preventDefault();
        } else if (input.value.length === 0) {
          input.value += `+${input.value}`;
        } else if (input.value.length === 2) {
          input.value = `${input.value} `;
        } else if (input.value.length === 6) {
          input.value = `${input.value} `;
        } else if (input.value.length === 10) {
          input.value = `${input.value}-`;
        } else if (input.value.length === 13) {
          input.value = `${input.value}-`;
        } else if (input.value.length === 16) {
          e.preventDefault();
        }
      })
    }
  })
  totalOrderBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      orderBtnClicked = true;
      let top = clientInputFields[0].getBoundingClientRect().top;
      window.scrollBy({
        top: top - 50,
        behavior: 'smooth'
      });
      userData.forEach((el, i) => {
        userData[i] = clientInputFields[i].value;
          validateInput(i);
      })   
    });
  })
}
export const manageClientInputs = manageInputs;