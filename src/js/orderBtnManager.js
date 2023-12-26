import { getDOMElements } from "./DOMElements.js";

const {btnWithSum, btnNoSum, payNowLabel, cardOutroBlocks} = getDOMElements();

export const manageOrderBtn = function () {
  payNowLabel.addEventListener('click', () => {
    btnWithSum.classList.toggle('hidden');
    btnNoSum.classList.toggle('hidden');
    cardOutroBlocks.forEach((block) => {
      block.classList.toggle('hidden');
    });
  })
}