var name = 'júlia';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) { //local variables
    return ('User name is ' + userName +', user age is ' + userAge + ', and user has hobbies: ' + userHasHobbies);
}

// This function don't depend directly to the code!
console.log(summarizeUser(name, age, hasHobbies)); //Parameters inside the function call "(name, age, hashobbies)", you can also hardcode inside the parameters.