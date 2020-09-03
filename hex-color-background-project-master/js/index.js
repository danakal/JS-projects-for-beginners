'use strict';

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let button = document.querySelector('#btn');
let hexValue = document.querySelector('#hex-value');
let body = document.querySelector('body');

button.addEventListener('click', changeColor);

function changeColor() {
    let hexNumber = "#";
    for (let i=0; i<6; i++) {
        hexNumber += hexValues[Math.floor(Math.random()*hexValues.length)];
    }
    body.style.backgroundColor = hexNumber;
    hexValue.textContent = '  ' + hexNumber;    
}

