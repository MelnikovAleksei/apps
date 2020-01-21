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
            break;
        } else {
            paragraph.textContent = 'Contact not found.';
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
    paragraph.textContent = 'New contact added!';
}
searchButton.addEventListener('click', search);
addButton.addEventListener('click', addContact);

