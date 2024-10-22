"use strict";
function logAndReturn(value) {
    return value;
}
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("Hello, Generics!");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
