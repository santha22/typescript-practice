class Persons1 {
    private _age: number | undefined;

    constructor(public name: string, protected hobbies: string[]) {}

    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        } 
        this._age = age;
    }

    public get age() : number {
        if(this._age ===  undefined) {
            throw new Error("age is not valid");
        } 
        return this._age;
    }

    introduceParent(): string {
        return `Hi, I'm ${this.name} and I'm
            ${this._age} years old. I love ${this.hobbies.join(",")}.`;
    }
}

const person5: Persons1 = new Persons1("santha", ["reading", "painting"]);

person5.age = 12;

console.log(person5.introduceParent());
console.log(person5.age);

