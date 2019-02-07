//Bibliotecas para acesso a sistemas de arquivos do sistema fs, util,io e etc
//Bibliotecas para data  moment
const fs = require('fs')

class resultado{
    constructor(nome,disciplina,nota,frequencia){
        this.nome = nome
        this.disciplina = disciplina
        this.nota = nota
        this.frequencia = frequencia
    }
}

fs.readFile('./boletim.csv',{
    encoding: 'latin1'
},(erro,dados) =>{
    if (erro) {
        console.log("Falha ao abrir o arquivo")
        return
    }

    let linhas = dados.split("\r\n")

    let resultados = []

    for(let linha of linhas){
        let linhaVetor =linha.split(";")
        resultados.push(
            new resultado(
                linhaVetor[0],linhaVetor[1],
                Number(linhaVetor[2], Number(linhaVetor[3]))
            )
        )
    }
    
    resultados.pop() 
    resultados.shift()

    //console.log(linhas)
    //console.log(resultados.map(r => r.nome))

    let notas = resultados.map(r => r.nota)
    let resultadoSoma = resultados.map(r => r.nota).reduce((a,b) => a+b,0)
    let resultadoMedia  = resultadoSoma/resultados.length
    console.log(`As notas são: ${notas.sort((a,b) => a-b)} resultado soma: ${resultadoSoma} resultado média ${resultadoMedia}`)
})

