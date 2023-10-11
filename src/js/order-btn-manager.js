import { getDOMElements } from "./DOMElements.js";

const {orderBtnNoSum, orderBtnWithSum, orderLabel, paymentDetOutro, paymentDetOutroTotal} = getDOMElements();

function orderBtn () {
    orderLabel.addEventListener('click', () => {
        
        if (orderBtnNoSum.classList.contains('hidden')) {
            [orderBtnNoSum, paymentDetOutro, paymentDetOutroTotal].forEach((el) => {
                el.classList.remove('hidden');
            })
            orderBtnWithSum.classList.add('hidden');
                
        } else {
            [orderBtnNoSum, paymentDetOutro, paymentDetOutroTotal].forEach((el) => {
                el.classList.add('hidden');
            })
            orderBtnWithSum.classList.remove('hidden');
        }
    })
}

export const manageOrderBtn = orderBtn;