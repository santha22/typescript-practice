function logAndReturn<T>(value: T): T {
    return value;
}

const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>("Hello, Generics!");
const booleanResult = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
