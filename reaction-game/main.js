const spinner = document.querySelector('.spinner p')
const spinnerContainer = document.querySelector('.spinner');
let rotateCount = 0;
let startTime = null;
let rAF;

const btn = document.querySelector('button');
const result = document.querySelector('.result');

function random(min, max) {
    var num = Math.floor(Math.random() * (max-min)) + min;
    return num;
}

function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime) / 6;

    if (rotateCount > 359) {
        rotateCount %= 360;
    }

    spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
    
    rAF = requestAnimationFrame(draw);
}

result.style.display = 'none';
spinnerContainer.style.display = 'none';

function reset() {
    btn.style.display = 'block';
    result.textContent = '';
    result.style.display = 'none';
}

btn.addEventListener('click', start);

function start() {
    draw();
    
    spinnerContainer.style.display = 'block';
    btn.style.display = 'none';
    
    setTimeout(setEndGame, random(5000, 10000));
}

function setEndGame() {
    
    cancelAnimationFrame(rAF);

    spinnerContainer.style.display = 'none';
    result.style.display = 'block'
    result.textContent = 'Players go!'

    document.addEventListener('keydown', keyHandler);

    function keyHandler(e) {
        console.log(e.key);
        if(e.key === "a") {
            result.textContent = 'Player 1 won!';
        } else if(e.key === "l"){
            result.textContent = 'Player 2 won!';
        }
        document.removeEventListener('keydown', keyHandler);
        setTimeout(reset, 5000);
    };
}