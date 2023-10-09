import { getDOMElements } from "./DOMElements.js";

const {inputFields, inputUpLabels, inputDownLabels, orderBtn} = getDOMElements();

let userName,
    userSurname,
    userEmail,
    userTel,
    userTIN,
    clicked = false;

const userData = [userName, userSurname, userEmail, userTel, userTIN];
const validated = [false, false, false, false, false];

function hideError (i) {
    inputFields[i].classList.remove('incorrect-input');
    inputDownLabels[i].classList.add('label-not-displayed');
}

function showError (i) {
    inputFields[i].classList.add('incorrect-input');
    inputDownLabels[i].classList.remove('label-not-displayed');
}

function validateInput (i) {

    if (i === 0 || i === 1) {
        const regex = new RegExp(/^[а-яА-ЯёЁ ]+$/);

        if (userData[i] === '' && clicked) {
            showError(i);
            inputDownLabels[i].innerText = 'Укажите имя';
        }
        
        else if (userData[i] === '') {
            hideError(i);
        } 
        
        else if (regex.test(userData[i])) {
            hideError(i); 
        } 
        
        else if (userData[i] !== '') {
            showError(i);
            inputDownLabels[i].innerText = 'Используйте кириллицу';
        }
    } else if (i === 2) {

        if (userData[i] === '') {
            showError(i);
            inputDownLabels[i].innerText = 'Укажите почту';
        } else if (userData[i].includes('@')) {
            hideError(i);
        } else if (userData[i] !== '') {
            showError(i);
            inputDownLabels[i].innerText = 'Формат mail@mail.mail';
        }
    } else if (i === 3) {
        const regex = new RegExp(/\+7\s\d{3}\s\d{3}-\d{2}-\d{2}/);

        if (regex.test(userData[i])) {
            hideError(i);
        } else {
            showError(i);
        }
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
                if (validated[i]) {
                    validateInput(i);
                }
            }
        })

        input.addEventListener('change', () => {
            userData[i] = input.value;
                validated[i] = true;
                //     validateInput(i);
                        console.log(i, `потерял фокус чейндж`);
        })

        input.addEventListener('blur', () => {
            userData[i] = input.value;
                validateInput(i);
     
            console.log(i, `потерял фокус`)
        })

    })

    orderBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            clicked = true;
            userData.forEach((el, i) => {
                userData[i] = inputFields[i].value;
                    validateInput(i);
            }) 
            
        });
    })
}

export const manageClientInputs = manageInputs;