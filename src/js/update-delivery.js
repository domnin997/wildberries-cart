function updateDeliveryBlock (goodsArr, index, mobileCounters, desktopCounters, delDates, delProdConts) {
    
    let numOfGoods = goodsArr[index].numberOfGoods;
    
    function hideElement (element) {
        element.forEach((el) => {
            el.classList.add('hidden');
        })
    }

    function showElement (element) {
        element.forEach((el) => {
            el.classList.remove('hidden');
        })
    }

    if (numOfGoods === 1) {
        hideElement([mobileCounters[index], desktopCounters[index]]);

    } else if (goodsArr[index].diffWarehouses) {
        
        if (numOfGoods > goodsArr[index].warehouseLimit) {
            showElement([delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);

                if (numOfGoods - 184 === 1) {
                    hideElement([mobileCounters[3], desktopCounters[3]]);
                } else {
                    
                    showElement([mobileCounters[3], desktopCounters[3]]);
                        mobileCounters[3].innerText = `${numOfGoods - 184}`;
                        desktopCounters[3].innerText = `${numOfGoods - 184}`;
                }
               
        } else {
            
            hideElement([delDates[1], delDates[3], delProdConts[1], delProdConts[3]]);

                if (numOfGoods === 1) {
                    hideElement([mobileCounters[index], desktopCounters[index]]);

                } else {
                    showElement([mobileCounters[index], desktopCounters[index]]);
                        mobileCounters[index].innerText = `${numOfGoods}`;
                        desktopCounters[index].innerText = `${numOfGoods}`;
                }  
        }
    } else {
        showElement([mobileCounters[index], desktopCounters[index]]);
            mobileCounters[index].innerText = `${numOfGoods}`;
            desktopCounters[index].innerText = `${numOfGoods}`;
    }
}

function showHideElement (goodsArr, index, delDates, delProdConts, imgConts) {
    
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

    if (goodsArr[index].selected && goodsArr[index].displayed) {
        
        showElement([delDates[0], delDates[2], delProdConts[0], delProdConts[2]]);
        showElement ([imgConts[index], imgConts[index + 4]]);

        if (goodsArr[index].numberOfGoods > 184) {
            showElement([delDates[0], delDates[2], delProdConts[1], delProdConts[3]]);
            showElement([imgConts[3], imgConts[7]]);
        }

    } else if (!goodsArr[index].selected && goodsArr[index].displayed) {
        
        if (goodsArr.every((el) => el.selected === false)) {
            hideElement(delDates);
            hideElement(delProdConts);
        }

        hideElement([imgConts[index], imgConts[index + 4]]);
        
        if (goodsArr[index].numberOfGoods > 184) {
            hideElement([delDates[0], delDates[2], delProdConts[1], delProdConts[3]]);
            hideElement ([imgConts[3], imgConts[7]]);
        }
    }
}

export const showHideDelEl = showHideElement;
export const updDelivery = updateDeliveryBlock;