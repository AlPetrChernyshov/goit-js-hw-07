const input = document.getElementsByClassName('form-input')[0];
const activeText = 'Type area'; 

input.addEventListener('focus', () => {
  input.placeholder = activeText;
});

input.addEventListener('blur', () => {
  input.placeholder = ''; 
});

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const emailInput = formElements.email;
  const passwordInput = formElements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  event.currentTarget.reset();
}