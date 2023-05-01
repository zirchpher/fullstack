// ReadOnly en TypeScript
// Como su nombre lo indica, este feature de TS nos ayuda a tener ciertos atributos solo de lectura. Lo que significa que no pueden ser modificados. Un buen caso de uso es el id y el createdAt.

const users: UserInterface[] = [];

interface BaseModelInterface {
    readonly id: string | number;
    readonly createdAt: Date;
    updatedAt: Date;
}

interface UserInterface extends BaseModelInterface {
    name: string;
    email: string;
    password: string;
}

function addUser(user: UserInterface): void {
    // user.id = 1; // Error no se puede modificar un atributo readonly
    users.push(user);
}

addUser({
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "John",
    email: "remix@gmail.com",
    password: "123456",
});

