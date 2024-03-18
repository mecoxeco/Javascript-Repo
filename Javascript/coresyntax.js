let name = "Júlia";
let age = 29;
let hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "User name is " +
    userName +
    ", user age is " +
    userAge +
    ", and user has hobbies: " +
    userHasHobbies
  );
};

console.log(summarizeUser(name, age, hasHobbies));
