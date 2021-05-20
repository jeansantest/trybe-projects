const getInputText = document.querySelector('#text-input');
const output = document.getElementById('meme-image');
const getP = document.querySelector('#meme-text');
const getMemeInsert = document.querySelector('#meme-insert');
const getContainer = document.querySelector('#meme-image-container');
const getFire = document.querySelector('#fire');
const getWater = document.querySelector('#water');
const getEarth = document.querySelector('#earth');
const getMeme1 = document.querySelector('#meme-1');
const getMeme2 = document.querySelector('#meme-2');
const getMeme3 = document.querySelector('#meme-3');
const getMeme4 = document.querySelector('#meme-4');

getMemeInsert.onchange = function loadFile(event) {
  const reader = new FileReader();
  reader.onload = () => {
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
/* resolver o exercício = https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded */
/* FileReader = https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader */
/* operator new = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new */
/* readAsDataURL = https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL */
/* onchange in js = https://qastack.com.br/programming/5024056/how-to-pass-parameters-on-onchange-of-html-select */

function textInputKeyUp() {
  getInputText.addEventListener('keyup', () => {
    const getValue = getInputText.value;
    getP.innerHTML = getValue;
  });
}
textInputKeyUp();

function border(style) {
  getContainer.style.border = style;
}
border('1px solid black');

function addBorderButtons() {
  getFire.addEventListener('click', () => {
    border('3px dashed red');
  });
  getWater.addEventListener('click', () => {
    border('5px double blue');
  });
  getEarth.addEventListener('click', () => {
    border('6px groove green');
  });
}
addBorderButtons();

function callThumbnails() {
  getMeme1.addEventListener('click', () => {
    output.src = getMeme1.src;
  });
  getMeme2.addEventListener('click', () => {
    output.src = getMeme2.src;
  });
  getMeme3.addEventListener('click', () => {
    output.src = getMeme3.src;
  });
  getMeme4.addEventListener('click', () => {
    output.src = getMeme4.src;
  });
}
callThumbnails();
