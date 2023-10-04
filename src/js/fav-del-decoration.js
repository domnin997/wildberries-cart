function addDecorationToFav () {

    document.querySelectorAll('.fav-icon').forEach((icon) => {
        icon.addEventListener('mouseover', (e) => {
            icon.children[0].attributes.fill.value = "#CB11AB";
        });
        
        icon.addEventListener('mouseout', (e) => {
            icon.children[0].attributes.fill.value = "black";
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