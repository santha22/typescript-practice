"use strict";
const person = {
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
const product = {
    name: "laptop",
    price: 1000,
    quantity: 5,
};
const totalPrice = (product) => {
    return `${product.name} total cost is ${product.price * product.quantity}`;
};
console.log(totalPrice(product));
