'use strict';

const form = document.querySelector('#message-form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    let message = document.querySelector('#message');
    let messageContent = document.querySelector('.message-content');

    messageContent.textContent = message.value;

 });

 

 
