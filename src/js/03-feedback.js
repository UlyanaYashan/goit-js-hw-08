import throttle from 'lodash.throttle';

let formDAta = {};
const form = document.querySelector('form');
const nameEmail = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

initForm()

function onInput (event) {
    formDAta[event.target.name] = event.target.value;
     localStorage.setItem('feedback-form-state', JSON.stringify(formDAta));
    }
    

function initForm() {

if(localStorage.getItem('feedback-form-state')) {
    
    formDAta = JSON.parse(localStorage.getItem('feedback-form-state'));
nameEmail.value = formDAta.email || "";
message.value = formDAta.message || "";
}
}

function onSubmit (evt) {
    evt.preventDefault();
    if (nameEmail.value === '' || message.value === '') {
        return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
      }
    
    evt.currentTarget.reset();
    
    localStorage.removeItem('feedback-form-state');
    
    console.log(formDAta);
    formDAta = {};    
    }


