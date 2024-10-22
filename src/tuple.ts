type PersonInfo = readonly [string, number, boolean];

const person1: PersonInfo = ["santha", 21, true];
const person2: PersonInfo = ["kumar", 21, false];

const displayPersonInfo = (person: PersonInfo) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
     
}

console.log(person1);
console.log(person2);
displayPersonInfo(person1);
