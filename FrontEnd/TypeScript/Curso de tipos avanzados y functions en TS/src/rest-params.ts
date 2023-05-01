// Parámetros rest
// Los parámetros rest nos permiten enviar la cantidad que queramos de parámetros a una función, casi sin limite.


import { ROLES } from "./enum";

interface User {
    userName: string;
    password: string;
    Role: ROLES;
}

const currentUser: User = {
    userName: "admin",
    password: "1234",
    Role: ROLES.OWNER,
};

// Aquí estamos usando un spread operator para agrupar todos los argumentos que se pasen como roles.
// ...roles => es un array de roles
const checkRole = (...roles: string[]) => {
    if (roles.includes(currentUser.Role)) {
        return true;
    }
    return false;
};

const rpta: boolean = checkRole(ROLES.ADMIN);

console.log(rpta);
