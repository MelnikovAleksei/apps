const paragraph = document.querySelector('p');
const input = document.querySelector('.numberInput');

function squared(number) {
    return number * number;
}

function cubed(number) {
    return number * number * number;
}

function factorial(number) {
    let subNumber = number;
    while (subNumber > 1) {
        number *= subNumber - 1;
        subNumber--;            
    }
    return number
}

function circumferenceRadius(number) {
    return 2 * Math.PI * number;
}

input.onchange = function () {
    let number = input.value;
    if (isNaN(number)) {
        paragraph.textContent = 'You need to enter a number!'
    } else { 
        paragraph.textContent = 'squared: ' + squared(number) + 
                                '; cubed: ' + cubed(number) + 
                                '; factorial: ' + factorial(number) + 
                                '; circumference with radius: ' + circumferenceRadius(number).toFixed(2);
    }
}