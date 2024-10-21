var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var inputValue = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
console.log(inputValue(10));
console.log(inputValue("hello world"));
var employee = {
    name: "santha",
    age: 22,
    emp_id: 1111,
    department: "IT"
};
var user = { name: "santha", age: 22 };
var myLocation = { city: "srikakulam", country: "India" };
var createUserProfie = function (user, myLocation) {
    return __assign(__assign({}, user), myLocation);
};
var myCompleteInfo = createUserProfie(user, myLocation);
console.log(myCompleteInfo);
