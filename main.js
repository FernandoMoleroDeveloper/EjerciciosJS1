/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence1 = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
    return sentence1.replace( /[aeiouAEIOU]/g  , '')
    
}
console.log(noVowels(sentence1));

/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";

function middleCharacter(str){
   return word.slice(2,4)
}

console.log(middleCharacter(word));

/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence2 = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
   return sentence2.slice(1,-1)
}

console.log(deleteFirsLast(sentence2));

/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];


function sumList(list){
    let sum = 0;
    
    for(let i=0; i<list.length; i++){
    sum += list[i]}
    return sum;
}

console.log(sumList(numberList));

/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){

  playerList.sort(function(a,b) {return b.score - a.score;});
  return maxScore = playerList[0].name;
}

console.log(winner(playerList));

/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

counter(rebano1,rebano2);

function counter(list1, list2){
    let total = list1.concat(list2);
    let nOvejas = 0;
    let nVacas = 0;

    for (let i = 0; i<total.length; i++){
        if(total[i] == "o"){
            nOvejas++;
        } else {
            nVacas++;
        }
    }
    console.log(nOvejas);
    console.log(nVacas);
}