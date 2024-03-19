// let is used to declare block scope variables
let name = 'júlia';
let age = 29;
let hasHobbies = true;

name = 'Ricardo Gordo';
age = 30;

function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "User name is " +
    userName +
    ", user age is " +
    userAge +
    ", and user has hobbies: " +
    userHasHobbies
  );
};

console.log(summarizeUser(name, age, hasHobbies)); //output = User name is Ricardo Gordo, user age is 30, and user has hobbies: true