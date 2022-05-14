//ANONYMOUS FUNCTION 

(function (a, b, c) {// declaro a função e escolho quantos parametros eu quero: 1, 2, 3... ou quantos argumentos eu quiser
    return a + b + c // essa função pode me retornar qualquer coisa, ex: soma dos paremetro 
}) // colocando a função em () o js reconhece como válido

//FUNCTION EXPRESSION
const sum = function (a,b){
    return a + b
}

const result = sum(7,59) //chamo a função e atribuo a uma variavel (result) para poder chamar no print e aparecer na tela o resultado.
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

let x = 3
console.log(x)

// É possivel atribuir ao valor de uma variavel, o mesmo de uma constante o valor de uma função isso é FUNCTIOM EXPRESSION, extremamente utilizado em JS