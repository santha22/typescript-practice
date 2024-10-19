var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    email: "savarasanthakumar20@gmail.com",
    password: "santha",
    role: Roles.admin
};
var user2 = {
    email: "s180442@gmail.com",
    password: "rgukt",
    role: Roles.user
};
var isAdmin = function (user1) {
    var name = user1.name, email = user1.email, role = user1.role;
    return role === "admin" ? "".concat(email, " is allow to edit the website") : "".concat(email, "\n        is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
