var frases = ['kejfhekfhogissrgihrgheriperp', 'jfe', 'skefhekfh', 'sfuhshwrge'];

var frasesCortas = frases.filter(function(frase){
    return frase.length <= 10;
});

console.log(frasesCortas);