import { getDOMElements } from "./DOMElements.js";
const {showHideIcons, unavailHeader, prodLists, unavailItems} = getDOMElements();

function manageList () {

    const showHideIcon = showHideIcons[1],
          prodList = prodLists[1];

    let prodCounter = unavailItems.length,
        isDisplayed = true;

    showHideIcon.addEventListener('click', () => {
        if (prodCounter === 0) {
            return;
        } else if (isDisplayed) {
            prodList.classList.add('item-list-hidden');
                isDisplayed = false;
                    showHideIcon.classList.add('rotate180');
        } else if (!isDisplayed) {
            prodList.classList.remove('item-list-hidden');
                isDisplayed = true;
                    showHideIcon.classList.remove('rotate180');
        }
    });

    unavailItems.forEach((element) => {
        element.addEventListener('click', (event) => {
            
            if (event.target.classList.contains('delete-icon')) {
                element.remove();
                --prodCounter;

                if (prodCounter === 0) {
                    unavailHeader.innerText = `Нет отсутствующих товаров`;
                    showHideIcon.classList.add('rotate180');
                } else {
                    unavailHeader.innerText = `Отсутствуют · ${prodCounter} товара`;
                }
            }
        })
    })
}

export const manageUnavailList = manageList;