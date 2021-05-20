const getP = document.querySelector('#carta-gerada');
const getInput = document.querySelector('#carta-texto');
const getButton = document.querySelector('#criar-carta');
const getSpan = document.getElementsByTagName('span')

function createSpan(value) {
  const createSpan = document.createElement('span');
  createSpan.id = 'carta-gerada';
  createSpan.innerHTML = value.split('');
  getP.appendChild(createSpan);
}

function generateLetter() {
  getButton.addEventListener('click', () => {
    getP.innerHTML = '';
    const getValue = getInput.value;
  })
}
generateLetter();