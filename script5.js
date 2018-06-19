
let usuario = prompt ("Qual o seu nome?");
let login = prompt ("Digite o seu login:");
let senha = prompt ("Digite a sua senha");
let dia = prompt ("Qual o dia do seu nascimento?");
let mes = prompt ("Qual o mes do seu nascimento?");
let ano = prompt ("Qual o ano do seu nascimento?");
let confirmar = confirm (`Por favor, confirmar os seguintes dados:\n-Nome: ${usuario} \n-Login: ${login} \n-Senha: ${senha} \n-Nascimento: ${dia}/${mes}/${ano}.`);
let anos = (2017 - ano);

if (mes<=7 && dia<=15){
    anos = (2017 - ano + 1);
}

cliente = [usuario,login,senha,ano];

if (confirmar===true) {
    console.log (cliente);
    alert (`Obrigada! No dia do HEXA, você terá ${anos} anos de idade.`);
}

else {
    alert ("Você pressionou Cancelar!")
}

