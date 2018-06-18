
let tamanho = prompt ("Qual o tamanho para sua escada?");

function escada(tamanho){

    let lista = [];
    let item = 1
    
    while(item <= tamanho){
      lista.push("#".repeat(item));
      item++;
    }
  
    lista.forEach(function(escada) {
      console.log(escada)
    })

  }
  
escada(tamanho);



/*let tamanho = prompt ("Qual o tamanho para sua escada?");

function escada(tamanho){

    let lista = [];
    
    for(let item = 1; item <= tamanho; item++){
      lista.push("#".repeat(item))
    }
  
    lista.forEach(function(altura) {
      console.log(altura)
    })

  }
  
  escada(tamanho);*/
  
