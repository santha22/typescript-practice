interface Products {
    name: string;
    price: number;
    quantity: number;
}

const product1: Products = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
}

const product2: Products = {
    name: "Mobile",
    price: 2000,
    quantity: 2,
}

const calculateTotalPrices = (product: Products): number => {
    const { price, quantity } = product;
    return price * quantity;
}

console.log(product1);
console.log(product2);
