"use strict";
const person1 = ["santha", 21, true];
const person2 = ["kumar", 21, false];
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
};
console.log(person1);
console.log(person2);
displayPersonInfo(person1);
