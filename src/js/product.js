export default class Product {
  constructor(id, name, price, discount, quantity,
    maxAvailable, isSeveralWarehouses = false, deliveryData,
    color, size, img, unavailableImg, warehouse, entity) {
    this.id = id;
    this.name = name;
    this.price = +price;
    this.discount = +discount;
    this.discountedPrice = price*((100 - discount)/100);
    this.quantity = +quantity;
    this.totalDiscountedPrice = this.discountedPrice * this.quantity;
    this.totalStandardPrice = this.price * this.quantity;
    this.maxAvailable = +maxAvailable;
    this.deliveryData = deliveryData;
    this.isSeveralWarehouses = isSeveralWarehouses;
    this.warehouse = warehouse;
    this.entity = entity;
    this.img = img;
    this.unavailableImg = unavailableImg;
    this.color = color;
    this.size = size;
    this.isSelected = false;
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
    this.totalDiscountedPrice = this.discountedPrice * this.quantity;
    this.totalStandardPrice = this.price * this.quantity;
  }

  toggleSelected () {
    this.selected = !this.selected;
  }

}