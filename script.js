
let idade = prompt ("Quantos anos você tem?");
let renda = prompt ("Qual a sua renda mensal em reais?");
let valor = prompt ("Qual é o valor que deseja empréstimo?");
//valor =  number (valor); >1000; <15*renda;
if (idade <22 || idade >55){
    alert("Reprovado!")
    idade=false;
    }
if (valor>renda*15){
    alert("Reprovado")
    valor=false;
}    



//while(cliente=true){
//   alert("Aprovado!");
//    }


//else if {
//alert("Reprovado!");}
