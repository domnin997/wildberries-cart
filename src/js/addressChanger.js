import addressData from '../data/deliveryAddresses.json' assert {type: "json"};
import { getDOMElements } from "./DOMElements.js";

const {changeAddressBtns, changeAddressModal, linesContainer, pointsListSelector, courierListSelector,
       modalOverLay, confirmAddress, pointRatingContainer, deliveryTypeContainers,
       deliveryAddressContainers, deliveryTypeContainerTotal } = getDOMElements();

let pointsAddresses = [...addressData.pointAddresses];
let courierAddresses = [...addressData.courierAddresses];

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

let isCourierListSelected = false;
let currentSelected;

export const handleAddressChange = function () {
  changeAddressBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOverLay.classList.add('displayed');
      changeAddressModal.classList.remove('hidden');
      createAddressList(pointsAddresses, handlePointDelete, handlePointSelection);
    })
  })
  modalOverLay.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      modalOverLay.classList.remove('displayed');
      changeAddressModal.classList.add('hidden');
      courierListSelector.classList.remove('selected');
      pointsListSelector.classList.add('selected');
      isCourierListSelected = false;
    }
  })
  pointsListSelector.addEventListener('click', () => {
    courierListSelector.classList.remove('selected');
    pointsListSelector.classList.add('selected');
    isCourierListSelected = false;
    createAddressList(pointsAddresses, handlePointDelete, handlePointSelection);
  })
  courierListSelector.addEventListener('click', () => {
    courierListSelector.classList.add('selected');
    pointsListSelector.classList.remove('selected');
    isCourierListSelected = true;
    createAddressList(courierAddresses, handleCourierDelete, handleCourierSelection);
  })
  confirmAddress.addEventListener('click', handleChangeSelected);
}

function handleChangeSelected () {
  if (isCourierListSelected) {
    courierAddresses.forEach((address) => {
      if (address.id === currentSelected.id) {
        address.isSelected = true;
      } else {
        address.isSelected = false;
      }
      pointRatingContainer.classList.add('hidden')
      deliveryTypeContainers.forEach((container) => {
        container.innerText = 'Курьером';
      })
      deliveryTypeContainerTotal.innerText = 'Доставка курьером';
    })
  } else {
    pointsAddresses.forEach((address) => {
      if (address.id === currentSelected.id) {
        address.isSelected = true;
      } else {
        address.isSelected = false;
      }
      pointRatingContainer.classList.remove('hidden');
      deliveryTypeContainers.forEach((container) => {
        container.innerText = 'Пункт выдачи';
      })
      deliveryTypeContainerTotal.innerText = 'Доставка в пункт выдачи';
    })
  }
  deliveryAddressContainers.forEach((container) => {
    container.innerText = currentSelected.address;
  })
  modalOverLay.classList.remove('displayed');
}

function createAddressList (addressesArray, deleteHandler, selectionHandler) {
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