const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let index = 1; index <= 5; index++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + index + '.jpg');//image-gallery\gallery-start\images\pic2.jpg
    thumbBar.appendChild(newImage);

}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', changeLight);

function changeLight() {
    if (btn.className === 'dark') {
        btn.className = 'light';
        btn.textContent = 'Ligthen';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.className = 'dark';
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}