// function updateTotalSum (productsArray) {
//     let totalSum = 0;
//     let checkboxes = document.querySelectorAll('.product__checkbox'),
//         totalPriceCont = document.querySelector('.total-price__value');

//     if (checkboxes.length === 0) {
//         totalPriceCont.innerText = totalSum;
//         console.log(totalSum)
//     } else {
//         checkboxes.forEach((checkbox, index) => {
//             if (checkbox.checked) {
//                 totalSum += productsArray[index].totalPrice;
//             }
//         });
        
//         totalPriceCont.innerText = totalSum;
//     }
// }



// function countingFunc(productsArr, updTotal) {

// let phoneCases = new Product (11500.235, 10500.235, 200, 3000);
// let shirts = new Product (1051, 522, 1, 2);
// let pencils = new Product (475, 247, 2, 2);

// let productsArr = [shirts, phoneCases, pencils];





// let counterFields = document.querySelectorAll('.counter__number'),
//     currentPrices = document.querySelectorAll('.product-price__value'),
//     currentPricesMobile = document.querySelectorAll('.product-price__value-mobile'),
//     oldPrices = document.querySelectorAll('.product-price__old-value-desktop'),
//     oldPricesMobile = document.querySelectorAll('.product-price__old-value-mobile');

// function updItem (index) {
//     counterFields[index].innerText = `${productsArr[index].numberOfGoods}`;
//     currentPrices[index].innerText = `${productsArr[index].totalPrice}`;
//     currentPricesMobile[index].innerText = `${productsArr[index].totalPrice}`;
//     oldPrices[index].innerText = `${productsArr[index].totalOldPrice}`;
//     oldPricesMobile[index].innerText = `${productsArr[index].totalOldPrice}`;
// }

// document.querySelectorAll('.products-list-item').forEach((item, index) => {
//     item.addEventListener('click', (event) => {
//         if (event.target.classList.contains('plus-button')) {
//             productsArr[index].countPlus();
//                 updItem(index);
//                     updTotal(productsArr);
//         } else if (event.target.classList.contains('minus-button')) {
//             productsArr[index].countMinus();
//                 updItem(index);
//                     updTotal(productsArr);
//         }
//     })
// })

// }

// export const countingFuncI = countingFunc;