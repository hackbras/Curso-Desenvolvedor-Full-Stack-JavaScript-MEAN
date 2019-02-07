//Oarametros opcionais
function hello(name = "Fulano",age){
    //return ``
    let msg = `hello ${name}`
    
    if (age != undefined) {
        msg  += ` , sua idade é ${age}`
    }

    return msg
}   

console.log( hello())
console.log(hello("João"))
console.log(hello("João",32))
console.log(undefined, 56)

let x = null
let y = undefined

//console.log(object.age)

