const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const nameValue = name.value;
    const emailValue = email.value


    const regex = /^[a-zA-Z]/
    const min = 3

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be empty')
    } else if (nameValue.length < 3) {
        setErrorFor(name, 'Name must contain more than 3 characters')
    } else if (!regex.test(nameValue)) {
        setErrorFor(name, 'The field must contain only letters!')
    } else {
        setSuccessFor(name)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Fill in this field!')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Sorry, invalid format here')
    } else {
        setSuccessFor(email)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')
    
    formControl.classList.add('invalid')   
    formControl.classList.remove('success')
    span.innerHTML = message
    console.log(span)
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList.add('success')
    formControl.classList.remove('invalid')
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}