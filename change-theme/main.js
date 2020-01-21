const select = document.querySelector('select');
const html = document.querySelector('html');
let date = new Date();
let hour = date.getHours();

function updateTheme(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

function themeWithGetDate() {
    (hour >= 17 || hour <= 8) ? updateTheme('black', 'white') : updateTheme('white', 'black');
}

select.onchange = function update() {
    switch (select.value) {
        case 'auto':
            themeWithGetDate();
            break;
        case 'white':
            updateTheme('white', 'black');
            break;
        case 'black':
            updateTheme('black', 'white');
            break;
        case 'purple':
            updateTheme('purple', 'black');
            break;
        case 'yellow':
            updateTheme('yellow', 'black');
            break;
        default:
            updateTheme('white', 'black');
            break;
    }
}

themeWithGetDate()

