import { getDOMElements } from "./DOMElements.js";
const {
    addressBtns, modalOverlay, addressSelectors, courierAddresses,
    pickPointAddresses, changeAddressBtn, deliveryAddress1,
    deliveryAddress2, pickPointHeader1, pickPointHeader2,
    pickPointTimeRating,
 } = getDOMElements();

let pickPointSelected,
    courierSelected,
    defaultChecked = 0,
    defaultSelected = 0,
    selectedNum = 0,
    addresses = document.querySelectorAll('input[name="point-address"]');

function setDefault () {
    addresses[defaultChecked].checked = true;
        if (defaultSelected) {
            toggleList(0, addressSelectors[defaultSelected], pickPointAddresses, courierAddresses);
        } else {
            toggleList(1, addressSelectors[defaultSelected], courierAddresses, pickPointAddresses);
        }
}

function toggleList (index, selector, listToHide, listToShow) {
    addressSelectors[index].classList.remove('selected');
        selector.classList.add('selected');
        listToHide.forEach((el) => {
            el.classList.add('hidden');
        });
        listToShow.forEach((el) => {
            el.classList.remove('hidden');
        });
}

function manageAddressChange () {
    
    setDefault();

    courierAddresses.forEach((el) => {
        el.addEventListener('click', (event) => {
            courierSelected = document.querySelector('input[name="courier-address"]:checked').dataset.address;
            console.log(courierSelected);
        })
    })

    pickPointAddresses.forEach((el, index) => {
        el.addEventListener('click', (event) => {
            pickPointSelected = document.querySelector('input[name="point-address"]:checked').dataset.address;
            selectedNum = index;
        })
    })

    changeAddressBtn.addEventListener('click', (event) => {
        
        defaultChecked = selectedNum;
    
        if (addressSelectors[1].classList.contains('selected') && courierSelected) {
            pickPointHeader1.innerText = 'Доставка курьером';
            pickPointHeader2.innerText = 'Доставка курьером';
            
            defaultSelected = 1; 
                deliveryAddress1.innerText = courierSelected;
                deliveryAddress2.innerText = courierSelected;

                    pickPointTimeRating.forEach((el) => {
                        el.classList.add('not_disp');
                    })

                        modalOverlay.classList.remove('displayed');
        } else {
            
            pickPointHeader1.innerText = 'Пункт выдачи';
            pickPointHeader2.innerText = 'Доставка в пункт выдачи';
            
            defaultSelected = 0; 
                deliveryAddress1.innerText = pickPointSelected;
                deliveryAddress2.innerText = pickPointSelected;

                    pickPointTimeRating.forEach((el) => {
                        el.classList.remove('not_disp');
                    })

                        modalOverlay.classList.remove('displayed');
        }
    })

    addressSelectors.forEach((selector, index) => {
        selector.addEventListener('click', (event) => {
            
            if (!selector.classList.contains('selected') && index === 0) {
                toggleList(1, selector, courierAddresses, pickPointAddresses);
            
            } else if (!selector.classList.contains('selected') && index === 1) { 
                toggleList(0, selector, pickPointAddresses, courierAddresses);
            }
        })
    })

    addressBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            modalOverlay.classList.add('displayed');
        });
    });

    modalOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            modalOverlay.classList.remove('displayed');

            setDefault();
        }
    });
}

export const manageAddressChangeF = manageAddressChange;