// const greeting = (name: string, id: number) => {
//     console.log(`Welcome ${name} your id is ${id}`);
// }
// greeting("santha", 5);
// default parameter
// const greeting = (name: string, id: number = 10) => {
//     console.log(`Welcome ${name} your id is ${id}`);
// }
// greeting("santha");
// optional parameter
var greeting = function (name, id) {
    console.log("Welcome ".concat(name));
};
greeting("santha");
var greet3 = function (name, id) {
    if (id) {
        return "Welcome ".concat(name, " and id is ").concat(id);
    }
    else {
        return "Welcome ".concat(name);
    }
};
var emp = greet3("santha");
var emp2 = greet3("santha", 5);
console.log(emp);
console.log(emp2);
