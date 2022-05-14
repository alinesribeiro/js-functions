// FUNCTION DECLARATION - forma mais simples e mais utilizada para criar funções em JS

function sayHello() { //declarando FUNCTION (palavra reservada), sayHello = nome da função, função sem parametro 
    console.log('Hello!') // tipo print
}

/* 
***EXEMPLO DE FUNÇÃO FUNCTION***
let x = sayHello() //chamo essa funçãl --- função sem paramentro e não retorna nenhum valor
console.log(x) 
*/

sayHello() 

function sayHelloTo(name){ // essa função não retorna absolutamente nada, mas recebe um parametro diferente do primeiro exemplo. 
    console.log(`Hello ${name}`) // ${name}` - dessa forma o valor NAME = Mike será interpretado e irá substituir o valor que foi passado em Name
}

sayHelloTo('Mike')

sayHelloTo()

//Nova função.
function returnHi(){ // função que não recebe nenhum parametro mas retorna alguma coisa 
    return 'Hi!' // não mostra nada na execução, porque não foi printado. 
}
    let greeting = returnHi() // armazenando a função em uma variavel --- declaração de var = let, var, const 
    console.log(greeting) // imprimindo o valor retornado
    console.log(returnHi()) // outra forma de chamar a função

    function returnHiTo(name){ // funçao que recebe parametros e retorna alguma coisa
        return 'Hi ${name}!'
    }

    console.log(returnHiTo('Aline'))