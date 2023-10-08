function getElements () {

    return {
        mobDelCount: document.querySelectorAll('.delivery-products__number-mobile'),
        deskDelCount: document.querySelectorAll('.delivery-products__number'),
        deliveryDates: document.querySelectorAll('.delivery-date'),
        deliveryProductsConts: document.querySelectorAll('.delivery-products-cont'),
        delProdImgCont: document.querySelectorAll('.delivery-products__img-cont'),
        counterFields: document.querySelectorAll('.counter__number'),
        currentPrices: document.querySelectorAll('.product-price__value'),
        currentPricesMobile: document.querySelectorAll('.product-price__value-mobile'),
        oldPrices: document.querySelectorAll('.product-price__old-value-desktop'),
        oldPricesMobile: document.querySelectorAll('.product-price__old-value-mobile'),
        headerCheckbox: document.querySelector('.products-header__checkbox'),
        productsCheckboxes: document.querySelectorAll('.product__checkbox'),
        availItems: document.querySelectorAll('.available-item'),
        prodNumIcon: document.querySelector('.menu-icons__number-of-items'),
        showHideIcons: document.querySelectorAll('.products-header__icon'),
        unavailHeader: document.querySelector('.unavailable-header'),
        prodLists: document.querySelectorAll('.products-list'),
        unavailItems: document.querySelectorAll('.unavailable-item'),
        availHeaderCheckbox: document.querySelector('.header__label'),
        availHeaderText: document.querySelector('.products-header__text'),
        availClosedHeader: document.querySelector('.added-products-total__closed'),
        addressBtns: document.querySelectorAll('.change-address-btn'),
        modalOverlay: document.querySelector('.modal-overlay'),
        addressSelectors: document.querySelectorAll('.change-address__list-selector'),
        courierAddresses: document.querySelectorAll('.courier-add'),
        pickPointAddresses: document.querySelectorAll('.pick-point-add'),
        pickPointHeader1: document.querySelector('.pick-point'),
        pickPointHeader2: document.querySelector('.total-delivery__text'),
        pickPointTimeRating: document.querySelectorAll('.pick-point-info__time-rating'),
        changeAddressBtn: document.querySelector('.change-address__button'),
        deliveryAddress1: document.querySelector('.pick-point-info__address'),
        deliveryAddress2: document.querySelector('.total-delivery__address'),
    };
}

export const getDOMElements = getElements;