const inputValue = (value: string | number): string | number => {
    if(typeof value === "number") {
        return value * 2;
    } else if(typeof value === "string") {
        return value.toUpperCase();
    } else {
        throw new Error("Invalid input data");
    }
}

console.log(inputValue(10));
console.log(inputValue("hello world"));


type Person = {
    name: string;
    age: number;
}

type Employee = {
    emp_id: number;
    department: string;
}

type EmployeeDetails = Person & Employee

const employee: EmployeeDetails = {
    name: "santha",
    age: 22,
    emp_id: 1111,
    department: "IT"
}


type User = {
    name: string;
    age: number;
}

type MyLocation = {
    city: string;
    country: string;
}

const user: User = { name: "santha", age: 22 };
const myLocation: MyLocation = {city: "srikakulam", country: "India" };

const createUserProfie = (user: User, myLocation: MyLocation) => {
    return { ...user, ...myLocation };
}

const myCompleteInfo: User & MyLocation = createUserProfie(user, myLocation);

console.log(myCompleteInfo);
