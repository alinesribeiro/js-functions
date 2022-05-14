function logParams(a, b, c) {
    console.log(a, b, c)
}
    logParams(1, 2, 3)
    logParams(1, 2, 3, 4, 5) // se eu chamar essa função chamando mais parametros do que foi declarado, ele simplesmente vai ignorar 
    logParams(1, 2) // se eu chamar a função com um parametro a menos, ele vai trazer a qtd que chamei e o que não foi chamado vai constar como UNDEFINED m
    logParams(1)
    logParams()

// É POSSIVEL TER UMA VALOR PADRÃO? SIMMMM

function defaultParams(a, b, c = 0){
    console.log(a, b, c)
}
defaultParams(7, 8) // se nao for declaro o 3 parametro ele vai retornar o valor que foi atribuido dentro da função

//PASSANDO DIVERSOS PARAMETROS - DE UMA FORMA FLEXIVEL -- UTILIZANDO ARRAY 

function logNums(...nums){ // (...nums) -- os parametros da função com ... chama se SPREAD/REST: Isso signigica que essa função vai conseguir receber qtd variavel de parametros e todos serao armazenados dentro da função.
    console.log(Array.isArray(nums))
    for(let n of nums){
        console.log(n)
    }
}

logNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // array -- utilizando SPREAD/REST os não é necessario utilizar [1,2...] só os ()

//Aplicação pratica da soma de todos os números
function sumAll(...nums){ //criei uma função que se chama sumAll que recebe vários números 
    let total = 0 // tenho um total que começa com ZERO 
    for(let n of nums){
       total += n //add o valor de n ao total 
    }
     return total
}

console.log(sumAll(1,2,3,4,5))