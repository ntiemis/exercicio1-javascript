
function sorteio(minimo=0, maximo=50){
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleatorio;
}

sorteio();

let numero = sorteio(sorteio.aleatorio);
let palpite = prompt ("Adivinhe qual número estou pensando de 0 à 50?");

while (palpite<numero){
    alert("Tente um número MAIOR");
    palpite = prompt ("Adivinhe qual número estou pensando de 0 à 50?");
    }
    
while (palpite>numero){
    alert("Tente um número MENOR");
    palpite = prompt ("Adivinhe qual número estou pensando de 0 à 50?");
    }

if (palpite = numero) {
    alert("Parabéns!!! Você acertou!");
}

if (isNaN(palpite)){
        alert("ERRO: VALOR INVÁLIDO");
    }

