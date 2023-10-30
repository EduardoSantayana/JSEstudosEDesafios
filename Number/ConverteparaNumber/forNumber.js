
function forNumber(n) {
try { 
    if (typeof n === 'number' && isFinite(n)) {
     return n;
  }
  else if (typeof n === 'string') {
    
    const parsedValue = parseFloat(n);
    if (isFinite(parsedValue)) {

        
      return parsedValue;
    }
} 
    
 // Se o elemento não é número e nem String, lança um error.
throw new Error("Type"+ typeof n +  ' O elemento não pode ser convertido, retornando NaN.');
}
catch(error){
 //   console.error(error.message); 
    return NaN;  
    } 
} 


// uma função que testa se forNumber() passa em todos os requisitos de criação.

function teste( func, valor) {
  var  testValue =  func(valor);
  if (typeof testValue === "number" && !Number.isNaN(testValue)) {
// é um number válido 
 console.log("Sucesso: valor " + testValue +" Type: "+ typeof testValue ); 
 return true;
    } else if (Number.isNaN(testValue)) {
    console.log("A String não pode ser convertida: " + testValue );
    return false;
  } else {
    console.error("Error não esperado" + typeof testValue);
return undefined;
  }
} 


teste(forNumber, 1); 
teste(forNumber, 0); 
teste(forNumber, true);
teste(forNumber, false);
teste(forNumber, null);
teste(forNumber, undefined);
teste(forNumber, "Hello world");
teste(forNumber, "");
teste(forNumber, -12312323);
teste(forNumber, 10+1 );
var test1 = 123123 + null; 
teste(forNumber, test1);
test1 = 12.1 +"1" ; 
teste(forNumber, test1);
teste(forNumber, [1,2,3]);
teste(forNumber, {testeNan: 123});
teste(forNumber, forNumber("92132"));
// 
