import productData from '../productData.json' assert {type: "json"};
import Product from './product.js';
import { updateTotalPrice } from './totalBlock.js';
import { updateDeliveryBlock } from './deliveryBlock.js';
const productsList = document.querySelector('.products-container__products-list');

let goodsArray = [];

productData.forEach((good) => {
  const newProduct = new Product(
    good.id, good.name, good.price, good.discount, good.quantity,
    good.maxAvailable, good.isSeveralWarehouses, good.delivaryData, good.color,
    good.size, good.img, good.warehouse, good.entity);
    goodsArray.push(newProduct);
})

function deleteProduct (productsArray, deleteId) {
  let updatedArray;
  updatedArray = productsArray.filter((product) => {
    return product.id !== deleteId;
  })
  goodsArray = [...updatedArray];
}

function createProductList () {
  goodsArray.forEach((good) => {
    const productCard = productCardTemplate.content.cloneNode(true);
    const productName = productCard.querySelector('.product-info__name');
    const productImg = productCard.querySelector('.product__picture');
    const productPrice = productCard.querySelector('.product-price__value');
    const quantity = productCard.querySelector('.counter__number');
    const plusBtn = productCard.querySelector('.plus-button');
    const deleteBtns = productCard.querySelectorAll('.delete-icon');
    const productSpecifications = productCard.querySelectorAll('.product-info__specs-item');
    const warehouseBlock = productCard.querySelector('.product-info__location-warehouse');
    const entityBlock = productCard.querySelector('.product-info__entity');
    
    plusBtn.addEventListener('click', () => {
        good.increaseQuantity();
        quantity.innerText = good.quantity;
        productPrice.innerText = good.price*good.quantity;
        updateDeliveryBlock(goodsArray);
        updateTotal();
    });
    
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        deleteProduct(goodsArray, good.id);
        btn.closest('.products-list-item').remove();
        updateDeliveryBlock(goodsArray);
        updateTotal();
      })
    })

    if (good.size) {
        console.log(productSpecifications)
        productSpecifications[1].innerText = `Размер: ${good.size}`;
    }
    if (good.color) {
        console.log(good.size, good.name)
        productSpecifications[0].innerText = `Цвет: ${good.color}`;
    }
    productImg.src = good.img;
    productName.innerText = good.name;
    productPrice.innerText = good.price*good.quantity;
    quantity.innerText = good.quantity;
    warehouseBlock.innerText = good.warehouse;
    entityBlock.innerText = good.entity;
    productsList.append(productCard);
  })
}

function updateTotal () {
  updateTotalPrice(goodsArray);
}

updateDeliveryBlock(goodsArray);
createProductList();