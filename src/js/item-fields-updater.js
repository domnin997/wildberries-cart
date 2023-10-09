function updateItemField (countFields, currPriceFields, currPriceMobFields, oldPriceFields, oldPriceMobFields, index, prodArr) {

    let totalCurrent = prodArr[index].totalPrice.toLocaleString(),
        totalOld = prodArr[index].totalOldPrice.toLocaleString();

        countFields[index].innerText = `${prodArr[index].numberOfGoods} `;
        currPriceFields[index].innerText = `${totalCurrent}`;
        currPriceMobFields[index].innerText = `${totalCurrent} `;
        oldPriceFields[index].innerText = `${totalOld}`;
        oldPriceMobFields[index].innerText = `${totalOld}`;

    
        if (totalCurrent.length > 8) {
            currPriceFields[index].classList.add('super-small-font');
            currPriceMobFields[index].classList.add('super-small-font');
        } else if (totalCurrent.length > 6) {
            currPriceFields[index].classList.add('smaller-font');
            currPriceMobFields[index].classList.add('smaller-font');
        }
         else {
            currPriceFields[index].classList.remove('smaller-font');
            currPriceMobFields[index].classList.remove('smaller-font');
            currPriceFields[index].classList.remove('super-small-font');
            currPriceMobFields[index].classList.remove('super-small-font');
        }
}

export const updateListItem = updateItemField;