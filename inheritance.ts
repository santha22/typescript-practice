class Person {
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


class Student extends Person {
    grade: number;

    constructor(name: string, age:number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade;
    }

    introduce(): string {
        return `${super.introduce()}. I am in grade ${this.grade}.`
    }
}

const person1: Person = new Person("santha", 22, ["reading", "painting"]);
const person2: Person = new Person("kumar", 21, ["coding", "sports"]);
const student1: Person = new Student("sandy", 23, ["music", "racing"], 10);


console.log(student1.introduce())