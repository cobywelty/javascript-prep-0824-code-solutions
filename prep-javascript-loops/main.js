function whileLoop() {
  const array = [];
  let index = 0;
  while (index < 10) {
    array.push(index);
    index++;
  }
  return array;
}

const whileLoopResult = whileLoop();
console.log(whileLoopResult);

function whileLoop2() {
  const array = [];
  let index = 0;
  while (index < 19) {
    array.push(index);
    index = index + 2;
  }
  return array;
}

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const array = [];
  for (let index = 0; index < 10; index++) {
    array.push(index);
  }
  return array;
}

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (index = 100; index >= 0; index--) {
    console.log('time till explosion', index, '!');
  }
}

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
