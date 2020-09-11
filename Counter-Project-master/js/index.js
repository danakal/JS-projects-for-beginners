'use strict';

const minusBtn = document.querySelector('.prevBtn');
const plusBtn = document.querySelector('.nextBtn');
const counterNum = document.querySelector('#counter');

let counter = 0;

minusBtn.addEventListener('click', function () {
    counter--;
    counterNum.textContent = counter;
    colorNum(counter)})
    
    
plusBtn.addEventListener('click', function () {
    counter++;
    counterNum.textContent = counter;
    colorNum(counter)})
    
    
function colorNum(counter) {
    if ( counter < 0 ) {
        counterNum.style.color = 'red';
    } else if ( counter > 0) {
        counterNum.style.color = 'green';
    } else {
        counterNum.style.color = '';
    }
}