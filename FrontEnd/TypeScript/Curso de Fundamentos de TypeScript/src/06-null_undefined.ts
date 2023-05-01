/**
 ** Nullish coalescing operator (??) VS logical OR operator (||)

La gran diferencia entre estos dos es que el logical OR operator (||) toma como valores falsos a 0, NaN, strings vacíos ("", '', ``), false, a demás de null y undefined.
** mientras que Nullish coalescing operator (??) toma como valores falso solamente a null y undefined.

En el caso de las funciones se ejecuta la misma, realizan todos los cálculos que tienen que hacer, pero ambos operadadores ?? y || únicamente se fijan en lo que retorna dichas funciones.
En el caso del ejemplo del profesor veo más factible utilizar nullish coalescing operator en vez de logical OR operator.
*/
