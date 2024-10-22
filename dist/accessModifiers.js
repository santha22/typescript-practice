"use strict";
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceParent() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Students extends Persons {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return this.hobbies;
    }
}
const person3 = new Persons("santha", 22, ["reading", "painting"]);
const person4 = new Persons("kumar", 21, ["coding", "sports"]);
const student3 = new Students("sandy", 23, ["music", "racing"], 10);
console.log(student3.introduce());
// console.log(person3.introduceParent())
