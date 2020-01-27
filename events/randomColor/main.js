

for (let index = 1; index <= 16; index++) {
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}
const divs = document.querySelectorAll('div');
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBackgroundColor(event) {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    event.target.style.backgroundColor = rndCol;   
}

divs.forEach(function(div) {
    div.addEventListener('mouseover', changeBackgroundColor)
    div.addEventListener('mouseleave', changeBackgroundColor)
})
//btn.onclick = function() {
//    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//    document.body.style.backgroundColor = rndCol;
//  }

