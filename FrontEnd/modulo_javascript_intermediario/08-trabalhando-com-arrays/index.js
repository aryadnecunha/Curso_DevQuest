let frutas = ['banana', 'maçã', 'laranja', 'pera']
let frutasTamanho = frutas.length

/*
console.log(frutasTamanho)
console.log(frutas[0])
*/

/*
for(let i = 0; i < frutasTamanho; i++){
    console.log('Fruta: ' + frutas[i])
}
*/

/*
frutas.forEach(function(item, indice, array){
    console.log('Fruta: ' + item)
})
*/

frutas.push('manga') //acrescenta mais um no finala
frutas.pop() //remove o último
frutas.shift() //remove o primeiro
frutas.unshift('morango') //acrescenta mais um no ínico

let posicaoLaranja = frutas.indexOf('laranja') //procura o index de um item

console.log(frutas)
console.log(posicaoLaranja)

