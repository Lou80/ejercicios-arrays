/* Crear un documento con el nombre arr_017.js
Si tenemos el array playlist */

var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

/*Recorrer la lista de canciones con un ciclo y mostrarlas en consola una a una utilizando console.log()
De inicio a fin
De fin a inicio*/


for (var i = 0; i < playlist.length-1; i++) {
    console.log(playlist[i]);
}


for (var i = playlist.length -1; i >= 0; i--) {
    console.log(playlist[i]);
}