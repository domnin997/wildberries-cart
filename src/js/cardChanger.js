import cardsData from '../data/cardsData.json' assert {type: "json"};

const changeCardBtn = document.querySelector('.payment-method__change-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const changeCardModal = document.querySelector('.change-card');
const cardsList = document.querySelector('.cards-list');
const confirmChange = document.querySelectorAll('.change-card-button');
const paymentSystemIcons = document.querySelectorAll('.payment-system');
const cardNumbers = document.querySelectorAll('.js__card-number');

let currentSelected = null;

export const handleCardChanges = function () {
  changeCardBtn.addEventListener('click', () => {
    modalOverlay.classList.toggle('displayed');
    changeCardModal.classList.remove('hidden');
      createCardsList(cardsData);
  })
  modalOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      modalOverlay.classList.remove('displayed');
      changeCardModal.classList.add('hidden');
    }
  })
  confirmChange[1].addEventListener('click', () => {
    cardsData.forEach((card) => {
      if (card.number !== currentSelected.number) {
        card.isSelected = false;
      } else {
        card.isSelected = true;
        cardNumbers.forEach((field) => {
          field.innerText = card.number;
        })
        paymentSystemIcons.forEach((icon) => {
          icon.src = card.icon;
        })
      }
    })
    modalOverlay.classList.toggle('displayed');
    changeCardModal.classList.add('hidden');
  })
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
        currentSelected = card;
    }
    label.addEventListener('click', () => {
      currentSelected = card;
    })
    cardsList.append(cardTemplate);
  })
}