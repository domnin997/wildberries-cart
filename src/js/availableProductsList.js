const productsList = document.querySelector('.products-container__products-list');
import { updateTotalPrice } from './totalBlock.js';
import { updateDeliveryBlock } from './deliveryBlock.js';
import { getDOMElements } from "./DOMElements.js";

const {showHideAvailableIcon, openHeaderText, 
       openHeaderCheckbox, closedHeader, cartCounter,
       availableHeaderCheckbox} = getDOMElements();

export default function renderProductsList (appState) {
  
  appState.getData().forEach((product) => {
    const productCard = productCardTemplate.content.cloneNode(true);
    const name = productCard.querySelector('.product-info__name');
    const img = productCard.querySelector('.product__picture');
    const standardPrice = productCard.querySelectorAll('.js__standard-price');
    const discountedPriceBlock = productCard.querySelectorAll('.js__discounted-price');
    const quantity = productCard.querySelector('.counter__number');
    const plusBtn = productCard.querySelector('.plus-button');

    const favIcons = productCard.querySelectorAll('.fav-icon');

    const deleteBtns = productCard.querySelectorAll('.delete-icon');
    const minusBtn = productCard.querySelector('.minus-button');
    const productSpecifications = productCard.querySelectorAll('.product-info__specs-item');
    const productSpecsContainer = productCard.querySelector('.product-info__specs');
    const warehouseBlock = productCard.querySelector('.product-info__location-warehouse');
    const entityBlock = productCard.querySelector('.product-info__entity');
    const checkBox = productCard.querySelector('.product__checkbox');
    const checkBoxLabel = productCard.querySelector('.product__label');
    const productsLeft = productCard.querySelector('.quantity-container__prod-left');
    const locationIcon = productCard.querySelector('.product-info__location-icon');

    const tooltip = productCard.querySelector('.entity-tooltip');
    const tooltipName = productCard.querySelector('.entity-name');
    const tooltipNumber = productCard.querySelector('.entity-number');
    const tooltipAddress = productCard.querySelector('.entity-address');

    const discountTooltip = productCard.querySelector('.discount-tooltip');
    const discountPercent = productCard.querySelector('.discount-percent');
    const discountSum = productCard.querySelector('.discount-sum');

    plusBtn.addEventListener('click', () => {
      product.increaseQuantity();
      quantity.innerText = product.quantity;
      updateProductCardInfo();
      updatePageInfo(appState.getData());
    })

    minusBtn.addEventListener('click', () => {
      product.decreaseQuantity();
      quantity.innerText = product.quantity;
      updateProductCardInfo();
      updatePageInfo(appState.getData());
    })
    
    checkBoxLabel.addEventListener('click', () => {
      product.toggleSelected();
      checkBox.checked = !checkBox.checked;
      updatePageInfo(appState.getData());
      updateHeaderCheckbox();
    })

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        appState.deleteProduct(product.id);
        btn.closest('.products-list-item').remove();
        updatePageInfo(appState.getData());
        updateCartCounter();
      })
    })

    favIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('added-to-favorite');
      })
    })

    standardPrice.forEach((price) => {
      price.addEventListener('mouseover', () => {
        discountTooltip.classList.remove('hidden');
      })
      price.addEventListener('mouseout', () => {
        discountTooltip.classList.add('hidden');
      })
    })

    locationIcon.addEventListener('mouseover', () => {
      tooltip.classList.remove('hidden');
    })
    locationIcon.addEventListener('mouseout', () => {
      tooltip.classList.add('hidden');
    })

    if (product.isSelected) {
      checkBox.checked = true;
    }
    if (product.size) {
      productSpecifications[1].innerText = `Размер: ${product.size}`;
    }
    if (product.color) {
      productSpecifications[0].innerText = `Цвет: ${product.color}`;
    }
    if (!product.color && !product.size) {
      productSpecsContainer.classList.add('hidden');
    }
    if (product.maxAvailable < 5) {
      productsLeft.innerText = `Осталось ${product.maxAvailable} шт.`;
    } else {
      productsLeft.classList.add('hidden');
    }

    img.src = product.img;
    name.innerText = product.name;
    quantity.innerText = product.quantity;
    warehouseBlock.innerText = product.warehouse;
    entityBlock.innerText = product.entity;

    tooltipName.innerText = product.entity;
    tooltipNumber.innerText = product.entityNum;
    tooltipAddress.innerText = product.entityAddress;

    discountPercent.innerText = `Скидка ${product.discount}%`;
    discountSum.innerText = `−${(product.price*(product.discount/100)).toLocaleString()} сом`;
    
    updateProductCardInfo();
    productsList.append(productCard);

    function updateProductCardInfo () {
      discountedPriceBlock.forEach((container) => {
        container.innerText = product.totalDiscountedPrice.toLocaleString();
        if (product.totalDiscountedPrice.toLocaleString().length > 11) {
          container.classList.add('small-letters');
        } else {
          container.classList.remove('small-letters');
        }
      })
      standardPrice.forEach((container) => {
        container.innerText = product.totalStandardPrice.toLocaleString();
      });
    }
  })  

  showHideAvailableIcon.addEventListener('click', () => {
    openHeaderText.classList.toggle('hidden');
    openHeaderCheckbox.classList.toggle('hidden');
    closedHeader.classList.toggle('hidden');
    showHideAvailableIcon.classList.toggle('rotate180');
    productsList.classList.toggle('hidden');
  })

  function updatePageInfo (productsArray) {
    updateDeliveryBlock(productsArray);
    updateTotalPrice(productsArray);
  }

  function updateCartCounter () {
    const numberOfProducts = appState.getData().length;
    if (numberOfProducts > 0) {
      cartCounter.innerText = numberOfProducts;

    } else if (numberOfProducts === 0) {
      cartCounter.classList.add('hidden');
    }
  }

  function updateHeaderCheckbox () {
    if (appState.getData().every((product) => {return product.isSelected === true})) {
      availableHeaderCheckbox.checked = true;
    } else {
      availableHeaderCheckbox.checked = false;
    }
  }

  function handleHeaderCheckboxClick () {
    openHeaderCheckbox.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.product__checkbox');
      if (availableHeaderCheckbox.checked === true) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        })
        appState.getData().forEach((product) => {
          product.isSelected = false;
        })
        openHeaderCheckbox.checked = !openHeaderCheckbox.checked;
      } else {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = true;
        })
        appState.getData().forEach((product) => {
          product.isSelected = true;
        })
        openHeaderCheckbox.checked = !openHeaderCheckbox.checked;
      }
    updatePageInfo(appState.getData());
    })
  }
  updatePageInfo(appState.getData());
  updateHeaderCheckbox();
  handleHeaderCheckboxClick();
}