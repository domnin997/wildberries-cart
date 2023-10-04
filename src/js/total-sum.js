
function updateTotalSum (productsArray) {
    let totalSum = 0;
    let checkboxes = document.querySelectorAll('.product__checkbox'),
        totalPriceCont = document.querySelector('.total-price__value');

    if (checkboxes.length === 0) {
        totalPriceCont.innerText = totalSum;
        console.log(totalSum)
    } else {
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                totalSum += productsArray[index].totalPrice;
            }
        });
        console.log(totalSum)
        totalPriceCont.innerText = totalSum;
    }
}

export const updateTotalPrice = updateTotalSum;