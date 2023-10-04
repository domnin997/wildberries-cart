class Product {
    constructor(standardPrice, discountedPrice, numberOfGoods, maxAvailable) {
        this.standardPrice = standardPrice;
        this.discountedPrice = discountedPrice;
        this.numberOfGoods = numberOfGoods;
        this.maxAvailable = maxAvailable;
        this.totalPrice = numberOfGoods*discountedPrice;
        this.totalOldPrice = numberOfGoods*standardPrice;
    }

    updateTotal () {
        this.totalPrice = this.numberOfGoods*this.discountedPrice;
        this.totalOldPrice = this.numberOfGoods*this.standardPrice;
    }

    countPlus () {
        if (this.numberOfGoods < this.maxAvailable) {
            ++this.numberOfGoods
                this.updateTotal();
        } else {
            console.log('Превышен лимит');
        }
    }

    countMinus () {
        if (this.numberOfGoods > 1) {
            --this.numberOfGoods
                this.updateTotal();
        } else {
            console.log('Достигнут минимум')
        }
    }
}

function countingFunc() {

let phoneCases = new Product (11500.235, 10500.235, 200, 3000);
let shirts = new Product (1051, 522, 1, 2);
let pencils = new Product (475, 247, 2, 2);

let productsArr = [shirts, phoneCases, pencils];

let counterFields = document.querySelectorAll('.counter__number'),
    currentPrices = document.querySelectorAll('.product-price__value'),
    currentPricesMobile = document.querySelectorAll('.product-price__value-mobile'),
    oldPrices = document.querySelectorAll('.product-price__old-value-desktop'),
    oldPricesMobile = document.querySelectorAll('.product-price__old-value-mobile');

function updItem (index) {
    counterFields[index].innerText = `${productsArr[index].numberOfGoods}`;
    currentPrices[index].innerText = `${productsArr[index].totalPrice}`;
    currentPricesMobile[index].innerText = `${productsArr[index].totalPrice}`;
    oldPrices[index].innerText = `${productsArr[index].totalOldPrice}`;
    oldPricesMobile[index].innerText = `${productsArr[index].totalOldPrice}`;
}

document.querySelectorAll('.products-list-item').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('plus-button')) {
            productsArr[index].countPlus();
                updItem(index);
        } else if (event.target.classList.contains('minus-button')) {
            productsArr[index].countMinus();
                updItem(index);
        }
    })
})

}

export const countingFuncI = countingFunc;