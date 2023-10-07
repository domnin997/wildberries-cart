function changeHeader (displayed, headerCheckbox, headerText, closedHeader) {
        
    if (displayed === false) {
        [headerCheckbox, headerText].forEach(el => {el.classList.add('hidden')});
            closedHeader.classList.add('closed-header-displayed');

    } else {
        [headerCheckbox, headerText].forEach(el => {el.classList.remove('hidden');});
            closedHeader.classList.remove('closed-header-displayed');
    } 
}

export const toggleAvailHeader = changeHeader;