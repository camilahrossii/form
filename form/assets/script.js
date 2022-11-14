const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, 'Username is required');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === ""){
        setErrorFor(email, 'Email is required.')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid email.')
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, 'Password is required.');
    } else if (passwordValue.length < 8){
        setErrorFor(password, 'The password must be at least 8 characters.')
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, 'Please confim your password.')
    } else if (passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, 'Passwords do not match.')
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('form-control');

    const formIsValid = [...formControls].every((formControl => {
        return formControl.className === 'form-control success';
    }));

    if(formIsValid) {
        console.log('The form is 100% valid!')
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const messageError = formControl.querySelector('p');

    messageError.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }