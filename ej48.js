/*Crear un documento con el nombre arr_048.js
Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3, 4], la suma de todos los números es 24
Ayuda: ojo con el valor de comienzo
var numbers = [6, 1, 34, 94, 3, 17];
var mul = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(mul);
// deberia mostrar 977976 */
var numbers = [6,1,34,94,3,17];
var mul = 0;

mul = numbers.reduce(function(acumulado,numero){
    return acumulado * numero;
}, 1)

console.log(mul);