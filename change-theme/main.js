const select = document.querySelector('select');
const html = document.querySelector('html');
let date = new Date();
let hour = date.getHours();

function updateTheme(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
select.onchange = function update() {
    (select.value === 'black') ? updateTheme('black', 'white') : updateTheme('white', 'black');
}
function themeWithGetDate() {
    (hour >= 17 || hour <= 8) ? updateTheme('black', 'white') : updateTheme('white', 'black');
}
themeWithGetDate();