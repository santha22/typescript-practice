function add<T,U>(a:T, b:U, c:boolean) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

const result1 = add<number, string>(5, "santha", true);
const result2 = add<string, number>("Hello", 5, false);