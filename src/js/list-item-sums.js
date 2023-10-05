class Product {
    constructor(standardPrice, discountedPrice, numberOfGoods, maxAvailable) {
        this.standardPrice = standardPrice;
        this.discountedPrice = discountedPrice;
        this.numberOfGoods = numberOfGoods;
        this.maxAvailable = maxAvailable;
        this.totalPrice = numberOfGoods*discountedPrice;
        this.totalOldPrice = numberOfGoods*standardPrice;
        this.selected = false;
        this.displayed = true;
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

let phoneCases = new Product (11500.235, 10500.235, 200, 3000);
let shirts = new Product (1051, 522, 1, 2);
let pencils = new Product (475, 247, 2, 2);

let productsArr = [shirts, phoneCases, pencils];


export const goodsArr = productsArr;