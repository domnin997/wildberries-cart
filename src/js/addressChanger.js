import addressData from '../data/deliveryAddresses.json' assert {type: "json"};

const changeAddressModal = document.querySelector('.change-address');
const linesContainer = document.querySelector('.change-address__list-addresses');
const pointsBtn = document.querySelector('.pick-points');
const courierBtn = document.querySelector('.courier-address');
const modalOverLay = document.querySelector('.modal-overlay');
const changeAddressBtns = document.querySelectorAll('.js__change-address-btn');
const pointAddressContainer = document.querySelector('.pick-point-info__address');
const totalAddressContainer = document.querySelector('.total-delivery__address');
const confirmAddress = document.querySelector('.confirm-address-btn');
const pointRatingContainer = document.querySelector('.pick-point-info__time-rating');
const addressHeader =  document.querySelector('.pick-point');

let pointsAddresses = [...addressData.pointAddresses];
let courierAddresses = [...addressData.courierAddresses];

let isCourierAddress = false;
let currentSelected;

function handlePointDelete (id) {
  const updatedArray = pointsAddresses.filter((address) => {
    return address.id !== id;
  })
  pointsAddresses = updatedArray;
}

function handleCourierDelete (id) {
  const updatedArray = courierAddresses.filter((address) => {
    return address.id !== id;
  })
  courierAddresses = updatedArray;
}

function handlePointSelection (index) {
  currentSelected = pointsAddresses[index];
}

function handleCourierSelection (index) {
  currentSelected = courierAddresses[index];
}

function changeSelected () {

  if (isCourierAddress) {
    courierAddresses.forEach((address) => {
      if (address.id === currentSelected.id) {
        address.isSelected = true;
      } else {
        address.isSelected = false;
      }
      pointRatingContainer.classList.add('hidden')
      addressHeader.innerText = 'Курьером'
    })
  } else {
    pointsAddresses.forEach((address) => {
      if (address.id === currentSelected.id) {
        address.isSelected = true;
      } else {
        address.isSelected = false;
      }
      pointRatingContainer.classList.remove('hidden')
      addressHeader.innerText = 'Пункт выдачи'
    })
  }
  pointAddressContainer.innerText = currentSelected.address;
  totalAddressContainer.innerText = currentSelected.address;
  modalOverLay.classList.remove('displayed');
}

export const createAddressList = function (addressesArray, deleteHandler, selectionHandler) {
  linesContainer.innerHTML = '<h3 class="change-address__list-addresses-h3">Мои адреса</h3>'
  addressesArray.forEach((data, index) => {
    const addressLine = addressLineTemplate.content.cloneNode(true);
    const addressText = addressLine.querySelector('.change-address__point-address');
    const ratingContainer = addressLine.querySelector('.change-address__rating-container');
    const ratingScoreContainer = addressLine.querySelector('.rating-score');
    const deleteIcon = addressLine.querySelector('.change-address__delete-icon');
    const radioSelector = addressLine.querySelector('.change-address__stock-radio');
    
    addressText.innerText = data.address;

    deleteIcon.addEventListener('click', (e) => {
      e.target.closest('.change-address__list-item').remove();
      deleteHandler(data.id); 
    })

    if (data.isSelected) {
      radioSelector.checked = true;
    }

    if (data.rating !== undefined && data.rating === null) {
        ratingScoreContainer.innerText = '';
    } else if (data.rating) {
        ratingScoreContainer.innerText = data.rating;
    } else {
        ratingContainer.classList.add('hidden');
    }
    linesContainer.append(addressLine);

    radioSelector.addEventListener('click', () => {
      selectionHandler(index);
    })
  })
}

export const handleAddressChange = function () {
  changeAddressBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOverLay.classList.add('displayed');
      changeAddressModal.classList.toggle('hidden');
      createAddressList(pointsAddresses, handlePointDelete, handlePointSelection);
    })
  })
  modalOverLay.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      modalOverLay.classList.remove('displayed');
      changeAddressModal.classList.remove('hidden')
      courierBtn.classList.remove('selected');
      pointsBtn.classList.add('selected');
      isCourierAddress = false;
    }
  })
  pointsBtn.addEventListener('click', () => {
    isCourierAddress = false;
    courierBtn.classList.remove('selected');
    pointsBtn.classList.add('selected');
    createAddressList(pointsAddresses, handlePointDelete, handlePointSelection);
  })
  courierBtn.addEventListener('click', () => {
    isCourierAddress = true;
    courierBtn.classList.add('selected');
    pointsBtn.classList.remove('selected');
    createAddressList(courierAddresses, handleCourierDelete, handleCourierSelection);
  })
  confirmAddress.addEventListener('click', changeSelected);
}