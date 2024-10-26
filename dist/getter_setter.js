"use strict";
// class Persons1 {
//     private _age: number | undefined;
//     constructor(public name: string, protected hobbies: string[]) {}
//     public set age(age: number) {
//         if (age > 150 || age < 0) {
//             throw new Error("age is not valid");
//         } 
//         this._age = age;
//     }
//     public get age() : number {
//         if(this._age ===  undefined) {
//             throw new Error("age is not valid");
//         } 
//         return this._age;
//     }
//     introduceParent(): string {
//         return `Hi, I'm ${this.name} and I'm
//             ${this._age} years old. I love ${this.hobbies.join(",")}.`;
//     }
// }
// const person5: Persons1 = new Persons1("santha", ["reading", "painting"]);
// person5.age = 12;
// console.log(person5.introduceParent());
// console.log(person5.age);
// class BankAccount {
//     private _balance: number = 0;
//     public set balance(newBalance: number) {
//         if(newBalance < 0){
//             throw new Error("negative balance");
//         }
//         this._balance = newBalance;
//     }
//     public get balance(): number {
//         if(this._balance < 0){
//             throw new Error("negative balance");
//         }
//         return this._balance;
//     }
// }
// const account = new BankAccount();
// account.balance = 200;
// console.log(account.balance);
// Temperature Converter 
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newFa) {
        this._celsius = ((newFa - 32) * 5) / 9;
    }
}
const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 77;
console.log(temp.celsius);
