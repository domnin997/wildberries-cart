class Product {
    constructor(standardPrice, discountedPrice, numberOfGoods, maxAvailable, diffWarehouses = false, warehouseLimit = maxAvailable) {
        this.standardPrice = standardPrice;
        this.discountedPrice = discountedPrice;
        this.numberOfGoods = numberOfGoods;
        this.maxAvailable = maxAvailable;
        this.diffWarehouses = diffWarehouses;
        this.warehouseLimit = warehouseLimit;
        this.totalPrice = numberOfGoods*discountedPrice;
        this.totalOldPrice = numberOfGoods*standardPrice;
        this.selected = false;
        this.displayed = true;
    }

    updateTotal () {
        this.totalPrice = this.numberOfGoods*(this.discountedPrice*100)/100;
        this.totalOldPrice = this.numberOfGoods*(this.standardPrice*100)/100;
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

let phoneCases = new Product (11500.235, 10500.235, 200, 3000, true, 184);
let shirts = new Product (1051, 522, 1, 2);
let pencils = new Product (475, 247, 2, 2);

let productsArr = [shirts, phoneCases, pencils];


export const goodsArr = productsArr;