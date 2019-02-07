let fs = require('fs')

new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("Rodou 1")
    },3000)

    resolve()
}).then(result => {
    setTimeout(()=>{
        console.log("Rodou 2")
        if (1+1==2) {
            resolve()
        }else{
            reject()
        }
    },5000)
    
})
// .catch(erro=>{
//     console.log(`Erro ${erro}`)
// })

console.log(1+2)