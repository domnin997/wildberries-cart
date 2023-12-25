export const getDOMElements = function () {
  return {
    totalDiscountedPriceBlock: document.querySelector('.total-price__value'),
    totalStandardPriceBlock: document.querySelector('.total-price__details-old'),
    totalDiscountBlock: document.querySelector('.total-price__details-discount-value'),
    totalQuantityBlock: document.querySelector('.total-price__details-num'),
    totalQuantityTextBlock: document.querySelector('.total-price__details-text'),
    
    cartCounter: document.querySelector('.menu-icons__number-of-items'),
    payNowLabel: document.querySelector('.order-label'),
    btnNoSum: document.querySelector('.no-sum'),
    btnWithSum: document.querySelector('.with-sum'),
    cardOutroBlocks: document.querySelectorAll('.js__card-outro'),
    totalOrderBtns: document.querySelectorAll('.total-order-btn'),

    deliveryDatesBlock: document.querySelector('.delivery-subheaders__dates'),
    deliveryProductsContainer: document.querySelector('.delivery-products-container'),
    mobileProductsContainers: document.querySelectorAll('.delivery-products-container-mobile'),

    closedListHeaderNumber: document.querySelector('.added-products-total__closed-number'),
    closedListHeaderPrice: document.querySelector('.added-products-total__closed-price'),
    showHideAvailableIcon: document.querySelector('.js__show-hide-available'),
    closedHeader: document.querySelector('.added-products-total__closed'),
    openHeaderText: document.querySelector('.products-header__text'),
    openHeaderCheckbox: document.querySelector('.header__label'),
    availableHeaderCheckbox: document.querySelector('.products-header__checkbox'),

    orderBtnSum: document.querySelector('.order-sum'),

    unavailableList: document.querySelector('.unavailable-list'),
    unavailableListHeader: document.querySelector('.js__unavailable-list-header'),
    showHideUnavailableIcon: document.querySelector('.js__show-hide-unavailable'),

    upperInputLabel: document.querySelectorAll('.input-upper-label'),
    lowerInputLabel: document.querySelectorAll('.input-lower-label'),
    clientInputFields: document.querySelectorAll('.client-input'),
  }
}