function updateItemField (countFields, currPriceFields, currPriceMobFields, oldPriceFields, oldPriceMobFields, index, prodArr) {

    let totalCurrent = prodArr[index].totalPrice.toLocaleString(),
        totalOld = prodArr[index].totalOldPrice.toLocaleString();

        countFields[index].innerText = `${prodArr[index].numberOfGoods} `;
        currPriceFields[index].innerText = `${totalCurrent}`;
        currPriceMobFields[index].innerText = `${totalCurrent} `;
        oldPriceFields[index].innerText = `${totalOld}`;
        oldPriceMobFields[index].innerText = `${totalOld}`;
}

export const updateListItem = updateItemField;