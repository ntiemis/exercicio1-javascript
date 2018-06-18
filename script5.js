
let usuario = prompt ("Qual o seu nome?");
let login = prompt ("Digite o seu login:");
let senha = prompt ("Digite a sua senha");
let data = prompt ("Qual a sua data de Nascimento?");
let confirmar = confirm (`Por favor, confirmar os seguintes dados:\n-Nome: ${usuario} \n-Login: ${login} \n-Senha: ${senha} \n-Nascimento: ${data}`);

lista = [usuario,login,senha,data];

if (confirmar===true) {
    console.log (lista);
    alert ("Obrigada!");
}

else {
    alert ("Você pressionou Cancelar!")
}

