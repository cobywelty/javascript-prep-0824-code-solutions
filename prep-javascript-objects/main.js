const person = {
  firstName: 'John',
  lastName: 'Snow',
  hobby: 'Flying dragons',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'King of the North';
console.log("The person's job is: ", person.job);

person['previousJob'] = "Lord commander of the night's watch";
console.log("The person's previous job was: ", person['previousJob']);

console.log(person);
