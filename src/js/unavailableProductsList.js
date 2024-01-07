import { getDOMElements } from "./DOMElements.js";
import getWordForm from '../utils/utils.js';
const {unavailableListHeader, unavailableList,
       showHideUnavailableIcon} = getDOMElements();

export const createUnavailableProductsList = function (state) {
  const productsArray = state.getData();
  let wordForm;
  function _deleteProduct (index) {
    productsArray.splice(index, 1);
  }
  function _updateHeader () {
    wordForm = getWordForm(productsArray.length, ['товар', 'товара', 'товаров'])
    unavailableListHeader.innerText = `Отсутствуют · ${productsArray.length} ${wordForm}`;
  }

  productsArray.forEach((product) => {
    const productCard = unavailableProductTemplate.content.cloneNode(true);
    const productPicture = productCard.querySelector('.product__picture');
    const productName = productCard.querySelector('.product-info__name');
    const productSpecifications = productCard.querySelectorAll('.product-info__specs-item');
    const deleteBtns = productCard.querySelectorAll('.delete-icon');
    const favIcons = productCard.querySelectorAll('.fav-icon');

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        _deleteProduct(productsArray.indexOf((el) => {el.id === product.id}));
        _updateHeader();
        btn.closest('.products-list-item').remove();
      })
    })

    favIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('added-to-favorite');
      })
    })

    if (product.size) {
      productSpecifications[1].innerText = `Размер: ${product.size}`;
    }

    if (product.color) {
      productSpecifications[0].innerText = `Цвет: ${product.color}`;
    }

    productPicture.src = product.unavailableImg;
    productName.innerText = product.name;

    unavailableList.append(productCard);
  })

  showHideUnavailableIcon.addEventListener('click', () => {
    if (productsArray.length) {
      unavailableList.classList.toggle('hidden');
      showHideUnavailableIcon.classList.toggle('rotate180');
    }
  })
  _updateHeader();
}