// A PARTIR DE UMA FUNCTION EXPRESSION COMO PODEMOS TRANSFORMAR ELA EM UMA FUNÇÃO ARROW

const increment1 = function(n){ //função que chamei de incremento 1 (que seria a 1ªversão dessa função) -- function(n) defino uma função anonima/function express recebendoi um valor (n)
    return n + 1 // a resposta dessa função retorna n + 1 -- função de incremento em várias linguagens +1
}

//Função arrow sempre é anonima
const increment2 = (n) => { //2ªversão da função - em função arrow = =>
    return n + 1 
}

const increment3 = n => { // é possivel ser feito dessa forma quando se tem um único parametro e é exclusivamente utilizado em função arrow
    return n + 1
}

const increment4 = n => n + 1 //forma simplificada de declaração - quando não tem {} o return fica de forma IMPLICITA 

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b) => a + b // necessário colocar entre () pois são DOIS parametros. 
console.log(sum(3,8))