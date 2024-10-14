// function declaration 

// function greet (name: String, id: Number) {
//     console.log(`your name is ${name} and id is ${id}`);
    
// }

// greet("santha", 1);


// function return 
var greet = (name: string, id: number):string => {
    return `your name is ${name} and id is ${id}`
}

console.log(greet("santha", 1));



// palindrome
// const isPalindrome = (palin:string):boolean => {
//   let myPalin = palin.split("").reverse().join("")
//   return myPalin === palin;   
// }

// console.log(isPalindrome("12321"));


// function calculateAverage
const calculateAverage = (arr: number[]): number => {
    const sum = arr.reduce((acc, item) => acc += item, 0);
    return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));


// function findMaxValue
const findMaxValue = (arr: number[]): number => {
    const max = Math.max(...arr);
    return max;
}

console.log(findMaxValue([1, 5, 9, 2, 3]));
