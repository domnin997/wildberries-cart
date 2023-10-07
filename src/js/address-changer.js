import { getDOMElements } from "./DOMElements.js";
const {
    addressBtns,
    modalOverlay,
    addressSelectors,
    courierAddresses,
    pickPointAddresses,
    changeAddressBtn,
    deliveryAddress1,
    deliveryAddress2,
 } = getDOMElements();

let selectedAddress;

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
    
    pickPointAddresses.forEach((el) => {
        el.addEventListener('click', (event) => {
            selectedAddress = document.querySelector('input[name="point-address"]:checked').dataset.address;
                console.log(selectedAddress);
        })
    })

    changeAddressBtn.addEventListener('click', (event) => {
        if (selectedAddress) {
            deliveryAddress1.innerText = selectedAddress;
            deliveryAddress2.innerText = selectedAddress;
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
        }
    });
}

export const manageAddressChangeF = manageAddressChange;