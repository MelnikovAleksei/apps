const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const paragraph = document.querySelector('p');

form.onsubmit = function (e) {
    if (fname.value === '' || lname.value === '') {
        e.preventDefault();
        paragraph.textContent = 'You need to fill in both names!';
    }
}