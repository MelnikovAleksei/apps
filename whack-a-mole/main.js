let h2 = document.querySelector('h2');
const grid = document.querySelector('.grid');
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
let timeLeft = document.querySelector('#time-left');

let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => className.classList.remove('mole'));
    square.forEach(elem => elem.style.backgroundColor = 'white')
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

square.forEach(square => {
    square.addEventListener('mouseup', () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            square.style.backgroundColor = 'dodgerblue';
        }
        
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(() => {
        randomSquare();
    }, 800);
}

moveMole();

function countDown () {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(timerId)
        grid.style.display = 'none';
        h2.textContent = 'Game over! Your final score is ' + result;
    }
}

let timerId = setInterval(countDown, 1000)

