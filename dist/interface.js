"use strict";
const product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
const product2 = {
    name: "Mobile",
    price: 2000,
    quantity: 2,
};
const calculateTotalPrices = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(product1);
console.log(product2);
