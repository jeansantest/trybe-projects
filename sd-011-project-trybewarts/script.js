const loginEmailInput = document.getElementById('login-email-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginButton = document.getElementById('login-button');
const formElement = document.getElementById('evaluation-form');
const formFirstNameInput = document.getElementById('input-name');
const formLastNameInput = document.getElementById('input-lastname');
const formEmailInput = document.getElementById('input-email');
const formHouseInput = document.getElementById('house');
const submitButton = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const commentTextArea = document.getElementById('textarea');
const counterElement = document.getElementById('counter');

function login() {
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function updateCounter() {
  const commentLength = commentTextArea.value.length;
  counterElement.textContent = 500 - commentLength;
}

const classNome = document.querySelectorAll('nome');

  for (let index = 0; index < classNome.length; index += 1) {
    classNome.values;
  }
  console.log(classNome.values)

function submitForm(event) {
  event.preventDefault();
}

loginButton.addEventListener('click', login);
commentTextArea.addEventListener('keyup', updateCounter);
submitButton.addEventListener('click', submitForm);

function disableSubmitButton() {
  checkAgreement.addEventListener('click', () => {
    if (submitButton.disabled) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}
disableSubmitButton();
