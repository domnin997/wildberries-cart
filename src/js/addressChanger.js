// спустить в компонент функцию по удалению адреса из массива состояния
// спустить фуункцию по изменению selected
const linesContainer = document.querySelector('.change-address__list-addresses');

export const createAddressList = function (addressesArray) {
  linesContainer.innerHTML = '<h3 class="change-address__list-addresses-h3">Мои адреса</h3>'
  addressesArray.forEach((data) => {
    const addressLine = addressLineTemplate.content.cloneNode(true);
    const addressText = addressLine.querySelector('.change-address__point-address');
    const ratingContainer = addressLine.querySelector('.change-address__rating-container');
    const ratingScoreContainer = addressLine.querySelector('.rating-score');
    
    addressText.innerText = data.address;

    if (data.rating !== undefined && data.rating === null) {
        ratingScoreContainer.innerText = '';
    } else if (data.rating) {
        ratingScoreContainer.innerText = data.rating;
    } else {
        ratingContainer.classList.add('hidden');
    }
    linesContainer.append(addressLine);
  })
}