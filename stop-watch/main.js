let display = document.querySelector('.display');
let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');
let saveBtn = document.querySelector('.saveBtn');
let deleteBtn = document.querySelector('.deleteBtn');
const savedCounts = document.querySelector('.savedCounts');
const para = document.createElement('p');
let saveCount = '';
let secondCount = 0;

let stopWatch;

startBtn.focus();
deleteBtn.disabled = true;

function displayCount() {
    let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor((secondCount % 3600) / 60)
    let seconds = Math.floor(secondCount % 60);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
    display.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;
    secondCount++;
    saveCount = displayHours + ':' + displayMinutes + ':' + displaySeconds;
}

startBtn.addEventListener('click', () => {
    stopWatch = setInterval(displayCount, 1000);
    startBtn.disabled = true;
    stopBtn.focus();
})

stopBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    startBtn.focus();
})

resetBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    secondCount = 0;
    displayCount();
})

saveBtn.addEventListener('click', () => {

    //const deleteBtn = document.createElement('button');
    
    savedCounts.appendChild(para);
    //div.appendChild(deleteBtn);
    para.setAttribute('class', 'savedCount')
    //deleteBtn.setAttribute('class', 'deleteBtn')

    para.textContent = saveCount;
    saveBtn.textContent = 'Overwrite';
    //deleteBtn.textContent = 'Delete'
    deleteBtn.disabled = false;
})

deleteBtn.addEventListener('click', () => {
    savedCounts.removeChild(para)
    deleteBtn.disabled = true;
    saveBtn.textContent = 'Save'
})
displayCount()