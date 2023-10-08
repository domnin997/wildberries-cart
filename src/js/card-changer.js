import { getDOMElements } from "./DOMElements.js";

const { changeCardBtns, changeCardWindow,
        modalOverlay, closeCardWindow,
        cards, changeCardBtn, paySysIcons
      } = getDOMElements();

const cardsBase = [
    {icon: './icons/mir.svg', number: '1234 56•• •••• 1234'},
    {icon: './icons/visa.svg', number: '1234 56•• •••• 1234'},
    {icon: './icons/mastercard.svg', number: '1234 56•• •••• 1234'},
    {icon: './icons/maestro.svg', number: '1234 56•• •••• 1234'}
];

let defSelectedCard = 0,
    newSelectedCard = 0,
    card2 = document.querySelectorAll('input[name="card"]');

function setDefaultCard () {
    card2[defSelectedCard].checked = true;
}

function closePopup () {
    modalOverlay.classList.remove('displayed');
    changeCardWindow.classList.add('hidden');
}

function handleChoise () {
    if (newSelectedCard === defSelectedCard) {
        modalOverlay.classList.remove('displayed');
        changeCardWindow.classList.add('hidden');
    } else {
        defSelectedCard = newSelectedCard;
    }
}

function manageCardChange () {
    setDefaultCard();
    changeCardBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            modalOverlay.classList.add('displayed');
            changeCardWindow.classList.remove('hidden');
        })
    })

    cards.forEach((card, index) => {
        card.addEventListener('click', (event) => {
            newSelectedCard = index;
        });
    })

    changeCardBtn.addEventListener ('click', (event) => {
        defSelectedCard = newSelectedCard;
        paySysIcons.forEach((icon) => {
            icon.attributes.src.nodeValue = cardsBase[newSelectedCard].icon;
                closePopup();
        })
    })

    closeCardWindow.addEventListener('click', () => { closePopup(), setDefaultCard ()} );

    modalOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) { closePopup(), setDefaultCard () };
    })
}

export const manageCardChangeF = manageCardChange;