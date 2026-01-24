/*
const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 1
    let anodeNascimento = 2026 - idade
    if(mesDeNascimento > mesAtual) anodeNascimento--
    imprimir(anodeNascimento)
}

let imprimirAnoDeNascimento = anodeNascimento => {
    console.log('Seu ano de nascimento é: ' + anodeNascimento)
}

calcularAnoDeNascimento(35, 5, imprimirAnoDeNascimento)
*/

/*
function dobrar(numero){
    return numero * 2
}

console.log(dobrar(2))
*/

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(4))
console.log(triplicar(4))
console.log(quadruplicar(4))