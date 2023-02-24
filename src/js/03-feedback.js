import throttle from 'lodash.throttle';

let formDAta = {};
const form = document.querySelector('form');
const nameEmail = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onSubmit (evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem('feedback-form-state');

console.log(formDAta);
}

function onInput (event) {
formDAta[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formDAta));
}

if(localStorage.getItem('feedback-form-state')) {
formDAta = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(formDAta);
nameEmail.value = formDAta.email;
message.value = formDAta.message;
}