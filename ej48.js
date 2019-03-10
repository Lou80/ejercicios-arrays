var numbers = [6,1,34,94,3,17];
var mul = 0;

mul = numbers.reduce(function(acumulado,numero){
    return acumulado * numero;
}, 1)

console.log(mul);