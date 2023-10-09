import { getDOMElements } from "./DOMElements.js";

const {inputFields, inputUpLabels, inputDownLabels, orderBtn} = getDOMElements();

let userName,
    userSurname,
    userEmail,
    userTel,
    userTIN,
    clicked = false;

const userData = [userName, userSurname, userEmail, userTel, userTIN];

function validateInput () {
    const regex = new RegExp(/^[а-яА-ЯёЁ]+$/);
    

    if (regex.test(userData[0])) {
        inputFields[0].classList.remove('incorrect-input');
        inputDownLabels[0].classList.add('label-not-displayed');
        console.log(userData[0], 'Пройдено')
    } else {
        console.log(userData[0], 'Не пройдено');
        inputFields[0].classList.add('incorrect-input');
        inputDownLabels[0].classList.remove('label-not-displayed');
    }
}

function manageInputs ( ) {

    inputFields.forEach((input, i) => {
        
        input.addEventListener('input', () => {
            if (!input.value) {
                inputUpLabels[i].classList.add('label-not-displayed');
                userData[i] = input.value;
            } else {
                inputUpLabels[i].classList.remove('label-not-displayed');
                userData[i] = input.value;
                if (clicked) {
                    validateInput();
                }
            }
        })

        input.addEventListener('change', () => {
            userData[i] = input.value;
        })

    })

    orderBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            validateInput();
            clicked = true;
        });
    })
}

export const manageClientInputs = manageInputs;