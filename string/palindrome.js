/* Crie uma função que verifica se uma string (insensível a maiúsculas/minúsculas) é um palíndromo.
Palíndromo é uma palavra, número, frase ou outra sequência de símbolos que se lê da mesma forma de trás para frente, como madam ou racecar, tenet, 101. */



// somente strings.
function isPalindrome(str){
var string_inverse = ""; 
for(let i = str.length -1; i >= 0; i-- ){
    // inverte a ordem da string.
    
    string_inverse += str[i];
} 

if (string_inverse.toLowerCase() === str.toLowerCase()) {
     console.log("verdadeiro");
        return true; 
    } 
    else {
console.log("false");
return false;
    } 
}


isPalindrome("aaaaa");
isPalindrome("098890")
isPalindrome("Tenet") 
isPalindrome("true")
isPalindrome("Roma e amor")