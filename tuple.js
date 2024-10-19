var person1 = ["santha", 21, true];
var person2 = ["kumar", 21, false];
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
console.log(person1);
console.log(person2);
displayPersonInfo(person1);
