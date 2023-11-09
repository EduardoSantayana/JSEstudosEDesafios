/*A função tem o objetivo de criar uma matriz bidimensional, com um número row - linhas e column-colunas, preenchidos com zero. 
O código inicializa uma array vazia Arr2d, para armazenar as linhas, 
depois inicializa a array colunas para puxa as linhas.


O loops controlam a criação da array, de modo que o loop externo inicializa uma linhas(row), e o interno adiciona a coluna de números da linha(column).


Anotações : 
Um array (matriz) vazio é simplesmente um array que não contém elementos, tendo sua dimensão igual 0x0.
Uma matriz que tenha 1x1, um elemento em uma linha em uma coluna, tem ao menos um elemento.
Exemplo: [[1]].
*/


function createArr2D(row, column){
let Arr2D = [];    
for (let i = 0; i < row; i++){
    let row = [];
for (let j = 0; j < column; j++) {
    row.push(0);
} Arr2D.push(row); 
}
return Arr2D;
}


const minhaArr = createArr2D(4,4);
console.log(minhaArr);


// somente com arrays. O array não pode ser vazio. 
function isSquareMatrix(arr) {
    // verificar se é uma matriz quadrática.
    // Lembrando que, uma matriz quadrática é aquela que possuir o número de linhas igual ao número colunas. Row = column.
if (Array.isArray(arr) $$ arr.length > 0) {    

}

}