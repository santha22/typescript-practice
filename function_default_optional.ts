// const greeting = (name: string, id: number) => {
//     console.log(`Welcome ${name} your id is ${id}`);
// }

// greeting("santha", 5);



// default parameter
// const greeting = (name: string, id: number = 10) => {
//     console.log(`Welcome ${name} your id is ${id}`);
// }

// greeting("santha");



// optional parameter
const greeting = (name: string, id?: number) => {
    console.log(`Welcome ${name}`);
}

greeting("santha");



const greet3 = (name: string, id?: number): string => {
    if(id) {
        return `Welcome ${name} and id is ${id}`;
    } else {
        return `Welcome ${name}`;
    }
}

const emp = greet3("santha");
const emp2 = greet3("santha", 5);
console.log(emp);
console.log(emp2);
