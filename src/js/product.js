export default class Product {
  constructor(id, name, price, discount, quantity,
    maxAvailable, isSelected, isSeveralWarehouses = false, deliveryData,
    color, size, img, unavailableImg, warehouse, entity) {
    this.id = id;
    this.name = name;
    this.price = (price*100)/100;
    this.discount = +discount;
    this.discountedPrice = ((price*100)/100)*((100 - discount)/100);
    this.quantity = +quantity;
    this.totalDiscountedPrice = this.quantity * this.discountedPrice;
    this.totalStandardPrice = this.quantity * this.price;
    this.maxAvailable = +maxAvailable;
    this.deliveryData = deliveryData;
    this.isSeveralWarehouses = isSeveralWarehouses;
    this.warehouse = warehouse;
    this.entity = entity;
    this.img = img;
    this.unavailableImg = unavailableImg;
    this.color = color;
    this.size = size;
    this.isSelected = isSelected;
  }
  
  increaseQuantity () {
    if (this.quantity < this.maxAvailable) {
      ++this.quantity;
      this._updateTotalPrices();
    }
  }

  decreaseQuantity () {
    if (this.quantity > 1) {
      --this.quantity;
      this._updateTotalPrices();
    }
  }

  _updateTotalPrices () {
    this.totalDiscountedPrice = this.quantity * (this.discountedPrice*100)/100;
    this.totalStandardPrice = this.quantity * (this.price*100)/100;
  }

  toggleSelected () {
    this.isSelected = !this.isSelected;
  }
}