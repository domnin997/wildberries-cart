import productData from '../productData.json' assert {type: "json"};
import Product from './product.js';
import { createUnavailableProductsList } from './unavailableProductsList.js';
import {handleAddressChange} from './addressChanger.js';
import { handleCardChanges } from './cardChanger.js';
import renderProductsList from './availableProductsList.js';

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

createUnavailableProductsList(state)

renderProductsList(state)