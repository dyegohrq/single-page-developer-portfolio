function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const nameValue = name.value;

    const regex = /^[a-zA-Z]/

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be empty')
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')
    
    formControl.classList.toggle('invalid')    
    span.innerHTML = message
    console.log(span)
}