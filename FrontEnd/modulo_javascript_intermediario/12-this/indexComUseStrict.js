'use strict'
// this.name = 'Aryadne'

// function saudar(){
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Aryadne',
//     saudar: function(){
//         console.log('this no contexto do método', this)

//         console.log('this no contexto do método', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)