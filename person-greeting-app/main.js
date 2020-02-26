let name = document.querySelector('#name');
let form = document.querySelector('form');
let greetBtn = document.querySelector('.greetBtn');
let cancelBtn = document.querySelector('.cancelBtn');

let myGreeting;

name.focus();

cancelBtn.disabled = true;

function greeting(who) {
    alert(`Hello  ${who}!`);
    cancelBtn.disabled = true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cancelBtn.disabled = false;
    myGreeting = setTimeout(greeting, 2000, name.value)
});

cancelBtn.addEventListener('click', () => {
    clearTimeout(myGreeting);
    cancelBtn.disabled = true;
    name.value = '';
    name.focus();
    alert('Greeting canceled!');
})

