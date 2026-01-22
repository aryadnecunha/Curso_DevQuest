/* Variável dentro do escopo, só funciona dentro do bloco
if(true{
    const mensagem = 'Olá'
})

console.log(mensagem)

*/

/* Escopo de bloco autonomo e tb só funciona a variável dentro do escopo
{ 
    const mensagem = 'Olá'
    console.log(mensagem)
}

console.log(mensagem)
*/

/* Escopo de função
function falar(){
    const mensagem = 'Olá Mundo!'
    console.log(mensagem)
}

falar()
console.log(mensagem)


function falar(){
    const mensagem = 'Olá Mundo!'
    console.log(mensagem)
    function falaroutracoisa(){

    }
    falaroutracoisa()
    console.log(falaroutracoisa)
}

falar()
console.log(mensagem)
*/

/* Escopo global 
*/
console.log(url)