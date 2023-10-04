import { shirtPrice } from "./prices.js";
import { addDecorationToFavI, addDecorationToDelI } from "./fav-del-decoration.js";
import { goodsArr, countingFuncI } from "./list-item-sums.js";
import { updateTotalPrice } from "./total-sum.js";

countingFuncI(goodsArr);
addDecorationToFavI();
addDecorationToDelI();

// Блок с количеством продуктов

let availItems = document.querySelectorAll('.available-item');
let productsNum = availItems.length;
let prodNumIcon = document.querySelector('.menu-icons__number-of-items');

availItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-icon')) {
            item.remove();
                updateProdNumIcon();
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
console.log(prodNumIcon);

// Чекбоксы

let headerCheckbox = document.querySelector('.products-header__checkbox'),
    productsCheckboxes = document.querySelectorAll('.product__checkbox');

console.log(productsCheckboxes);

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
                updateCheck();
                updateTotalPrice(goodsArr);
    })

    productLabels.forEach((checkbox, i) => checkbox.addEventListener('click', (event) => {
        event.preventDefault();
            changeChecked(productsCheckboxes[i]);
                if (!productsCheckboxes[i].checked) {
                    removeHeaderCheck();
                }
            updateTotalPrice(goodsArr);
    }))