import cardsData from '../data/cardsData.json' assert {type: "json"};
import {getDOMElements} from './DOMElements.js';

const {changeCardBtns, modalOverLay, changeCardModal, cardsList,
       confirmCardChange, paymentSystemIcons, cardsNumbers, closeModalBtns} = getDOMElements();

let currentSelectedCard = null;

export const handleCardChange = function () {
  changeCardBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOverLay.classList.add('displayed');
      changeCardModal.classList.remove('hidden');
      createCardsList(cardsData);
    })
  })

  modalOverLay.addEventListener('click', handleModalClose);
  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', handleModalClose)
  })

  confirmCardChange.addEventListener('click', () => {
    cardsData.forEach((card) => {
      if (card.number !== currentSelectedCard.number) {
        card.isSelected = false;
      } else {
        card.isSelected = true;
        cardsNumbers.forEach((field) => {
          field.innerText = card.number;
        })
        paymentSystemIcons.forEach((icon) => {
          icon.src = card.icon;
        })
      }
    })
    modalOverLay.classList.remove('displayed');
    changeCardModal.classList.add('hidden');
  })
}

function handleModalClose (e) {
  if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-modal-icon')) {
    modalOverLay.classList.remove('displayed');
    changeCardModal.classList.add('hidden');
  }
}

function createCardsList () {
  cardsList.innerHTML = '';
  cardsData.forEach((card) => {
    const cardTemplate = cardsListItem.content.cloneNode(true);
    const label = cardTemplate.querySelector('.cards-list-item'),
          paymentIcon = cardTemplate.querySelector('.card-info__payment-system-icon'),
          cardNumber = cardTemplate.querySelector('.card-info__number'),
          cardRadio = cardTemplate.querySelector('.cards-list-item__stock-radio');
    
    paymentIcon.src = card.icon;
    cardNumber.innerText = card.number;
    cardRadio.checked = card.isSelected;
    if (card.isSelected) {
      currentSelectedCard = card;
    }
    label.addEventListener('click', () => {
      currentSelectedCard = card;
    })
    cardsList.append(cardTemplate);
  })
}