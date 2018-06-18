let altura = prompt ("Qual o tamanho para sua escada?");

function escada(altura){
    let lista = [];
    for(let index = 1; index <= altura; index++){
      lista.push("#".repeat(index))
    }
  
    lista.forEach(function(item) {
      console.log(item)
    })
  }
  
  escada(altura);
