class Person1 {
    name: string;
    age: number;
    hobbies: string[];


    constructor(name: string, age:number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`
    }
}


class Student1 extends Person1 {
    grade: number;

    constructor(name: string, age:number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade;
    }

    introduce(): string {
        return `${super.introduce()}. I am in grade ${this.grade}.`
    }
}

const person11: Person1 = new Person1("santha", 22, ["reading", "painting"]);
const person22: Person1 = new Person1("kumar", 21, ["coding", "sports"]);
const student11: Student1 = new Student1("sandy", 23, ["music", "racing"], 10);


console.log(student11.introduce())