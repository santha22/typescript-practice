var student1 = {
    name: "Santha",
    age: 22,
    greet: function (country) { return "Welcome My name is ".concat(student1.name, ", country is ").concat(country); }
};
var student2 = {
    name: "Kumar",
    age: 23,
    greet: function (country) { return "Welcome My name is ".concat(student2.name, ", country is ").concat(country); }
};
var introduction = function () {
    var name = student1.name, age = student1.age;
    return "Welcome My name is ".concat(name, ", I am ").concat(age, " years old");
};
console.log(introduction());
console.log(student1.greet("India"));
console.log(student2.greet("Us"));
