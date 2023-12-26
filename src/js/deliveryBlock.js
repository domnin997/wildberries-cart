import { getDOMElements } from "./DOMElements.js";
const {deliveryDatesBlock, deliveryProductsContainer, mobileProductsContainers,
       freeBackDelivery, backdeliveryTooltips} = getDOMElements();

export const updateDeliveryBlock = function (productsArray) {
  deliveryDatesBlock.innerHTML = '';
  deliveryProductsContainer.innerHTML = '';
  mobileProductsContainers[0].innerHTML = '';

  let isSeveralWarehouses = false;
  if (productsArray.length > 0) {
    const productLine = createProductsLine();

    const deliveryLines = document.createElement('div');
          deliveryLines.classList.add('delivery-date');
          deliveryLines.innerText = '5—6 февраля';
    deliveryDatesBlock.append(deliveryLines);

    productsArray.forEach((product) => {
      let quantity = product.quantity;

      if (product.deliveryData.isSeveralDates) {
        isSeveralWarehouses = true;
        quantity = product.deliveryData.warehouseLimit;
      }
      const newDesktopCard = createProductCard(product.img, quantity);
      productLine.append(newDesktopCard);

      const newMobileCard = createProductCard(product.img, quantity);
      mobileProductsContainers[0].append(newMobileCard);   
    })
    deliveryProductsContainer.append(productLine);

    if (isSeveralWarehouses) {
      const secondLine = createProductsLine();
      secondLine.append(createProductCard('./img/iphone-case.png', 16))
      deliveryProductsContainer.append(secondLine);
      mobileProductsContainers[1].append(createProductCard('./img/iphone-case.png', 16))
    }
  }



  productsArray.forEach((product) => {
    if (product.deliveryData.isSeveralDates) {
      isSeveralWarehouses = true;
    }
    createProductCard(product.img, product.quantity);
  })

  if (productsArray.length > 0) {
    deliveryDatesBlock.innerHTML = ``;
    const deliveryLines = document.createElement('div');
          deliveryLines.classList.add('delivery-date');
          deliveryLines.innerText = '5—6 февраля';
    deliveryDatesBlock.append(deliveryLines);
    if (isSeveralWarehouses) {
      const deliveryLines2 = document.createElement('div');
      deliveryLines2.classList.add('delivery-date');
      deliveryLines2.innerText = '7—8 февраля';
      deliveryDatesBlock.append(deliveryLines2);
    }
  }
}

export const handleBackDeliveryTooltip = function () {
  freeBackDelivery.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      console.log('Yep')
    })
  })
}

function createProductCard (img, quantity) {
  const productCard = deliveryProductCardTemplate.content.cloneNode(true);
    productCard.querySelector('.product-img-delivery').src = img;
    productCard.querySelector('.delivery-products__number').innerText = quantity;
    productCard.querySelector('.delivery-products__number').classList.remove('hidden')
    return productCard;
}

function createProductsLine () {
  const productLine = document.createElement('div');
        productLine.classList.add('delivery-products');
  return productLine;
}