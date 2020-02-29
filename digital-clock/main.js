let paraClock = document.querySelector('.clock');

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    paraClock.textContent = time;
}

displayTime();

const createClock = setInterval(displayTime, 1000);