import { addFavDelDecor } from "./fav-del-icons-decor.js";
import { goodsArr } from "./products-constructor.js";
import { changeSelectedF, updateTotalFunc, updateTotalOldFunc} from "./total-sums-updater.js";
import { updateListItem } from "./item-fields-updater.js";
import { toggleAvailHeader } from "./avail-header-toggler.js";
import { updDelivery, deleteDeliveryElement, showHideDelEl } from "./delivery-block-manager.js";
import { getDOMElements } from './DOMElements.js';
import { manageUnavailList } from "./unavail-list-manager.js";
import { manageCardChange } from "./card-changer.js";
import { manageOrderBtn } from "./order-btn-manager.js";
import { manageClientInputs } from "./inputs-manager.js";
import { secondAddrFunc } from "./addresses.js";
import { manageToolTips } from "./tooltips.js";

const {
    mobDelCount, deskDelCount, deliveryDates, deliveryProductsConts,
    delProdImgCont, counterFields, currentPrices, currentPricesMobile,
    oldPrices, oldPricesMobile, headerCheckbox, productsCheckboxes,
    availItems, prodNumIcon, showHideIcons, prodLists, availHeaderCheckbox,
    availHeaderText, availClosedHeader, minusBtns, plusBtns
} = getDOMElements();

let localProdArr = goodsArr;

addFavDelDecor();
manageUnavailList();
secondAddrFunc();
manageCardChange();
manageOrderBtn();
manageClientInputs();
manageToolTips();

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
                if (goodsArr[index].numberOfGoods === goodsArr[index].maxAvailable) {
                    plusBtns[index].classList.add('counter__button-light');
                } 
                if (goodsArr[index].numberOfGoods > 1) {
                    minusBtns[index].classList.remove('counter__button-light');
                }
        
        } else if (event.target.classList.contains('minus-button')) {
            goodsArr[index].countMinus();
             updateListItem(counterFields, currentPrices, currentPricesMobile, oldPrices, oldPricesMobile, index, goodsArr)
              updateTotalFunc(goodsArr);
               updDelivery(goodsArr, index, mobDelCount, deskDelCount, deliveryDates, deliveryProductsConts);
               if (goodsArr[index].numberOfGoods < goodsArr[index].maxAvailable) {
                    plusBtns[index].classList.remove('counter__button-light');
                } 
                if (goodsArr[index].numberOfGoods === 1) {
                    minusBtns[index].classList.add('counter__button-light');
                }
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

    productLabels.forEach((label, i) => label.addEventListener('click', (event) => {
      event.preventDefault();
        toggleCheckbox(productsCheckboxes[i]);
          if (!productsCheckboxes[i].checked) {
              removeHeaderCheck();
          }
          if (Array.from(productsCheckboxes).every((checkbox) => checkbox.checked === true)) {
            headerCheckbox.checked = true;
          }
           changeSelectedF(goodsArr, i);
            updateTotalFunc(goodsArr);
             updateTotalOldFunc(goodsArr);
              showHideDelEl(goodsArr, i, deliveryDates, deliveryProductsConts, delProdImgCont);          
    }))

function firstTimePageLoad () {
    headerCheckbox.checked = true;
        goodsArr.forEach((el) => {
            el.selected = true;
        });
            updateCheck();
            updateTotalFunc(goodsArr);
}

firstTimePageLoad();