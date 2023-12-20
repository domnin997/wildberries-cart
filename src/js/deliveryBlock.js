const deliveryProductsBlock = document.querySelector('.delivery-producst');

export const updateDeliveryBlock = function (productsArray) {
    deliveryProductsBlock.innerHTML = ` `;
    productsArray.forEach((product) => {
    const productCard = deliveryProductCardTemplate.content.cloneNode(true);
    productCard.querySelector('.product-img-delivery').src = product.img;
    productCard.querySelector('.delivery-products__number').innerText = product.quantity;
    productCard.querySelector('.delivery-products__number').classList.remove('hidden')
    deliveryProductsBlock.append(productCard);
  })
}