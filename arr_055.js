/*Crear un documento con el nombre arr_055.js
Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
Queremos eliminar todos los números negativos
Con los números restantes, obtener el doble de cada uno
Finalmente, obtener la suma de todos los números
*/
var datos = [2, -4, 6, 0, 5, -1];

// codear acá la solución del ejercicio
var sinNegativos = datos.filter(function(numero){
    return numero >= 0;
});

numDobles = sinNegativos.map(function(numero){
    return numero * 2;
});

var total = numDobles.reduce(function(acumulador, numero){
    return acumulador + numero;
}
)


console.log(total); // 26