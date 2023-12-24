export const getDOMElements = function () {
  return {
    totalDiscountedPriceBlock: document.querySelector('.total-price__value'),
    totalStandardPriceBlock: document.querySelector('.total-price__details-old'),
    totalDiscountBlock: document.querySelector('.total-price__details-discount-value'),
    totalQuantityBlock: document.querySelector('.total-price__details-num'),
    totalQuantityTextBlock: document.querySelector('.total-price__details-text'),

    deliveryDatesBlock: document.querySelector('.delivery-subheaders__dates'),
    deliveryProductsContainer: document.querySelector('.delivery-products-container'),
    mobileProductsContainers: document.querySelectorAll('.delivery-products-container-mobile'),

    closedListHeaderNumber: document.querySelector('.added-products-total__closed-number'),
    closedListHeaderPrice: document.querySelector('.added-products-total__closed-price'),
  }
}