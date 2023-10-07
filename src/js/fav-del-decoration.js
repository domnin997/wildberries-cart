const favIcons = document.querySelectorAll('.fav-icon');

function addDecorationToFav () {

    document.querySelectorAll('.fav-icon').forEach((icon) => {
        icon.addEventListener('mouseover', (e) => {
            icon.children[0].attributes.fill.value = "#CB11AB";
        });

        icon.addEventListener('click', (e) => {
            icon.classList.contains('clicked') ? icon.classList.remove('clicked') : icon.classList.add('clicked'); 
        })
        
        icon.addEventListener('mouseout', (e) => {
            if (icon.classList.contains('clicked')) {
                return;
            } else {
                icon.children[0].attributes.fill.value = "black";
            }
        });
    })
}


function addDecorationToDel () {
    document.querySelectorAll('.delete-icon').forEach((icon) => {
        
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
}


export const addDecorationToFavI = addDecorationToFav;
export const addDecorationToDelI = addDecorationToDel;