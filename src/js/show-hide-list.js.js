function productsListOpener (availEmpty = false, unavailEmpty = false) {

    const state = [
        {displayed: true, opening: false, empty: availEmpty}, 
        {displayed: true, opening: false, empty: unavailEmpty},
    ]

    const iconBtns = document.querySelectorAll('.products-header__icon'),
          lists = document.querySelectorAll('.products-list'),
          availHeaderCheckbox = document.querySelector('.header__label'),
          availHeaderText = document.querySelector('.products-header__text'),
          availClosedHeader = document.querySelector('.added-products-total__closed');

    function changeAvailHeader (ind) {
        if (ind === 0) {
            if (state[ind].displayed === false) {
                availHeaderCheckbox.classList.add('hidden');
                availHeaderText.classList.add('hidden');
                    availClosedHeader.classList.add('closed-header-displayed');
            } else {
                availHeaderCheckbox.classList.remove('hidden');
                availHeaderText.classList.remove('hidden');
                    availClosedHeader.classList.remove('closed-header-displayed');
            }
        }
    }

    iconBtns.forEach((btn, i) => {
        btn.addEventListener('click', (event) => {
            if (state[i].empty) {
                return;
            } else if (state[i].displayed) {
                lists[i].classList.add('item-list-hidden');
                    state[i].displayed = false;
                        changeAvailHeader(i);
                            iconBtns[i].classList.add('rotate180');
            } else if (!state[i].displayed) {
                lists[i].classList.remove('item-list-hidden');
                    state[i].displayed = true;
                        changeAvailHeader(i);
                            iconBtns[i].classList.remove('rotate180');
            }
        })
    });
}

export const showHideLists = productsListOpener;