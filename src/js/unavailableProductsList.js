const unavailList = document.querySelector('.unavailable-list');

export const createUnavailableProductsList = function (state) {

  state.getData().forEach((product) => {
    const productCard = unavailableProductTemplate.content.cloneNode(true);
    const productPicture = productCard.querySelector('.product__picture');
    const productName = productCard.querySelector('.product-info__name');
    const productSpecifications = productCard.querySelectorAll('.product-info__specs-item');
    const deleteBtns = productCard.querySelectorAll('.delete-icon');

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.closest('.products-list-item').remove();
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

    unavailList.append(productCard);
  })
}