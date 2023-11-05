// objeto literal
const person = {
    name: "Fire Fox",
    Activity: "Student",
    Learning1: "Javascript",
    Learning2: "Html",
    Interested: "CSS",
    language: "english",
    Age: 20,
    Resume: {
        Studying: true,
        University: true,
        Bootcamps: {
            jscamp: true,
            React: "true",
            pythoncamp: false
        },
        Working: false,
        ExperienceTime: null,
        Description: "",
    },

    // define um método que imprime as propriedades do objeto.
    Saydescription: function () {
        console.log(`Hello world, I'm ${this.name}, I'm ${this.Age} years old, I'm fluent in ${this.language}, and I'm a ${this.Activity}. I'm studying ${this.Learning1} and ${this.Learning2}, and I intend to learn ${this.Interested}. Thanks for read.`);
    }
};



function isObject(obj) {
    // Essa função verifica se é um objeto. 
    // objetos null,undefined e arrays são descartados.
    try {
        if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
            //console.log("is object");
            return true, obj;
        } else {
            throw new Error("The param is not a object");
        };

    } catch (e) {
        //    console.error(e);
        return false;
    }
}

// lista as propriedades do objeto, retornando nome e tipo.
function listName(object) {


    if (isObject(object)) {
        for (var prop in object) {


            if (isObject(object[prop])) {
                //Se uma propriedade é um objeto, executar uma recursão. 
                listName(object[prop]);
            }

            if (typeof object[prop] === "function") {
                // se a propriedade é um método.
                console.log(`nome: ${prop} \n valor: this is a function \n type: function method\n`);
                continue;
            }

            console.log(`nome: ${prop} \n valor: ${object[prop]} \n type: ${typeof object[prop]}\n`);
        }
    }



};

function isMethod(obj, func) {
    if (isObject(obj)) {
        // Apenas verifica se a função é um método do objeto.
        if (obj.hasOwnProperty(func) && typeof obj[func] === 'function') {
            // console.log("a propriedade é um método do objeto");
            //obj[func]();  
            return true
        } else {
            //console.log("não é um método");
            return false;
        }
    }
}

function callThis(obj, func, method) {
    // chama uma função com um objeto, ou chama um objeto com um método.
    // se a function também é um objeto, procura o method dentro dele é aplica ao primeiro objeto.
    if (isMethod(obj, func)) {
        console.log("executa o método do objeto");
        return obj[func]();
    }
    // se não é um método, tenta chamar a função utilizando o objeto
    else if (isObject(obj) && typeof func === "function") {
        console.log(`Executando ${func.name} com o objeto}`);
        func(obj)
    } 
    else if (isMethod(func, method) && isObject(obj)) {
console.log("se a func é um objeto, chamar seu método em obj");
const executeMethod = func[method].bind(obj); // constante temporária 
return executeMethod();
}
    else { console.log("Os parâmetros não cumprem o requisitos"); }
}



const obj_test = {
    name : "hello, Im a object",
    testmethod: function () {
    // throw this.error; 
    return console.log(this.name); ; 
    }
} 

// testes manuais 
// callThis(person, listName) true
// callThis(person, person.Saydescription ); true
// callThis(person, "Saydescription") // true
// callThis(person, isObject);  true ;
 // callThis (person, isMethod);  true 
// callThis(person, obj_test, "testmethod") true 



/*
A mensagem do commit está corrigida. Aqui está a versão revisada:

```
O arquivo define algumas funções simples.
A função 'callThis' aceita três parâmetros: "obj, func, method" e verifica se 'func' é um método de 'obj'. Se for um método, ele é executado; caso contrário, a função 'func' é executada, repassando o objeto como parâmetro. O parâmetro 'method' é opcional e permite especificar o nome de um método quando 'func' é um objeto. Nesse caso, 'func' chama seu método e o repassa para o objeto do parâmetro e, em seguida, o executa. 
'isObject' verifica se é um objeto. 'isMethod' verifica se 'func' é um método do objeto. 'listName' lista todas as propriedades de um objeto e de seus objetos internos, exibindo no console o nome, valor e tipo.
```

Esta versão revisada da mensagem do commit está mais clara e precisa. Ela descreve as funções e seus comportamentos de maneira mais legível.
*/

