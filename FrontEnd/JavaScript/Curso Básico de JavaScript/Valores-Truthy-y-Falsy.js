/* 
    ¿Qué tipos por default son verdaderos y falsos?

    Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True.

    >> Todo esto lo vamos a usar en condicionales, esto valida si es verdadero o falso para ejecutar cierta acción.
*/


// –> Falsy
Boolean()           // —> sin ningun valor es false
Boolean(0)          // —> false
Boolean(null)       // —> false
Boolean(NaN)        // —> false // NaN es Not and Number
Boolean(undefined)  // —> false
Boolean(false)      // —> false
Boolean("")         // —> false


// –> Truthy
Boolean(1)                  //—> true // cualquier numero que no sea igual a cero es true
Boolean("a")                //—> true
Boolean(" ")                //—> true // siendo un espacio el valor es true
Boolean([])                 //—> true // un array nos da un true
Boolean({})                 //—> true // un objeto nos da el valor de true
Boolean(function () { })    //—> true // una funcion también es true
Boolean(true)               //—> true