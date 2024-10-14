const fruits: string[] = ["apple", "banana", "orange", "mango"];


// add elements using push 
const newUpdatedFruits = fruits.push("kiwi");
console.log(newUpdatedFruits);


// remove elements using pop 
const lastData = fruits.pop();
console.log(lastData);


// using for loop 
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// using for of 
for(let fruit of fruits) {
    console.log(fruit);
    
}


// using forEach 
fruits.forEach((curFruit:string) => console.log(curFruit));



const numbers1: number[] = [1, 2, 3, 4, 5];

// map method 
// Doubling each number 
const double: number[] = numbers1.map((item: number) => item);
console.log(double);

// converting numbers to strings 
const numToString: string[] = numbers1.map((item: number) => item.toString());
console.log(numToString);


// filter Method 
// Filtering even numbers 
const evenNum: number[] = numbers1.filter((item:number) => item % 2 === 0);
console.log(evenNum);


// Filtering numbers greater than 3 
const greterThanThree: number[] = numbers1.filter((item: number) => item > 3);
console.log(greterThanThree);
