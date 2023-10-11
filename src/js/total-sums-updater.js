function updateTotal (arrOfGoods) {
    let totalPr = 0,
        totalNum = 0,
        totalOld = 0;

        arrOfGoods.forEach((good) => {
            if (good.selected && good.displayed) {
                totalPr += good.totalPrice;
                    totalNum += good.numberOfGoods;
                        totalOld += good.totalOldPrice;
            }
        })
    
    let totalDiscount = (totalOld - totalPr).toLocaleString();

    totalOld = totalOld.toLocaleString();
    totalPr = totalPr.toLocaleString('ru');
    totalNum = totalNum.toLocaleString();

    document.querySelector('.total-price__value').innerText = `${totalPr}`;
    document.querySelector('.order-sum').innerText = `${totalPr}`;
    document.querySelector('.added-products-total__closed-price').innerText = `${totalPr} сом`;
    document.querySelector('.added-products-total__closed-number').innerText = `${totalNum} товаров`;
    document.querySelector('.total-price__details-num').innerText = `${totalNum}`;
    document.querySelector('.total-price__details-old').innerText = `${totalOld}`;
    document.querySelector('.total-price__details-discount-value').innerText = `−${totalDiscount}`;

}

function updateTotalOld (arrOfGoods) {
    let totalOld = 0;
        arrOfGoods.forEach((good) => {
            if (good.selected && good.displayed) {
                totalOld += good.totalOldPrice;
            }
        })
    return totalOld;
}

function changeSelected (arrOfGoods, index) {
    if (arrOfGoods[index].selected) {
        arrOfGoods[index].selected = false;
    } else {
        arrOfGoods[index].selected = true;
    }
}

export const changeSelectedF = changeSelected;
export const updateTotalFunc = updateTotal;
export const updateTotalOldFunc = updateTotalOld;