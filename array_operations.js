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
