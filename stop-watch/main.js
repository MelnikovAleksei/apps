let display = document.querySelector('.display');
let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');
let saveBtn = document.querySelector('.saveBtn');
let deleteSavedBtn = document.querySelector('.deleteSavedBtn');
let saveCount = '';
let secondCount = 0;

let stopWatch;

startBtn.focus();

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
    const div = document.querySelector('div');
    const para = document.createElement('p');
    //const deleteBtn = document.createElement('button');
    
    div.appendChild(para);
    //div.appendChild(deleteBtn);
    para.setAttribute('class', 'savedCount')
    //deleteBtn.setAttribute('class', 'deleteBtn')

    para.textContent = saveCount;
    //deleteBtn.textContent = 'Delete'
})

/*deleteBtn.addEventListener('click', () => {

})*/
displayCount()