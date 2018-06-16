
let idade = prompt ("Quantos anos você tem?")
let renda = prompt ("Qual a sua renda mensal em reais?")
let valor = prompt ("Qual é o valor que deseja empréstimo?")

let cliente = {idade,valor,renda}

if (isNaN(idade) || isNaN(renda) || isNaN(valor)){
        alert("ERRO: VALOR INVÁLIDO");
    }

else if (idade <22 || idade >55 || valor>renda*15 || valor<1000){
    alert("Reprovado!");
    cliente=false;
    }

else {
    alert("Aprovado");
    cliente=true;
}
