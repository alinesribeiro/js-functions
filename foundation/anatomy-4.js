//ANONYMOUS FUNCTION 
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a+b+c}`)
    console.log(x)
}) (1,2,3);

// como eu chamo uma função anonima?????? >>>>>>>>>>>>>> IIFE 

/*
**** Quando é necessario utilizar esse tipo de construção??? usar uma função imediatamente invocada ****

QUANDO VOCÊ PRECISA GARANTIR QUE DETERMINADOS VALORES VÃO ESTAR DENTRO DE UM ESCOPO MAIS RESTRITO 

*/

(function (a, b, c) {
    let x = 300     // posso utilizar mesma variavel para atribuir outro valor, pois é outra função.
    console.log(`Result: ${a+b+c}`)
    console.log(x)
}) (1,2,3);

// é mais comum nao ter parametros quando se tem uma função imediatamente invocada 

(function(){
    let x = 350
    console.log(x)
})();     // ficando dessa forma 

//É POSSIVEL CRIAR FUNÇÕES DESSE TIPO, SENDO FUNÇÃO ARROW 

(() => {
    console.log('arrow #01')
})();


//é possivel ter também somente uma linha de codigo 

(() => console.log('arrow #02'))();