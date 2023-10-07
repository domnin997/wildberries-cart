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
    };
}

export const getDOMElements = getElements;