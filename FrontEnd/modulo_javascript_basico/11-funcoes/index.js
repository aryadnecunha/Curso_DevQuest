/*
    function nomeDaFuncao(){
        <bloco de execução>
    }

    nomeDaFuncao()
*/

/*function incentivarQuest(){
    alert('Você chegou ao JS, continue assim')
}

incentivarQuest()*/

//-----------------------

/*function soma(numero1, numero2){
    return numero1 + numero2
}

let resultadoDaSoma = soma(1,3)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)*/

//-----------------------

function incentivarQuest(nomeQuester){
    alert('Muito bem ' + nomeQuester + ', você chegou ao JS, continue assim')
}

incentivarQuest('Aryadne')

function incentivarQuest(nomeQuester = 'Quester'){
    alert('Muito bem ' + nomeQuester + ', você chegou ao JS, continue assim')
}

incentivarQuest()
