type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: { city: string; country: string; }
}

const person: Person = {
    name: "Santha",
    age: 22,
    isStudent: false,
    address: {
        city: "Srikakulam",
        country: "Andhrapradesh"
    }
};

console.log(person);


// accessing 
console.log(person.address.city);

// updation 
person.address.city = "Palasa";
console.log(person);



// Aliases 
type Product = {
    name: string,
    price: number,
    quantity: number
}

const product: Product = {
    name: "laptop",
    price: 1000,
    quantity: 5,
}

const totalPrice = (product: Product) => {
    return `${product.name} total cost is ${product.price * product.quantity}`
}

console.log(totalPrice(product));

 
