const nameInput = document.getElementById('name-input');
const button = document.getElementById('generateblue');
const firstName = document.getElementById('my-name');
const button2 = document.getElementById('generategreen');
const button3 = document.getElementById('generatepink');
const pronounInput = document.getElementById('pronoun-input');
const pronounOutput = document.getElementById('pronoun-output');
const pronounButton = document.getElementById('generatepronoun');

button.addEventListener('click', ()=>{
    let nameValue = nameInput.value;
    firstName.textContent = nameValue; 
    document.getElementById('hello').style.backgroundColor = 'blue';
    document.getElementById('name-footer').style.backgroundColor = 'blue';
});

button2.addEventListener('click', ()=>{
    let nameValue = nameInput.value;
    firstName.textContent = nameValue;
    document.getElementById('hello').style.backgroundColor = 'green';
    document.getElementById('name-footer').style.backgroundColor = 'green';
});

button3.addEventListener('click', ()=>{
    let nameValue = nameInput.value;
    firstName.textContent = nameValue;
    document.getElementById('hello').style.backgroundColor = 'hotpink';
    document.getElementById('name-footer').style.backgroundColor = 'hotpink';
});

pronounButton.addEventListener('click', ()=>{
    let pronounValue = pronounInput.value;
    pronounOutput.textContent = pronounValue;
});

