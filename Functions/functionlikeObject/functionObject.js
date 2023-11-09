/*Em javascript as funções são objetos especializados. Desse modo, é possível definir propriedades internas a uma função.
Essa prática pode ser útil para variáveis estáticas e para controle de chamada das funções.
*/


function aObject() {} // função vazia ; 


// Define uma propriedade na função.
aObject.arrElements = ["conteúdo da função"]; 

// mostra o elemento arr da função.
//console.log(aObject, typeof aObject == "function");  




// Define uma função que armazena o número de chamadas e um array com o "histórico" de horário da chamada.


function minhaFuncao() {
// atualizar a data atual.
Dataslog = new Date();
if ( minhaFuncao.execucoes === undefined) {
    // se não existe uma propriedade da função; então define,
    minhaFuncao.contador = 1;
  } else {
    minhaFuncao.contador++;
  }


if ( minhaFuncao.execucoes == 100) {
    // se a chamada foi executada n vezes, lançar um error.
    clearInterval(intervalId);
    throw new Error("Essa função excedeu o número de chamadas");

}

console.log(minhaFuncao);
return minhaFuncao.execucoes++, minhaFuncao.arrLogs.push("execução: " + minhaFuncao.execucoes, minhaFuncao.Dataslog = new Date());
}
// define as propriedades;
minhaFuncao.Dataslog = new Date();
minhaFuncao.arrLogs = []; 
minhaFuncao.execucoes = 0;

// chama as função a cada  cada 700 milissegundos
setInterval(chamadas, 700); 
// quando chagar em 100 chamadas, causará o error.



// código precisa de revisão :) 