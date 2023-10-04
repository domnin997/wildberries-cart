let favIcons = document.querySelectorAll('.fav-icon'),
    delIcons = document.querySelectorAll('.delete-icon');

    favIcons.forEach((icon) => {
        icon.addEventListener('mouseover', (event) => {
            icon.children[0].attributes.fill.value = "#CB11AB";
        });
        icon.addEventListener('mouseout', (event) => {
            icon.children[0].attributes.fill.value = "black";
        });
    })
    
    delIcons.forEach((icon) => {
        
        icon.addEventListener('mouseover', (event) => {
            icon.children[0].attributes.fill.value = "#F55123";
            icon.children[1].attributes.fill.value = "#F55123";
            icon.children[2].attributes.fill.value = "#F55123";
        });

        icon.addEventListener('mouseout', (event) => {
            icon.children[0].attributes.fill.value = "black";
            icon.children[1].attributes.fill.value = "black";
            icon.children[2].attributes.fill.value = "black";
        });

    });


// Блок с ценами

const tShirtPrice = 522,
      casePrice = 10500.235,
      pencilPrice = 247;

let tShirtNum = 1,
    caseNum = 200,
    pencilNum = 2;

let totalPrice = 0; 

function countTotalPrice (price, value) {
    totalPrice += price*value;
};

countTotalPrice(tShirtPrice, tShirtNum);
countTotalPrice(casePrice, caseNum);
countTotalPrice(pencilPrice, pencilNum);
console.log(totalPrice);

// Блок с количеством продуктов

let availItems = document.querySelectorAll('.available-item');
let productsNum = availItems.length;
let prodNumIcon = document.querySelector('.menu-icons__number-of-items');

availItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-icon')) {
            item.remove();
                updateProdNumIcon();
        }
    })
})

function updateProdNumIcon () {
    
    availItems = document.querySelectorAll('.available-item');
    productsNum = availItems.length;

    if (productsNum) {
        prodNumIcon.classList.remove('hidden');
        prodNumIcon.innerText = productsNum;
    } else {
        prodNumIcon.classList.add('hidden');
    }
};

updateProdNumIcon();
console.log(prodNumIcon);

// Чекбоксы

let headerCheckbox = document.querySelector('.products-header__checkbox'),
    productsCheckboxes = document.querySelectorAll('.product__checkbox');

console.log(productsCheckboxes);

function changeChecked (element) {
    console.log('invoked');
    if (element.checked) {
        element.checked = false;
    } else {
        element.checked = true;
    }
}

function updateHeaderCheck () {
    if (headerCheckbox.checked) {
        headerCheckbox.checked = false;
    } else {
        headerCheckbox.checked = true;
    }
}

function removeHeaderCheck () {
    headerCheckbox.checked = false;
}

function updateCheck () {
    if (headerCheckbox.checked) {
        productsCheckboxes.forEach((box)=>{
            box.checked = 'true';
        })
    }
}

let headerLabel = document.querySelector('.header__label'),
    productLabels = document.querySelectorAll('.product__label');

    headerLabel.addEventListener('click', (event) => {
        event.preventDefault();
            changeChecked(headerCheckbox);
        // updateHeaderCheck();
            updateCheck();
    })

    productLabels.forEach((checkbox, i) => checkbox.addEventListener('click', (event) => {
        event.preventDefault();
            changeChecked(productsCheckboxes[i]);
                if (!productsCheckboxes[i].checked) {
                    removeHeaderCheck();
                }
    }))