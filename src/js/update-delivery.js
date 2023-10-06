function updateDeliveryBlock (goodsArr, index, mobileCounters, desktopCounters, delDates, delProdConts) {
    
    let numOfGoods = goodsArr[index].numberOfGoods;
    
    function hideElement (element) {
        element.classList.add('hidden');
    }

    function showElement (element) {
        element.classList.remove('hidden');
    }

    if (numOfGoods === 1) {
        hideElement(mobileCounters[index]);
        hideElement(desktopCounters[index]);
    } else if (goodsArr[index].diffWarehouses) {
        
        if (numOfGoods > goodsArr[index].warehouseLimit) {
                
            delDates[1].classList.remove('hidden');
            delDates[3].classList.remove('hidden');
            delProdConts[1].classList.remove('hidden');
            delProdConts[3].classList.remove('hidden');

                if (numOfGoods - 184 === 1) {
                    hideElement(mobileCounters[3]);
                    hideElement(desktopCounters[3]);
                } else {
                    showElement(mobileCounters[3]);
                    showElement(desktopCounters[3]);

                        mobileCounters[3].innerText = `${numOfGoods - 184}`;
                        desktopCounters[3].innerText = `${numOfGoods - 184}`;
                }
               
        } else {
            hideElement(delDates[1])
            hideElement(delDates[3])
            hideElement(delProdConts[1])
            hideElement(delProdConts[3])

                if (numOfGoods === 1) {
                    hideElement(mobileCounters[index]);
                    hideElement(desktopCounters[index]);
                } else {
                    showElement(mobileCounters[index]);
                    showElement(desktopCounters[index]);
                    mobileCounters[index].innerText = `${numOfGoods}`;
                    desktopCounters[index].innerText = `${numOfGoods}`;
                }
                
        }
    } else {
        showElement(mobileCounters[index]);
        showElement(desktopCounters[index]);
        mobileCounters[index].innerText = `${numOfGoods}`;
        desktopCounters[index].innerText = `${numOfGoods}`;
    }

    // if (numOfGoods <= 184) {
    //     mobileCounters[index].innerText = `${numOfGoods}`;
    //     desktopCounters[index].innerText = `${numOfGoods}`;
    //     delDates[1].classList.add('hidden');
    //     delDates[3].classList.add('hidden');
    //     delProdConts[1].classList.add('hidden');
    //     delProdConts[3].classList.add('hidden');
    // } else {
    //     mobileCounters[3].innerText = `${numOfGoods - 184}`;
    //     desktopCounters[3].innerText = `${numOfGoods - 184}`;
    //     delDates[1].classList.remove('hidden');
    //     delDates[3].classList.remove('hidden');
    //     delProdConts[1].classList.remove('hidden');
    //     delProdConts[3].classList.remove('hidden');
    // }
}

export const updDelivery = updateDeliveryBlock;