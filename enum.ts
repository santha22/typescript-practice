enum Roles {
    user= "user",
    admin= "admin"
}


type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles
}


const user1: LoginDetails = {
    email: "savarasanthakumar20@gmail.com",
    password: "santha",
    role: Roles.admin
}

const user2: LoginDetails = {
    email: "s180442@gmail.com",
    password: "rgukt",
    role: Roles.user
}


const isAdmin = (user1: LoginDetails): string => {
    const {name, email, role } = user1;
    return role === "admin" ? `${email} is allow to edit the website` : `${email}
        is not allow to edit the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
