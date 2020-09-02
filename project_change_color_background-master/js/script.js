'use strict';

document.querySelector('.btn').addEventListener('click',changeColor);

function changeColor() {
    const colors=['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
    let i= Math.floor(Math.random()*colors.length);
    document.querySelector('body').style.backgroundColor = colors[i];
}
