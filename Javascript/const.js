// Const is used to maintain that the variable never change his value
const name = 'júlia';
const age = 29;
const hasHobbies = true;

age = 30; // this is trying to change the value of const 29 so we will get an error

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

console.log(summarizeUser(name, age, hasHobbies)); //output = ERROR - Assignment to constant variable.
