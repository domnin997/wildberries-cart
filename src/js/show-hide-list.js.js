function productsListOpener (availEmpty = false, unavailEmpty = false) {

    const state = [
        {displayed: true, opening: false, empty: availEmpty}, 
        {displayed: true, opening: false, empty: unavailEmpty},
    ]

    const iconBtns = document.querySelectorAll('.products-header__icon'),
          lists = document.querySelectorAll('.products-list');

    iconBtns.forEach((btn, i) => {
        btn.addEventListener('click', (event) => {
            if (state[i].empty) {
                return;
            } else if (state[i].displayed) {
                lists[i].classList.add('item-list-hidden');
                    state[i].displayed = false;
                        iconBtns[i].classList.add('rotate180');
            } else if (!state[i].displayed) {
                lists[i].classList.remove('item-list-hidden');
                    state[i].displayed = true;
                        iconBtns[i].classList.remove('rotate180');
            }
        })
    });
}

export const showHideLists = productsListOpener;