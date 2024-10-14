// function declaration 
// function greet (name: String, id: Number) {
//     console.log(`your name is ${name} and id is ${id}`);
// }
// greet("santha", 1);
// function return 
var greet = function (name, id) {
    return "your name is ".concat(name, " and id is ").concat(id);
};
console.log(greet("santha", 1));
// palindrome
// const isPalindrome = (palin:string):boolean => {
//   let myPalin = palin.split("").reverse().join("")
//   return myPalin === palin;   
// }
// console.log(isPalindrome("12321"));
// function calculateAverage
var calculateAverage = function (arr) {
    var sum = arr.reduce(function (acc, item) { return acc += item; }, 0);
    return sum / arr.length;
};
console.log(calculateAverage([1, 2, 3, 4, 5]));
// function findMaxValue
var findMaxValue = function (arr) {
    var max = Math.max.apply(Math, arr);
    return max;
};
console.log(findMaxValue([1, 5, 9, 2, 3]));
