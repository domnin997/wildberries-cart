import { getDOMElements } from "./DOMElements.js";

const {
    changeAddrBtns, changeAddrWindow, closeAddrWindow, modalOverlay, addrListSelectors,
    courierAddresses, pickPointAddresses, confirmAddrBtn, deliveryAddress1,
    deliveryAddress2, deliveryAddrHeader1, deliveryAddrHeader2, pickPointTimeRating,
    deliveryAddrHeadMob, deliveryAddressMob,
 } = getDOMElements();

 const pointsArr = [
    {selected: true},
    {selected: false},
    {selected: false}
 ]

 const couriersArr = [
    {selected: true},
    {selected: false},
    {selected: false}
 ]

let isPointsListSelected = true,
    courierSelectedRadio = 0,
    pointSelectedRadio = 0,
    radioPointsCollection = document.querySelectorAll('input[name="point-address"]'),
    radioCouriersCollection = document.querySelectorAll('input[name="courier-address"]');

function hideWindow () {
    modalOverlay.classList.remove('displayed');
    changeAddrWindow.classList.add('hidden');
}

function setDefaultChecked () {
    radioPointsCollection[pointSelectedRadio].checked = true;
    radioCouriersCollection[courierSelectedRadio].checked = true;
}

function toggleList (index, listSelector, listToHide, listToShow) {
    addrListSelectors[index].classList.remove('selected');
        listSelector.classList.add('selected');
            
            listToHide.forEach((el) => {
                el.classList.add('hidden');
            });

            listToShow.forEach((el) => {
                el.classList.remove('hidden');
            });
}

function getCourierAddress () {
    return document.querySelector('input[name="courier-address"]:checked').dataset.address;
}

function getPointAddress () {
    return document.querySelector('input[name="point-address"]:checked').dataset.address;
}

function manageAddressChange () {
    
    changeAddrBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            setDefaultChecked();
            modalOverlay.classList.add('displayed');
            changeAddrWindow.classList.remove('hidden');
        });
    });

    addrListSelectors.forEach((listSelector, index) => {
        listSelector.addEventListener('click', (event) => {

            if (!listSelector.classList.contains('selected') && index === 0) {
                toggleList(1, listSelector, courierAddresses, pickPointAddresses);
                    isPointsListSelected = true;
            
            } else if (!listSelector.classList.contains('selected') && index === 1) { 
                toggleList(0, listSelector, pickPointAddresses, courierAddresses);
                    isPointsListSelected = false;
            }
        })
    });

    confirmAddrBtn.addEventListener('click', () => {
        
        if (isPointsListSelected && document.querySelector('input[name="point-address"]:checked')) {
            deliveryAddrHeader1.innerText = 'Пункт выдачи';
            deliveryAddrHeadMob.innerText = 'Пункт выдачи';
            deliveryAddrHeader2.innerText = 'Доставка в пункт выдачи';
                pickPointTimeRating.forEach((el) => {
                    el.classList.remove('not_disp');
                })
                    deliveryAddress1.innerText = getPointAddress ();
                    deliveryAddressMob.innerText = getPointAddress ();
                    deliveryAddress2.innerText = getPointAddress ();
                        pointsArr.forEach((point, index) => {
                            if (point.selected) {
                                pointSelectedRadio = index;
                            }
                        })
            hideWindow ();
        } 

        else if (!isPointsListSelected && document.querySelector('input[name="courier-address"]:checked')) {
            deliveryAddrHeader1.innerText = 'Доставка курьером';
            deliveryAddrHeadMob.innerText = 'Доставка курьером';
            deliveryAddrHeader2.innerText = 'Доставка курьером';
                pickPointTimeRating.forEach((el) => {
                    el.classList.add('not_disp');
                })
                    deliveryAddress1.innerText = getCourierAddress ();
                    deliveryAddressMob.innerText = getCourierAddress ();
                    deliveryAddress2.innerText = getCourierAddress ();
                        couriersArr.forEach((courier, index) => {
                            if (courier.selected) {
                                courierSelectedRadio = index;
                            }
                        })
            hideWindow ();
        }
    });

    pickPointAddresses.forEach((label, index) => {
        label.addEventListener('click', (event) => {
            
            if (event.target.classList.contains('change-address__delete-icon')) {
                label.remove();
                 if (index === pointSelectedRadio) {
                    deliveryAddress1.innerText = 'Выберите адрес';
                    deliveryAddressMob.innerText = 'Выберите адрес';
                    deliveryAddress2.innerText = 'Выберите адрес';
                        pickPointTimeRating.forEach((el) => {
                            el.classList.add('not_disp');
                        })  
                 }
            } else {
                pointsArr.forEach((point) => {
                    point.selected = false;
                })
                pointsArr[index].selected = true;
            }
        })
    })

    courierAddresses.forEach((label, index) => {
        label.addEventListener('click', (event) => {
            if (event.target.classList.contains('change-address__delete-icon')) {
                label.remove();
                if (index === courierSelectedRadio) {
                    deliveryAddress1.innerText = 'Выберите адрес';
                    deliveryAddressMob.innerText = 'Выберите адрес';
                    deliveryAddress2.innerText = 'Выберите адрес';
                        pickPointTimeRating.forEach((el) => {
                            el.classList.add('not_disp');
                        })  
                 }

            } else {
                couriersArr.forEach((courier) => {
                    courier.selected = false;
                })
                couriersArr[index].selected = true;
            }
        })
    })

    modalOverlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            hideWindow();
        }
    });
    
    closeAddrWindow.addEventListener('click', () => {
        hideWindow();
    })
}

export const secondAddrFunc = manageAddressChange;