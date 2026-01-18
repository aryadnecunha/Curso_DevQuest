/*
    == ---- igual ---- a==b ---- verdadeiro se a for igual a b

    === ---- idêntico ---- a===b ---- verdadeiro se a for idêntico a b

    != ---- diferente ---- a!=b ---- verdadeiro se a não for idêntico a b
    
    !== ---- não idêntico ---- a!== ---- verdadeiro se a não for idêntico a b

    < ---- menor que ---- a < b ---- verdadeiro quando a for menor que b

    < ---- menor igual que ---- a <= b ---- verdadeiro quando a for menor ou igual que b

    > ---- maior que ---- a > b ---- verdadeiro quando a for maior que b

    < ---- maior igual que ---- a <= b ---- verdadeiro quando a for maior ou igual que b
*/

//const a = 3
//const b = 3

//console.log(a==b)

////////////////////////////////

/*
    && = e
    T e T = T
    T e F = F
    F e T = F
    F e F = F
*/

const a = 2
const b = 2


console.log(a === b && a <=b)
//V e V = V

console.log(a === b && a < b)
//V e F = F

console.log(a > b && a === b)
//F e V = F

console.log(a > b && a < b)
//F e F = F


/*
    || = OR = ou
    T e T = T
    T e F = T
    F e T = T
    F e F = F
*/

console.log(a === b || a <= b)
//V or V = V

console.log(a === b || a < b)
//V or F = V

console.log(a > b || a === b)
//F or V = V

console.log(a > b || a < b)
//F or F = F

/*
    ! = not = inverter os valores
    T fica F 
    F fica T
*/

console.log(a === b ) //true
console.log(!(a === b)) //false

console.log(a < b ) //false
console.log(!(a < b)) //true
