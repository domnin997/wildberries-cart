import { addDecorationToFavI, addDecorationToDelI } from "./fav-del-decoration.js";
import { goodsArr } from "./list-item-sums.js";
import { changeSelectedF, updateTotalFunc, updateTotalOldFunc } from "./total-sum.js";
import { updateListItem } from "./update-item-fields.js";
import { showHideLists } from "./show-hide-list.js.js";
import { updDelivery } from "./update-delivery.js";

showHideLists();
let localProdArr = goodsArr;

// countingFuncI(localProdArr);
addDecorationToFavI();
addDecorationToDelI();

// Блок с обновлением превью

let mobDelCount = document.querySelectorAll('.delivery-products__number-mobile'),
    deskDelCount = document.querySelectorAll('.delivery-products__number'),
    deliveryDates = document.querySelectorAll('.delivery-date'),
    deliveryProductsConts = document.querySelectorAll('.delivery-products-cont');


// Блок обновления лист айтемов.

let counterFields = document.querySelectorAll('.counter__number'),
    currentPrices = document.querySelectorAll('.product-price__value'),
    currentPricesMobile = document.querySelectorAll('.product-price__value-mobile'),
    oldPrices = document.querySelectorAll('.product-price__old-value-desktop'),
    oldPricesMobile = document.querySelectorAll('.product-price__old-value-mobile');

// Блок с количеством продуктов

let availItems = document.querySelectorAll('.available-item');
let productsNum = availItems.length;
let prodNumIcon = document.querySelector('.menu-icons__number-of-items');

let headerCheckbox = document.querySelector('.products-header__checkbox'),
    productsCheckboxes = document.querySelectorAll('.product__checkbox');

availItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-icon')) {
            item.remove();
                updateProdNumIcon();
                goodsArr[index].displayed = false;
                if (productsCheckboxes[index].checked == true) {
                        productsCheckboxes[index].checked = false;
                        goodsArr[index].selected = false;
                    }
                    updateTotalFunc(goodsArr);
        }
        
        if (event.target.classList.contains('plus-button')) {
            goodsArr[index].countPlus();
                updateListItem(counterFields, currentPrices, currentPricesMobile, oldPrices, oldPricesMobile, index, goodsArr)
                    updateTotalFunc(goodsArr);
                        updDelivery(goodsArr, index, mobDelCount, deskDelCount, deliveryDates, deliveryProductsConts);
        } else if (event.target.classList.contains('minus-button')) {
            goodsArr[index].countMinus();
                updateListItem(counterFields, currentPrices, currentPricesMobile, oldPrices, oldPricesMobile, index, goodsArr)
                    updateTotalFunc(goodsArr);
                        updDelivery(goodsArr, index, mobDelCount, deskDelCount, deliveryDates, deliveryProductsConts);
        }
    })
})

function updateProdNumIcon () {
    
    availItems = document.querySelectorAll('.available-item');
    productsNum = availItems.length;

    if (productsNum) {
        prodNumIcon.classList.remove('hidden');
        prodNumIcon.innerText = productsNum;
    } else {
        prodNumIcon.classList.add('hidden');
    }
};

updateProdNumIcon();

// Чекбоксы

function changeChecked (element) {
    console.log('invoked');
    if (element.checked) {
        element.checked = false;
    } else {
        element.checked = true;
    }
}

function updateHeaderCheck () {
    if (headerCheckbox.checked) {
        headerCheckbox.checked = false;
    } else {
        headerCheckbox.checked = true;
    }
}

function removeHeaderCheck () {
    headerCheckbox.checked = false;
}

function updateCheck () {
    if (headerCheckbox.checked) {
        productsCheckboxes.forEach((box)=>{
            box.checked = 'true';
        })
    }
}

let headerLabel = document.querySelector('.header__label'),
    productLabels = document.querySelectorAll('.product__label');

    headerLabel.addEventListener('click', (event) => {
        event.preventDefault();
            changeChecked(headerCheckbox);
            goodsArr.forEach((el) => {
                el.selected = true;
            })
                updateCheck();
                updateTotalFunc(goodsArr);
    })

    productLabels.forEach((checkbox, i) => checkbox.addEventListener('click', (event) => {
        event.preventDefault();
            changeChecked(productsCheckboxes[i]);
                if (!productsCheckboxes[i].checked) {
                    removeHeaderCheck();
                }
            changeSelectedF(goodsArr, i);
                updateTotalFunc(goodsArr);
                updateTotalOldFunc(goodsArr);
                console.log(goodsArr);
    }))


headerCheckbox.checked = true;
goodsArr.forEach((el) => {
    el.selected = true;
});
updateCheck();
updateTotalFunc(goodsArr);