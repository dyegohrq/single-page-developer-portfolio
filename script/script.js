const form = document.getElementById('form')
const formControl = document.getElementById('form-control')
const inputName = document.getElementById('input-name')
const name = document.getElementById('name')
const inputEmail = document.getElementById('input-email')
const email = document.getElementById('email')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    isValed()    
});

function isValed() {
    const nameValue = name.value;
    const emailValue = email.value;

    if (nameValue === '') {
        setErrorFor(name, 'Sorry, invalid format here')
    } else if (isNumber(nameValue) === true) {
        setErrorFor(name, 'Sorry, invalid format here')
    } else{
        setSuccessFor(name)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Sorry, invalid format here')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Sorry, invalid format here')
    } else {
        setSuccessFor(email)
    }
}

function setErrorFor(input, mensage) {
    const formImput = input.parentElement;
    const small = formImput.querySelector('small');

    small.innerText = mensage;
    formImput.className = 'input error'
}

function setSuccessFor(input) {
    const formImput = input.parentElement;
    
    formImput.className =  'input success';

}

function isNumber(input) {
    return /^\d*$/i.test(input);
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
)};