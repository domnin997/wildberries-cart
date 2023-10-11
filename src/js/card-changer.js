import { getDOMElements } from "./DOMElements.js";

const { changeCardBtns, changeCardWindow,
        modalOverlay, closeCardWindow,
        cardsLabels, confirmCard, paySysIcons
      } = getDOMElements();

const cardsBase = [
    {icon: './icons/mir.svg', number: '1234 56•• •••• 1234', selected: true},
    {icon: './icons/visa.svg', number: '1234 56•• •••• 1234', selected: false},
    {icon: './icons/mastercard.svg', number: '1234 56•• •••• 1234', selected: false},
    {icon: './icons/maestro.svg', number: '1234 56•• •••• 1234', selected: false}
];

let defSelectedCard = 0,
    cardsRadios = document.querySelectorAll('input[name="card"]');

function setCadSelected (index) {
    cardsBase.forEach((card) => {card.selected = false});
    cardsBase[index].selected = true;
}

function setDefaultCard () {
    cardsRadios[defSelectedCard].checked = true;
    setCadSelected(defSelectedCard);
}

function closePopup () {
    modalOverlay.classList.remove('displayed');
    changeCardWindow.classList.add('hidden');
}

function manageCards () {
    
    setDefaultCard();

    changeCardBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalOverlay.classList.add('displayed');
            changeCardWindow.classList.remove('hidden');
        })
    })

    cardsLabels.forEach((card, index) => {
        card.addEventListener('click', () => {
            setCadSelected(index);
        });
    })

    confirmCard.addEventListener ('click', () => {
        cardsBase.forEach((card, index) => {if (card.selected === true) {
            defSelectedCard = index;
        }});
        paySysIcons.forEach((icon) => {
            icon.attributes.src.nodeValue = cardsBase[defSelectedCard].icon;
                closePopup();
        })
    })

    closeCardWindow.addEventListener('click', () => { closePopup(), setDefaultCard ()} );

    modalOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) { closePopup(), setDefaultCard () };
    })
}

export const manageCardChange = manageCards;