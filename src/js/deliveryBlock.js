import { getDOMElements } from "./DOMElements.js";
const {deliveryDatesBlock, deliveryProductsContainer, backDelivery,
       mobileProductsContainers, backDeliveryTooltip} = getDOMElements();

export const updateDeliveryBlock = function (productsArray) {
  deliveryDatesBlock.innerHTML = '';
  deliveryProductsContainer.innerHTML = '';
  mobileProductsContainers.forEach((container) => {
    container.innerHTML = '';
  });

  let isSeveralWarehouses = false;
  const secondWarehouseProducts = [];
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
        secondWarehouseProducts.push(createProductCard(product.img, product.quantity - product.deliveryData.warehouseLimit, product.id));
      }
      const newDesktopCard = createProductCard(product.img, quantity, product.id);
      productLine.append(newDesktopCard);

      const newMobileCard = createProductCard(product.img, quantity, product.id);
      mobileProductsContainers[0].append(newMobileCard);   
    })
    deliveryProductsContainer.append(productLine);

    if (isSeveralWarehouses) {
      const secondLine = createProductsLine();
      secondWarehouseProducts.forEach((product) => {
        secondLine.append(product);
        mobileProductsContainers[1].append(product);
      })
      deliveryProductsContainer.append(secondLine)
    }
  }
  
  productsArray.forEach((product) => {
    if (product.deliveryData.isSeveralDates) {
      isSeveralWarehouses = true;
    }
    createProductCard(product.img, product.quantity, product.id);
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
  backDelivery.addEventListener('mouseover', () => {
    backDeliveryTooltip.classList.remove('hidden');
  })
  backDelivery.addEventListener('mouseout', () => {
    backDeliveryTooltip.classList.add('hidden');
  })
}

function createProductCard (img, quantity, id) {
  const productCard = deliveryProductCardTemplate.content.cloneNode(true);
    productCard.querySelector('.product-img-delivery').src = img;
    if (quantity > 1) {
      productCard.querySelector('.delivery-products__number').innerText = quantity;
      productCard.querySelector('.delivery-products__number').classList.remove('hidden');
    }
    productCard.querySelector('.delivery-products__img-cont').dataset.id = `${id}`;
    
    return productCard;
}

function createProductsLine () {
  const productLine = document.createElement('div');
        productLine.classList.add('delivery-products');
  return productLine;
}