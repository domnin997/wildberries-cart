const totalDiscountedPriceBlock = document.querySelector('.total-price__value');
const totalStandardPriceBlock = document.querySelector('.total-price__details-old');
const totalDiscountBlock = document.querySelector('.total-price__details-discount-value');

export const updateTotalPrice = function (goodsArray) {
  let totalDiscountedPrice = 0;
  let totalStandardPrice = 0;
  let totalDiscount = 0;

  goodsArray.forEach((good) => {
    totalDiscountedPrice += good.totalDiscountedPrice;
    totalStandardPrice += good.totalStandardPrice;
  })

  totalDiscount = totalStandardPrice - totalDiscountedPrice;
  totalDiscountBlock.innerText = totalDiscount;
  totalDiscountedPriceBlock.innerText = totalDiscountedPrice;
  totalStandardPriceBlock.innerText = totalStandardPrice;
}