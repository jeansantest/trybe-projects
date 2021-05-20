// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  let object = [];
  array = array.sort();
  for (let tech of array) {
    object.push({
      tech,
      name,
    });
  }
  return object;
}

// Desafio 11
function repeatNumbers(number, array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

function numbersCondition(array) {
  let condition = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || repeatNumbers(array[index], array) >= 3) {
      condition = false;
    }
  }
  return condition;
}

function phoneNumber(array) {
  let phone = '(xx) xxxxx-xxxx';
  array.forEach((item) => {
    phone = phone.replace('x', item);
  });
  return phone;
}

function generatePhoneNumber(array) {
  let phone = phoneNumber(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (numbersCondition(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phone;
}
/* https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/ */

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = true;
  if (lineA > lineB + lineC) {
    triangle = false;
  } if (lineA < Math.abs(lineB - lineC)) {
    triangle = false;
  }
  return triangle;
}
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */

// Desafio 13
function drinksCounter(drinks) {
  drinks = drinks.match(/\d/g, '').map(Number);
  let sum = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    sum += drinks[index];
  }
  return sum;
}

function hydrate(drinks) {
  let text = '';
  if (drinksCounter(drinks) === 1) {
    text = `${drinksCounter(drinks)} copo de água`;
  } else {
    text = `${drinksCounter(drinks)} copos de água`;
  }
  return text;
}
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp ;
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number */

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
