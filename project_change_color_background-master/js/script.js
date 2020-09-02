'use strict';

document.querySelector('#btn-given').addEventListener('click',changeColor);
document.querySelector('#btn-random').addEventListener('click',randomColor);


function changeColor() {
    const colors=['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
    let i= Math.floor(Math.random()*colors.length);
    document.querySelector('body').style.backgroundColor = colors[i];
}

function randomColor() {
    let red = (Math.random() * 255).toFixed(0);
    let green = (Math.random() * 255).toFixed(0);
    let blue = (Math.random() * 255).toFixed(0);
    document.querySelector('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }