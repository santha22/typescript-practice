"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "savarasanthakumar20@gmail.com",
    password: "santha",
    role: Roles.admin
};
const user2 = {
    email: "s180442@gmail.com",
    password: "rgukt",
    role: Roles.user
};
const isAdmin = (user1) => {
    const { name, email, role } = user1;
    return role === "admin" ? `${email} is allow to edit the website` : `${email}
        is not allow to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
