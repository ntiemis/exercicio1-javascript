let numero = 30
let palpite = prompt ("Adivinhe qual número estou pensando de 0 à 50?");

if (isNaN(palpite)){
    alert("ERRO: VALOR INVÁLIDO");
}

else if (palpite<numero){
    alert("Tente um número MAIOR");
    }

else if (palpite>numero){
    alert("Tente um número MENOR");
}

else {
    alert("Parabéns!!! Você acertou!");
    }


