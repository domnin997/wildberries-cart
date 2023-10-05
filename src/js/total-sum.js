function updateTotal (arrOfGoods) {
    let total = 0;
        arrOfGoods.forEach((good) => {
            if (good.selected && good.displayed) {
                total += good.totalPrice;
            }
        })

    document.querySelector('.total-price__value').innerText = `${total}`;
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