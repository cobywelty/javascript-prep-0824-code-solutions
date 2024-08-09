function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(1, 2);
console.log('The sum of the numbers is ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(1.5);
console.log('In one and a half hours there are this many minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

const alienGreeting = getGreeting('Earthlings');
console.log(alienGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const result = addAndMultiplyBy5(5, 5);
console.log('5 + 5 times 5 is ', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const result2 = multiplyAndDivideBy5(10, 20);
console.log('200 divided by 5 is: ', result2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(20, 10);
console.log('20 minus 10 is ', difference);

function getCircleCircumference(radius) {
  return radius * Math.PI * 2;
}

const circumference = getCircleCircumference(5);
console.log(
  'The circumference of a circle with a radius of 5 is ',
  circumference
);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Tom', 'Cruise');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

const threeCubed = cube(3);
console.log('Three cubed is', threeCubed);

function makeSandwich(
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  breadType
) {
  return (
    'One delicious sandwich with ' +
    ingredient1 +
    ' ' +
    ingredient2 +
    ' ' +
    ingredient3 +
    ' & ' +
    ingredient4 +
    ' between ' +
    breadType
  );
}

const BLT = makeSandwich('bacon', 'lettuce', 'tomato', 'mayo', 'sourdough');
console.log('A BLT is:', BLT);
