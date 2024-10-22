var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
var product2 = {
    name: "Mobile",
    price: 2000,
    quantity: 2,
};
var calculateTotalPrices = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
console.log(product1);
console.log(product2);
