
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');
const content = document.getElementById("content");
const byui = document.getElementById("byui");
const neverEnding = 1;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.setAttribute('src', 'images/byui-logo-white.png');
        pageContent.style.color = 'white';
        pageContent.style.backgroundColor = 'rgba(51, 51, 51, 1)';
        content.style.borderColor = 'white';
        byui.style.color = '#86b9dbff';

        
    } else {
        logo.setAttribute('src', 'images/byui-logo.png');
        pageContent.style.color = 'black';
        pageContent.style.backgroundColor = 'white';
        content.style.borderColor = 'black';
        byui.style.color = '#035f9c';
    }
}

