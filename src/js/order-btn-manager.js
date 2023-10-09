import { getDOMElements } from "./DOMElements.js";

const {orderBtnNoSum, orderBtnWithSum, orderLabel, orderCheckBox, paymentDetOutro} = getDOMElements();

function orderBtn () {
    orderLabel.addEventListener('click', (event) => {
        
        if (orderBtnNoSum.classList.contains('hidden')) {
            orderBtnNoSum.classList.remove('hidden');
                orderBtnWithSum.classList.add('hidden');
                paymentDetOutro.classList.remove('hidden');
        } else {
            orderBtnWithSum.classList.remove('hidden');
                orderBtnNoSum.classList.add('hidden');
                paymentDetOutro.classList.add('hidden');
        }
    })
}

export const manageOrderBtn = orderBtn;