var person = {
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
var product = {
    name: "laptop",
    price: 1000,
    quantity: 5,
};
var totalPrice = function (product) {
    return "".concat(product.name, " total cost is ").concat(product.price * product.quantity);
};
console.log(totalPrice(product));
