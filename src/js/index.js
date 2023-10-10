import { addDecorationToFavI, addDecorationToDelI } from "./fav-del-icons-decor.js";
import { goodsArr } from "./products-constructor.js";
import { changeSelectedF, updateTotalFunc, updateTotalOldFunc } from "./total-sums-updater.js";
import { updateListItem } from "./item-fields-updater.js";
import { toggleAvailHeader } from "./avail-header-toggler.js";
import { updDelivery, deleteDeliveryElement, showHideDelEl } from "./delivery-block-manager.js";
import { getDOMElements } from './DOMElements.js';
import { manageUnavailList } from "./unavail-list-manager.js";
import { manageCardChangeF } from "./card-changer.js";
import { manageOrderBtn } from "./order-btn-manager.js";
import { manageClientInputs } from "./inputs-manager.js";
import { secondAddrFunc } from "./addresses.js";

const {
    mobDelCount, deskDelCount, deliveryDates, deliveryProductsConts,
    delProdImgCont, counterFields, currentPrices, currentPricesMobile,
    oldPrices, oldPricesMobile, headerCheckbox, productsCheckboxes,
    availItems, prodNumIcon, showHideIcons, prodLists, availHeaderCheckbox,
    availHeaderText, availClosedHeader
} = getDOMElements();

let localProdArr = goodsArr;
addDecorationToFavI();
addDecorationToDelI();
manageUnavailList();
secondAddrFunc();
manageCardChangeF();
manageOrderBtn();
manageClientInputs();

// Блок с количеством продуктов
const icon = showHideIcons[0],
      prodList = prodLists[0];
let isDisplayed = true;

let productsNum = availItems.length,
    isAvailDisplayed = true;

function showHideAvailHandler () {
    if (isDisplayed) {
        prodList.classList.add('item-list-hidden');
         isDisplayed = false;
         toggleAvailHeader(isDisplayed, availHeaderCheckbox, availHeaderText, availClosedHeader);
           icon.classList.add('rotate180');

    } else if (!isDisplayed) {
        prodList.classList.remove('item-list-hidden');
         isDisplayed = true;
         toggleAvailHeader(isDisplayed, availHeaderCheckbox, availHeaderText, availClosedHeader);
           icon.classList.remove('rotate180');
    }
}

icon.addEventListener('click', showHideAvailHandler);

availItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        
        if (event.target.classList.contains('delete-icon')) {
            item.remove();
             updateProdNumIcon();
              goodsArr[index].displayed = false;
               if (productsCheckboxes[index].checked === true) {
                       productsCheckboxes[index].checked = false;
                       goodsArr[index].selected = false;
                   }
                updateTotalFunc(goodsArr);
                 deleteDeliveryElement(goodsArr, index, deliveryDates, deliveryProductsConts, delProdImgCont);
                 if (!productsNum) {
                    icon.removeEventListener('click', showHideAvailHandler);
                    isDisplayed = false;
                    toggleAvailHeader(isDisplayed, availHeaderCheckbox, availHeaderText, availClosedHeader);
                    icon.classList.add('rotate180');
                }
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
    
    let availItem = document.querySelectorAll('.available-item');
    productsNum = availItem.length;

    if (productsNum) {
        prodNumIcon.classList.remove('hidden');
        prodNumIcon.innerText = productsNum;
    } else {
        prodNumIcon.classList.add('hidden');
    }
};

updateProdNumIcon();

// Чекбоксы

function toggleCheckbox (element) {
    console.log('Clicked')
    element.checked ? element.checked = false : element.checked = true;
}

function removeHeaderCheck () {
    headerCheckbox.checked = false;
}

function updateCheck () {
    if (headerCheckbox.checked) {
        productsCheckboxes.forEach((box)=>{
            box.checked = true;
            goodsArr.forEach((el) => {
                el.selected = true;
            })
        })
    } else if (!headerCheckbox.checked) {
        productsCheckboxes.forEach((box)=>{
            box.checked = false;
            goodsArr.forEach((el) => {
                el.selected = false;
            })
        })
    }
}

let headerLabel = document.querySelector('.header__label'),
    productLabels = document.querySelectorAll('.product__label');

    headerLabel.addEventListener('click', (event) => {
        event.preventDefault();
        toggleCheckbox(headerCheckbox);
        updateCheck();
        updateTotalFunc(goodsArr);
        productsCheckboxes.forEach((el, i) => {
            showHideDelEl(goodsArr, i, deliveryDates, deliveryProductsConts, delProdImgCont);
        })
    })

    productLabels.forEach((checkbox, i) => checkbox.addEventListener('click', (event) => {
        event.preventDefault();
            toggleCheckbox(productsCheckboxes[i]);
                if (!productsCheckboxes[i].checked) {
                    removeHeaderCheck();
                }
            changeSelectedF(goodsArr, i);
                updateTotalFunc(goodsArr);
                updateTotalOldFunc(goodsArr);
                    showHideDelEl(goodsArr, i, deliveryDates, deliveryProductsConts, delProdImgCont);
                        
    }))


headerCheckbox.checked = true;
goodsArr.forEach((el) => {
    el.selected = true;
});
updateCheck();
updateTotalFunc(goodsArr);