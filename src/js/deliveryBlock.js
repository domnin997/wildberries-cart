const deliveryProductsBlock = document.querySelector('.delivery-producst');
const deliveryDatesBlock = document.querySelector('.delivery-details__dates');

export const updateDeliveryBlock = function (productsArray) {
  deliveryDatesBlock.innerHTML = '';
  deliveryProductsBlock.innerHTML = '';

  let isSeveralWarehouses = false;
  if (productsArray.length > 0) {

    const deliveryLines = document.createElement('div');
          deliveryLines.classList.add('delivery-date');
          deliveryLines.innerText = '5—6 февраля';
    deliveryDatesBlock.append(deliveryLines);

    productsArray.forEach((product) => {

    })
  }



  productsArray.forEach((product) => {
    if (product.deliveryData.isSeveralDates) {
      console.log(product.deliveryData)
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

function createProductCard (img, quantity) {
  const productCard = deliveryProductCardTemplate.content.cloneNode(true);
    productCard.querySelector('.product-img-delivery').src = img;
    productCard.querySelector('.delivery-products__number').innerText = quantity;
    productCard.querySelector('.delivery-products__number').classList.remove('hidden')
    deliveryProductsBlock.append(productCard);
}