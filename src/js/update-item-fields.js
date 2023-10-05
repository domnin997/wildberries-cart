function updateItemField (countFields, currPriceFields, currPriceMobFields, oldPriceFields, oldPriceMobFields, index, prodArr) {
    
    countFields[index].innerText = `${prodArr[index].numberOfGoods}`;
    currPriceFields[index].innerText = `${prodArr[index].totalPrice}`;
    currPriceMobFields[index].innerText = `${prodArr[index].totalPrice}`;
    oldPriceFields[index].innerText = `${prodArr[index].totalOldPrice}`;
    oldPriceMobFields[index].innerText = `${prodArr[index].totalOldPrice}`;

}

export const updateListItem = updateItemField;