function addFavDelDecoration () {
    
    document.querySelectorAll('.fav-icon').forEach((icon) => {
        
        icon.addEventListener('mouseover', () => {
            icon.children[0].attributes.fill.value = "#CB11AB";
        });

        icon.addEventListener('click', () => {
            icon.classList.contains('clicked') ? icon.classList.remove('clicked') : icon.classList.add('clicked'); 
        })
        
        icon.addEventListener('mouseout', () => {
            if (icon.classList.contains('clicked')) {
                return;
            } else {
                icon.children[0].attributes.fill.value = "black";
            }
        });
    })

    document.querySelectorAll('.delete-icon').forEach((icon) => {
        
        icon.addEventListener('mouseover', () => {
            icon.children[0].attributes.fill.value = "#F55123";
            icon.children[1].attributes.fill.value = "#F55123";
            icon.children[2].attributes.fill.value = "#F55123";
        });
    
        icon.addEventListener('mouseout', () => {
            icon.children[0].attributes.fill.value = "black";
            icon.children[1].attributes.fill.value = "black";
            icon.children[2].attributes.fill.value = "black";
        });
    });

    document.querySelectorAll('.change-address__delete-icon').forEach((icon) => {
        
        icon.addEventListener('mouseover', () => {
            icon.children[0].attributes.fill.value = "#F55123";
            icon.children[1].attributes.fill.value = "#F55123";
            icon.children[2].attributes.fill.value = "#F55123";
        })

        icon.addEventListener('mouseout', () => {
            icon.children[0].attributes.fill.value = "#a0a0a4";
            icon.children[1].attributes.fill.value = "#a0a0a4";
            icon.children[2].attributes.fill.value = "#a0a0a4";
        })
    });
}

export const addFavDelDecor = addFavDelDecoration;