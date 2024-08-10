function isAdult(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  } else {
    return console.log('Invalid age');
  }
}

const isAdultResult = isAdult(21);
console.log('Is an adult:', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else if (score <= 70) {
    return false;
  } else {
    return console.log('Invalid score');
  }
}

const didStudentPassResult = didStudentPass(65);
console.log('The student passed:', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score >= 100) {
    return 'A++';
  } else {
    return console.log('Invalid score');
  }
}

const gradeCalculatorResult = gradeCalculator(100);
console.log('The grade is:', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'Summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else if (season === 'fall') {
    return 'the leaves are changing colors';
  } else {
    return 'please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger('fall');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'Sunday') {
    return 'have a good weekend';
  } else {
    return 'it is a weekday';
  }
}

const dayDetectorResult = dayDetector('saturday');
console.log(dayDetectorResult);
