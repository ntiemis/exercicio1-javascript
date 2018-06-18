
let meninas = ["Maria","Ana","Carolina","Amanda","Bruna"];
let meninos = ["Mario","Carlos","Fabio","Bruno","José"];

let numeroCasal = 1;
let i = 0;
let j = 0;

while(i < meninos.length){
    j = 0;
    while(j < meninas.length){
        console.log(`Casal ${numeroCasal}: ${meninos[i]} e ${meninas[j]}.`);
        j++;
        numeroCasal++;
    }
    i++;
}