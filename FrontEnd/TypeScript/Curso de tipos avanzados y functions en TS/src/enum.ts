/*
  * Enums
  Con un enum tenemos que ser mas específicos al momento de llamar a sus valores, no podemos acceder a ellos como si fuera una simple cadena.

  Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera: 
 */

export enum ROLES {
    ADMIN = "admin",
    USER = "user",
    OWNER = "owner",
}

function isUser(user: ROLES) {
    switch (user) {
        case ROLES.ADMIN:
            console.log("is admin");
            break;
        case ROLES.USER:
            console.log("is user");
            break;
        case ROLES.OWNER:
            console.log("is owner");
            break;
    }
}

// isUser(ROLES.ADMIN);

// export { ROLES };
