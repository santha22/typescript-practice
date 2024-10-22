"use strict";
const inputValue = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
console.log(inputValue(10));
console.log(inputValue("hello world"));
const employee = {
    name: "santha",
    age: 22,
    emp_id: 1111,
    department: "IT"
};
const user = { name: "santha", age: 22 };
const myLocation = { city: "srikakulam", country: "India" };
const createUserProfie = (user, myLocation) => {
    return Object.assign(Object.assign({}, user), myLocation);
};
const myCompleteInfo = createUserProfie(user, myLocation);
console.log(myCompleteInfo);
