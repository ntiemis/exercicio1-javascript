
let usuario = prompt ("Qual o seu nome?");
let login = prompt ("Digite o seu login:");
let senha = prompt ("Digite a sua senha");
let data = prompt ("Qual a sua data de Nascimento?");
let confirmar = confirm (`Nome: ${usuario} Login: ${login} Senha: ${senha} Nascimento: ${data}`)

lista = [usuario,login,senha,data];

if (confirmar=true) {
    alert ("Obrigada!");
    console.log (lista);}

else if (confirmar = false){
    alert ("Você pressionou Cancelar!")
}

