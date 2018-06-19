
let tamanho = Number (prompt ("Qual o tamanho para sua escada?"));
let degrau = prompt ("Digite o modelo do degrau.");

function escada(tamanho){

    let lista = [];
    let item = 0;
    
    while(item <= tamanho){
      lista.push(degrau.repeat(item));
      item++;
    }
  
    lista.forEach(function(escada) {
      console.log(escada)
    })

  }
  
escada(tamanho);