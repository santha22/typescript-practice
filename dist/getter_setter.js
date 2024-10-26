"use strict";
class Persons1 {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not valid");
        }
        return this._age;
    }
    introduceParent() {
        return `Hi, I'm ${this.name} and I'm
            ${this._age} years old. I love ${this.hobbies.join(",")}.`;
    }
}
const person5 = new Persons1("santha", ["reading", "painting"]);
person5.age = 12;
console.log(person5.introduceParent());
console.log(person5.age);
