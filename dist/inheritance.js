"use strict";
class Person1 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Student1 extends Person1 {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}. I am in grade ${this.grade}.`;
    }
}
const person11 = new Person1("santha", 22, ["reading", "painting"]);
const person22 = new Person1("kumar", 21, ["coding", "sports"]);
const student11 = new Student1("sandy", 23, ["music", "racing"], 10);
console.log(student11.introduce());
