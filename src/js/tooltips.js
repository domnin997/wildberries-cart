const freeBackDel = document.querySelectorAll('.total-back-delivery__text-green'),
      backDelTooltips = document.querySelector('.back-delivery-tooltip'),
      entityIcons = document.querySelectorAll('.product-info__location-icon'),
      entityInfoTooltip = document.querySelector('.entity-info-tooltip'),
      entityName = document.querySelector('.entity-name'),
      entityNumber = document.querySelector('.entity-number'),
      entityAddress = document.querySelector('.entity-address'),
      oldPrice = document.querySelectorAll('.old-desktop'),
      discountTooltip = document.querySelector('.discount-tooltip');

const entityBase = [
    {name: 'OOO «ВАЙЛДБЕРРИЗ»', number: 'ОГРН: 1067746062449', address: '142181, Московская область, д Коледино, д. 6 стр. 1'},
    {name: 'OOO «МЕГАПРОФСТИЛЬ»', number: 'ОГРН: 5167746237148', address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'},
    {name: 'OOO «ВАЙЛДБЕРРИЗ»', number: 'ОГРН: 1067746062449', address: '142181, Московская область, д Коледино, д. 6 стр. 1'}
]

const discountsBase = [
    {percent:'Скидка 51%', sum: '−529 сом'},
    {percent:'Скидка 8,7%', sum: '−1000 сом'},
    {percent:'Скидка 48%', sum: '−456 сом'},
]
function manageTool () {
    
    freeBackDel.forEach((el) => {
        el.addEventListener('mouseover', () => {
            const freeBackDelCoords = el.getBoundingClientRect();
            backDelTooltips.classList.remove('hidden');
            backDelTooltips.style.left = (freeBackDelCoords.right - 250) + "px";
            backDelTooltips.style.top = (window.scrollY + freeBackDelCoords.top + 25) + "px";
        });
        el.addEventListener('mouseout', () => {
            backDelTooltips.classList.add('hidden');
        })
    })


    entityIcons.forEach((icon, i) => {
        icon.addEventListener('mouseover', () => {
            const iconCoords = icon.getBoundingClientRect();
            entityInfoTooltip.classList.remove('hidden');
            entityInfoTooltip.style.left = (iconCoords.right - 140) + "px";
            entityInfoTooltip.style.top = (window.scrollY + iconCoords.top + 25) + "px";
            entityName.innerText = entityBase[i].name;
            entityNumber.innerText = entityBase[i].number;
            entityAddress.innerText = entityBase[i].address;
        })
        icon.addEventListener('mouseout', () => {
            entityInfoTooltip.classList.add('hidden');
        })
    })

    oldPrice.forEach((price, i) => {
        price.addEventListener('mouseover', () => {
            const priceCoords = price.getBoundingClientRect();
            discountTooltip.classList.remove('hidden');
            discountTooltip.style.left = (priceCoords.right - 160) + "px";
            discountTooltip.style.top = (window.scrollY + priceCoords.top + 25) + "px";
            discountTooltip.innerHTML = `
                <span class="discount-percent">${discountsBase[i].percent}</span>
                <span class="discount-sum">${discountsBase[i].sum}</span>`;
        })
        price.addEventListener('mouseout', () => {
            discountTooltip.classList.add('hidden');
        })
    })
}

export const manageToolTips = manageTool;