function getElements () {

    return {
        mobDelCount: document.querySelectorAll('.delivery-products__number-mobile'),
        deskDelCount: document.querySelectorAll('.delivery-products__number'),
        deliveryDates: document.querySelectorAll('.delivery-date'),
        deliveryProductsConts: document.querySelectorAll('.delivery-products-cont'),
        delProdImgCont: document.querySelectorAll('.delivery-products__img-cont'),
        counterFields: document.querySelectorAll('.counter__number'),
        minusBtns: document.querySelectorAll('.minus-button'),
        plusBtns: document.querySelectorAll('.plus-button'),
        currentPrices: document.querySelectorAll('.product-price__value'),
        currentPricesMobile: document.querySelectorAll('.product-price__value-mobile'),
        oldPrices: document.querySelectorAll('.product-price__old-value-desktop'),
        oldPricesMobile: document.querySelectorAll('.product-price__old-value-mobile'),
        headerCheckbox: document.querySelector('.products-header__checkbox'),
        productsCheckboxes: document.querySelectorAll('.product__checkbox'),
        availItems: document.querySelectorAll('.available-item'),
        prodNumIcon: document.querySelectorAll('.menu-icons__number-of-items'),
        showHideIcons: document.querySelectorAll('.products-header__icon'),
        unavailHeader: document.querySelector('.unavailable-header'),
        prodLists: document.querySelectorAll('.products-list'),
        unavailItems: document.querySelectorAll('.unavailable-item'),
        availHeaderCheckbox: document.querySelector('.header__label'),
        availHeaderText: document.querySelector('.products-header__text'),
        availClosedHeader: document.querySelector('.added-products-total__closed'),
        modalOverlay: document.querySelector('.modal-overlay'),

        changeAddrBtns: document.querySelectorAll('.change-address-btn'),
        changeAddrWindow: document.querySelector('.change-address'),
        closeAddrWindow: document.querySelector('.change-address__close-wrap'),
        addrListSelectors: document.querySelectorAll('.change-address__list-selector'),
        courierAddresses: document.querySelectorAll('.courier-add'),
        pickPointAddresses: document.querySelectorAll('.pick-point-add'),
        deliveryAddrHeader1: document.querySelector('.pick-point'),
        deliveryAddrHeader2: document.querySelector('.total-delivery__text'),
        pickPointTimeRating: document.querySelectorAll('.pick-point-info__time-rating'),
        confirmAddrBtn: document.querySelector('.confirm-address-btn'),
        deliveryAddress1: document.querySelector('.pick-point-info__address'),
        deliveryAddress2: document.querySelector('.total-delivery__address'),
        
        changeCardBtns: document.querySelectorAll('.change-card-button'),
        changeCardWindow: document.querySelector('.change-card'),
        cardsLabels: document.querySelectorAll('.cards-list-item'),
        closeCardWindow: document.querySelector('.change-card__close-wrap'),
        confirmCard: document.querySelector('.change-card-btn'),
        paySysIcons: document.querySelectorAll('.payment-system'),

        orderBtnNoSum: document.querySelector('.no-sum'),
        orderBtnWithSum: document.querySelector('.with-sum'),
        orderLabel: document.querySelector('.order-label'),
        orderCheckBox: document.querySelector('.total-checkbox'),
        paymentDetOutro: document.querySelector('.payment-details__outro'),
        paymentDetOutroTotal: document.querySelector('.total-card__payment-option-info'),

        inputFields: document.querySelectorAll('.client-input-block__type-field'),
        inputUpLabels: document.querySelectorAll('.client-input-block__up-label'),
        inputDownLabels: document.querySelectorAll('.client-input-block__down-label'),
        orderBtn: document.querySelectorAll('.total-order-btn'),

    };
}

export const getDOMElements = getElements;