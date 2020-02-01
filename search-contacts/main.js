const contacts = ['Anton:89032734528', 'Masha:89037336278', 'Father:89167854255', 'Grandmother:89104634528', 'Brother:89152654633'];
const paragraph = document.querySelector('p');
const inputSearch = document.querySelector('#search');
const searchButton = document.querySelector('.searchButton')
const addButton = document.querySelector('.addButton');
const enterContact = document.querySelector('#addContact');
let enterContactPhone = document.querySelector('#addContactPhone');
function search() {
    let searchValue = inputSearch.value.toLowerCase(); 
    inputSearch.value = '';
    inputSearch.focus();
    for (let index = 0; index < contacts.length; index++) {
        const splitContact = contacts[index].split(':');
        if (splitContact[0].toLowerCase() === searchValue) {
            paragraph.textContent = splitContact[0] + "\'s number is " + splitContact[1];
            displayMessege('Contact is found!', 'Chat');
            break;
        } else if (index === contacts.length - 1){
            displayMessege('Contact not found!', 'warning');
        }
        
    }
}

function addContact() {
    let contactName = enterContact.value;
    let contactPhone = enterContactPhone.value;
    let newContact = contactName + ':' + contactPhone;
    contacts.push(newContact);
    enterContact.value = '';
    enterContactPhone = '';
    inputSearch.focus();
    displayMessege('New contact added', 'chat');
}

function displayMessege(msgText, msgType) {
    const html = document.querySelector('html');
    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    panel.appendChild(closeBtn);

    if (msgType === 'warning') {
      msg.style.backgroundImage = 'url(icons/warning.png)';
      panel.style.backgroundColor = 'red';
    } else if(msgType === 'chat') {
      msg.style.backgroundImage = 'url(icons/chat.png)';
      panel.style.backgroundColor = 'blue';
    } else {
      msg.style.paddingLeft = '20px';
    }

    closeBtn.onclick = function() {
      paragraph.textContent = "";
      panel.parentNode.removeChild(panel);
      
    }
}
searchButton.addEventListener('click', search);
addButton.addEventListener('click', addContact);

