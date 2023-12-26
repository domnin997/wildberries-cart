import { getDOMElements } from "./DOMElements.js";
import getWordForm from "../utils/utils.js";

const {totalDiscountedPriceBlock, totalStandardPriceBlock, 
       totalDiscountBlock, closedListHeaderNumber, 
       closedListHeaderPrice, totalQuantityBlock, totalDeliveryTooltip, 
       totalQuantityTextBlock, orderBtnSum, totalBackDelivery} = getDOMElements();

export const updateTotalPrice = function (goodsArray) {
  let totalDiscountedPrice = 0;
  let totalStandardPrice = 0;
  let totalDiscount = 0;
  let totalQuantity = 0;

  goodsArray.forEach((good) => {
    if (!good.isSelected) return
    totalDiscountedPrice += good.totalDiscountedPrice;
    totalStandardPrice += good.totalStandardPrice;
    totalQuantity += good.quantity;
  })

  totalDiscount = totalStandardPrice - totalDiscountedPrice;
  const totalProductsText = getWordForm(totalQuantity, ['товар', 'товара', 'товаров'])

  totalDiscountBlock.innerText = totalDiscount.toLocaleString();
  totalDiscountedPriceBlock.innerText = totalDiscountedPrice.toLocaleString();
  orderBtnSum.innerText = totalDiscountedPrice.toLocaleString();
  totalStandardPriceBlock.innerText = totalStandardPrice.toLocaleString();
  updateListHeader(totalDiscountedPrice.toLocaleString(), totalQuantity)
  totalQuantityBlock.innerText = totalQuantity;
  totalQuantityTextBlock.innerText = totalProductsText;
}

function updateListHeader (price, quantity) {
  closedListHeaderPrice.innerText = `${price} сом`;
  closedListHeaderNumber.innerText = `${quantity} товаров`;
}

export const handleTotalTooltip = function () {
  totalBackDelivery.addEventListener('mouseover', () => {
    totalDeliveryTooltip.classList.remove('hidden');
  })
  totalBackDelivery.addEventListener('mouseout', () => {
    totalDeliveryTooltip.classList.add('hidden');
  })
}