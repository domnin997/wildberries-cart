import productData from '../data/productData.json' assert {type: "json"};
import Product from './productConstructor.js';
import { createUnavailableProductsList } from './unavailableProductsList.js';
import {handleAddressChange} from './addressChanger.js';
import { handleCardChanges } from './cardChanger.js';
import { manageOrderBtn } from './orderBtnManager.js';
import renderProductsList from './availableProductsList.js';
import { manageClientInputs } from './inputsValidator.js';

function createState (products) {
  let productsArray = products.map((product) => {
    const newProduct = new Product(
      product.id, product.name, product.price, product.discount,
      product.quantity, product.maxAvailable, product.isSelected,
      product.isSeveralWarehouses, product.delivaryData, product.color,
      product.size, product.img, product.unavailableImg, product.warehouse,
      product.entity);
      
      return newProduct;
  })

  function deleteProduct (id) {
    let updatedArray = productsArray.filter((product) => {
      return product.id !== id;
    })
    productsArray = [...updatedArray];
  }

  function getData () {
    return productsArray;
  }
  return {deleteProduct, getData}
}
const state = createState(productData);
handleAddressChange();
handleCardChanges();
manageOrderBtn();
createUnavailableProductsList(state)

renderProductsList(state)
manageClientInputs();