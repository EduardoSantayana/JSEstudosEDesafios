
// define uma constructor com propriedades fictícias por padrão.

function createBooks(name, author, data, description, disponivel){

this.name = name; 
this.author = author ; 
this.data = data;
this.description = description; 

// propriedades com valores padrões. 
// Se um objeto altera essa propriedade, ela e refletida dentro de todos os outras instâncias.
this.library = "Biblioteca Constructor Books"  
this.selo = "Instanciada por meio da  construtora 'books'";
this.contato = "TheConstructorBooks@library.com";
this.original = "product original, by books";  
if(disponivel === true ) { 
    this.formats = ["pdf", "epub", "text"];
    this.online = true; 
} else {
    this.online = false; 
    this.disponivel = false; 
this.formats =  "indisponível" ;  
}

// método herdado em todos os objetos.
this.informacoes = function informacoes(){
    console.log(`Título: ${this.name} \n Por: ${this.author} \n Descrição :${this.description} \n Disponível: ${this.online} \n Formatos: ${this.formats}\n Compre em: ${this.library} \n Contato: ${this.contato}`);
}

} 

// Cria uma função que chama a constructor. Apenas para exemplo básico.
function instancia(constructor, a,b,c,d,e ){
return new constructor(a,b,c,d,e );    
}


// instância diretamente 
const mrsDalloway = new createBooks("Mrs Dalloway", "Virginia Woolf", 1925, " Mrs. Dalloway narra um único dia da vida da famosa protagonista Clarissa Dalloway, que percorre as ruas de Londres em um fluxo de consciência.");

const Werther = new createBooks("the sorrows of young Werther", "Goethe", 1774, " Werther é um jovem que busca a autodescoberta e experimenta um momento decisivo em sua vida após um evento que o afeta profundamente. O romance descreve as emoções e a jornada emocional do personagem, tornando-o um dos personagens literários mais conhecidos na literatura alemã e europeia.", true ); 

// instância com a função ao invés de chama diretamente a constructor.
const DorianGrey = instancia(createBooks, "the picture of dorian gray", "Oscar Wilde", 1890, "The Picture of Dorian Gray is a novel written by Oscar Wilde and first published in 1890. A mysterious wish is granted to Dorian.", true); 




function compareObj(objA, ObjB){
// De maneira simples, verifica se dois objetos foram inicializados pela mesma constructor.
if ( objA.constructor.name ===  ObjB.constructor.name ) {
// A propriedade constructor.name verifica qual função construtora que inicializou o objeto, retornando o nome da função como uma string. 
// Isso permite a comparação dos nomes de várias constructoras.

    console.log("objetos compartilham a mesma constructor", objA.constructor.name ); 
    return true;
} else {console.log("Os objetos não possuem a mesma constructor."); 
console.log("constructos:", objA.constructor.name, ObjB.constructor.name, );
return false; 
} }

// teste manual 
compareObj(Werther, {}); // false, 
compareObj(Werther, Object) // false 
compareObj (Werther, mrsDalloway) // true 
compareObj(mrsDalloway, DorianGrey) // true 


function Car(name){
    this.car = name;
}

const GtR = new Car("Gt-R");

compareObj(Werther, GtR) // false 


/*  As funções construtoras são as funções que são usadas para iniciar e instanciar Objetos com propriedades já definidas/herdas. ´
A Constructors são chamadas ao lado da palavra-chave new, o que criar o novo objeto. Esse objeto herda propriedades e métodos da sua constructor. Assim, uma constructor pode controlar o encadeamento de herança de um objeto manipulando o protótipo. 

*/