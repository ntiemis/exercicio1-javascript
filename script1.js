
let idade = prompt ("Quantos anos você tem?")
let renda = prompt ("Qual a sua renda mensal em reais?")
let valor = prompt ("Qual é o valor que deseja empréstimo?")
let parcelas = prompt ("Em quantas parcelas?");

let total = valor*(Math.pow((1+0.08),parcelas));
let mes = total/parcelas;

let cliente = {idade,valor,renda}

if (isNaN(idade) || isNaN(renda) || isNaN(valor)){
        alert("ERRO: VALOR INVÁLIDO");
    }

else if (idade<22 || idade>55 || valor>renda*15 || valor<1000 || parcelas<3 || parcelas>20){
    alert("Reprovado");
    cliente=false;
    }

else {
    alert(`Aprovado! Valor pago mensalmente será: R$ ${mes.toFixed(2)}, dando um total de R$ ${total.toFixed(2)}.`);
    cliente=true;
}


