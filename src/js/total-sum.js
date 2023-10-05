function updateTotal (arrOfGoods) {
    let totalPr = 0,
        totalNum = 0;
        arrOfGoods.forEach((good) => {
            if (good.selected && good.displayed) {
                totalPr += good.totalPrice;
                    totalNum += good.numberOfGoods;
            }
        })

    totalPr = totalPr.toLocaleString('ru');

    document.querySelector('.total-price__value').innerText = `${totalPr}`;
    document.querySelector('.added-products-total__closed-price').innerText = `${totalPr} сом`;
    document.querySelector('.added-products-total__closed-number').innerText = `${totalNum.toLocaleString('ru')} товаров`;
}

function updateTotalOld (arrOfGoods) {
    let totalOld = 0;
        arrOfGoods.forEach((good) => {
            if (good.selected && good.displayed) {
                totalOld += good.totalOldPrice;
            }
        })
    console.log(totalOld);
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