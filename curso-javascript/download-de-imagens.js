const superagent = require('superagent')
const fs = require('fs')

const url = "https://jsonplaceholder.typicode.com/photos"
let i = 0 //indice da foto sendo baixada

let baixarProximaFoto = () =>{
    new Promise((resolve,reject)=>{
        superagent.get(fotos[i].thumbnailUrl).then(thumb =>{
            console.log(`Salvando a foto ${i}`)

            fs.writeFile(`./thumbs/thums_${i}.png`,thumb.body,error =>{
                if (error) {
                    return reject(error)
                }else{                    
                    i++
                    resolve()
                }   

            })
        })
    }).then(()=>{
        baixarProximaFoto()//recursividade
    }).catch((error)=>{
        console.log(error)
    })
}

//let priomiseverificaExistenciaDiretorio = 
new Promise((resolve,reject)=>{
    fs.access('./thumbs',fs.constants.F_OK,error => {
        if (error) {
            resolve(false)
        }else{
            resolve(true)
        }
    })
}).then(diretorioExiste =>{
    if(!diretorioExiste){
        new Promise((resolve,reject)=>{
            fs.mkdir('./thumbs',error =>{
                if (error) {
                    return reject("Falha ao criar o diretório ./thumbs")
                }
                resolve(false)
            })        
        })        
    }else{
        return Promise.resolve(true)
    }
}).then(diretorioExiste=>{

}).then(()=>{
    superagent.get(url).then(Response => {
        console.log(`Número de fotos encontradas: ${Response.body.length}`)

        fotos = Response.body

        if (i < 10) {    
            baixarProximaFoto()   

        }else{
            console.log("Arquivos Baixados com sucesso")
        }
    })
}).catch(error=>{
    console.log(`${error}`)
})

// priomiseverificaExistenciaDiretorio.then(diretorioExiste =>{

// })

