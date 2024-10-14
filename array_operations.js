var fruits = ["apple", "banana", "orange", "mango"];
// add elements using push 
var newUpdatedFruits = fruits.push("kiwi");
console.log(newUpdatedFruits);
// remove elements using pop 
var lastData = fruits.pop();
console.log(lastData);
// using for loop 
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// using for of 
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// using forEach 
fruits.forEach(function (curFruit) { return console.log(curFruit); });
var numbers1 = [1, 2, 3, 4, 5];
// map method 
// Doubling each number 
var double = numbers1.map(function (item) { return item; });
console.log(double);
// converting numbers to strings 
var numToString = numbers1.map(function (item) { return item.toString(); });
console.log(numToString);
// filter Method 
// Filtering even numbers 
var evenNum = numbers1.filter(function (item) { return item % 2 === 0; });
console.log(evenNum);
// Filtering numbers greater than 3 
var greterThanThree = numbers1.filter(function (item) { return item > 3; });
console.log(greterThanThree);
