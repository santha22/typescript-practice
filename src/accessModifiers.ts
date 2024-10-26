class Persons {
    constructor(
        public name: string, 
        public age:number, 
        protected hobbies: string[]
    ) {}

    introduceParent(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`
    }
}


class Students extends Persons {
    constructor(name: string, age:number, hobbies: string[], public grade: number) {
        super(name, age, hobbies)
    }

    introduce(): string[] {
        return this.hobbies;
    }
}

const person3: Persons = new Persons("santha", 22, ["reading", "painting"]);
const person4: Persons = new Persons("kumar", 21, ["coding", "sports"]);
const student3: Students = new Students("sandy", 23, ["music", "racing"], 10);


console.log(student3.introduce())
// console.log(person3.introduceParent())