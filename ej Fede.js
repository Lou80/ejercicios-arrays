var listaDeNombres = ['Maqui', 'Lourdes', 'Fede'];
function convertirASilabas(nombres) {
    var silabas = nombres.reduce(function (acumulado, nombre) {
        var primerSilaba = (nombre[0] + nombre[1]).toLocaleUpperCase();
        if (acumulado === '') {
            return primerSilaba;
        } else {
            return acumulado + '-' + primerSilaba;
        }
    }, '');
    return silabas;
}

console.log(convertirASilabas(listaDeNombres));