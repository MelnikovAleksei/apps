const select = document.querySelector('select');
const list = document.querySelector('ul');
const h2 = document.querySelector('h2');
let date = new Date();
let curNumMonth = date.getMonth() + 1;
let curMonth = '';
let curDays = 1;
switch (curNumMonth) {
    case 1:
        curDays = 31;
        curMonth = 'Current month: January'
        break;
    case 2: 
        curDays = 28;
        curMonth = 'Current month: February'
        break;
    case 3:
        curDays = 31;
        curMonth = 'Current month: March'
        break;
    case 3:
        curDays = 31;
        curMonth = 'Current month: March'
        break;
    case 4:
        curDays = 30;
        curMonth = 'Current month: April'
        break;
    case 5:
        curDays = 31;
        curMonth = 'Current month: May'
        break;
    case 6:
        curDays = 30;
        curMonth = 'Current month: June';
        break;
    case 7:
        curDays = 31;
        curMonth = 'Current month: July';
        break;
    case 8:
        curDays = 31;
        curMonth = 'Current month: August';
        break;
    case 9:
        curDays = 30;
        curMonth = 'Current month: September';
        break;
    case 10: 
        curDays = 31;
        curMonth = 'Current month: October';
        break;
    case 11:
        curDays = 30;
        curMonth = 'Current month: November';
        break;
    case 12: 
        curDays = 31;
        curMonth = 'Current month: December';
        break;
    default:
    break;
}
select.onchange = function() {
 const choice = select.value;
 let days = 31;
 if(choice === 'February') {
 days = 28;
 createCalendar(days, choice);
 } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
 days = 30;
 createCalendar(days, choice);
 } else if(choice === 'Current') {
 createCalendar(curDays,curMonth);
 } else {
 createCalendar(days, choice);
 }
 
}

function createCalendar(days, choice) {
 list.innerHTML = '';
 h2.textContent = choice;
 for(let i = 1; i <= days; i++) {
 const listItem = document.createElement('li');
 listItem.textContent = i;
 list.appendChild(listItem);
 }
 }

createCalendar(curDays,curMonth);