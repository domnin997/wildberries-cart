function updateDeliveryBlock (goodsArr, index, mobileCounters, desktopCounters, delDates, delProdConts) {
    
    const numOfGoods = goodsArr[index].numberOfGoods,
          warehouseLim = goodsArr[index].warehouseLim;
    
    function hideElement (elements) {
        elements.forEach((el) => {
            el.classList.add('hidden');
        });
    }

    function showElement (elements) {
        elements.forEach((el) => {
            el.classList.remove('hidden');
        });
    }

    if (numOfGoods === 1) {
        hideElement([mobileCounters[index], desktopCounters[index]]);

    } else if (!goodsArr[index].severalWarehouses) {
        showElement([mobileCounters[index], desktopCounters[index]]);
            mobileCounters[index].innerText = `${numOfGoods}`;
            desktopCounters[index].innerText = `${numOfGoods}`;

    } else if (goodsArr[index].severalWarehouses) {
        if (numOfGoods <= warehouseLim) {
            hideElement([delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);
            showElement([mobileCounters[index], desktopCounters[index]]);
                mobileCounters[index].innerText = `${numOfGoods}`;
                desktopCounters[index].innerText = `${numOfGoods}`;
        } else {
            if (goodsArr[index].selected) {
                showElement([delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);
            }
            
            if (numOfGoods - warehouseLim === 1) {
                hideElement([mobileCounters[3], desktopCounters[3]]);
            } else {
                showElement([mobileCounters[3], desktopCounters[3]]);
                    mobileCounters[3].innerText = `${numOfGoods - warehouseLim}`;
                    desktopCounters[3].innerText = `${numOfGoods - warehouseLim}`;
            }
        }
    }
} 

function showHideElement (goodsArr, index, delDates, delProdConts, imgConts) {
    const good = goodsArr[index],
          numOfGoods = goodsArr[index].numberOfGoods,
          warehouseLim = goodsArr[index].warehouseLim;

    function hideElement (element) {
        element.forEach ((e) => {
            e.classList.add('hidden');
        });
    }

    function showElement (element) {
        element.forEach ((e) => {
            e.classList.remove ('hidden');
        });
    }

    if (good.selected && good.displayed) {
        showElement([delDates[0], delDates[2], delProdConts[0], delProdConts[2]]);
        showElement ([imgConts[index], imgConts[index + 4]]);

        if (numOfGoods > warehouseLim) {
            showElement([delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);
        }

    } else if (!good.selected && good.displayed) {
        
        if (goodsArr.every((el) => el.selected === false)) {
            hideElement(delDates);
            hideElement(delProdConts);
        }

        hideElement([imgConts[index], imgConts[index + 4]]);
        
        if (numOfGoods > warehouseLim) {
            hideElement([delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);
        }
    }
}

function deleteElement (goodsArr, index, delDates, delProdConts, imgConts) {
    const good = goodsArr[index];

    function removeElement (elements) {
        elements.forEach((el) => {
            el.remove();
        })
    }

    if (!good.displayed) {
        removeElement([imgConts[index], imgConts[index+4]]);
    }

    if (good.numberOfGoods > good.warehouseLim) {
        removeElement([imgConts[3], imgConts[7], delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);
    }

    if (goodsArr.every((el) => el.displayed === false)) {
        removeElement(delProdConts);
        removeElement(delDates);
    }
}

export const deleteDeliveryElement = deleteElement;
export const showHideDelEl = showHideElement;
export const updDelivery = updateDeliveryBlock;