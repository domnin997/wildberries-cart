export default class Product {
  constructor(id, name, price, discount, quantity,
    maxAvailable, severalWarehouses = false, color, size, img, warehouse, entity) {
    this.id = id;
    this.name = name;
    this.price = +price;
    this.discount = +discount;
    this.discountedPrice = price*((100 - discount)/100);
    this.quantity = +quantity;
    this.totalDiscountedPrice = this.discountedPrice * this.quantity;
    this.totalStandardPrice = this.price * this.quantity;
    this.maxAvailable = +maxAvailable;
    this.severalWarehouses = severalWarehouses;
    this.warehouse = warehouse;
    this.entity = entity;
    this.img = img;
    // this.warehouseLim = warehouseLim;
    this.color = color;
    this.size = size;
    this.selected = false;
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