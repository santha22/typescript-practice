type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string;
}

const student1: Student = {
    name: "Santha",
    age: 22,
    greet: (country) => `Welcome My name is ${student1.name}, country is ${country}`
}

const student2: Student = {
    name: "Kumar",
    age: 23,
    greet: (country) => `Welcome My name is ${student2.name}, country is ${country}`
}

const introduction = () : string => {
    const { name, age } = student1;
    return `Welcome My name is ${name}, I am ${age} years old`;
};

console.log(introduction());
console.log(student1.greet("India"));
console.log(student2.greet("Us"));
