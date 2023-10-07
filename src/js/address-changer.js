import { getDOMElements } from "./DOMElements.js";
const { addressBtns, modalOverlay } = getDOMElements();

function manageAddressChange () {
    addressBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            modalOverlay.classList.add('displayed');
        });
    });
    modalOverlay.addEventListener('click', (event) => {
        modalOverlay.classList.remove('displayed');
    });
}

export const manageAddressChangeF = manageAddressChange;