const nameInput = document.getElementById('name-input');
const button = document.getElementById('generate');
const firstName = document.getElementById('my-name');

button.addEventListener('click', ()=>{
    let nameValue = nameInput.value;
    firstName.textContent = nameValue;
});

