// Tipado por índice
// Es básicamente darle el tipado directamente tomándolo de una interfaz

interface UserLogin {
    username: number;
    password: string;
}

// Aquí le estamos dando el tipado directamente a la variable
function login(username: string): void {
    console.log(username);
}

// Aquí le vamos a dar el tipado dependiendo de la interfaz
function loginV2(username: UserLogin["username"]): void {
    console.log(username);
}
