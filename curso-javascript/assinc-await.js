//Callback são funções que chamam outra função

const superagent = require('superagent')
const fs = require('fs')

const url = "https://jsonplaceholder.typicode.com/photos"//api rest ou web service


async function main(){
    try {
        try {
            fs.accessSync('./thumbs')
        } catch (error) {
            fs.mkdirSync('./thumbs')
        }

        let response = await superagent.get(url)

        console.log(`número de fotos: ${response.body.length}`)

        let i = 0

        for (let foto of response.body) {
            let fotoResponse = await superagent.get(foto.thumbnailUrl)
            fs.writeFileSync(`./thumbs/thumb_${i}.png`,fotoResponse.body)
            console.log(`foto ${i} salva com sucesso`)

            i++
        }

    } catch (error) {
        console.log(error)
    }
}

main()