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