let cedulasDisponiveis = [20,50]

let valorDesejado = 195

cedulasDisponiveis.sort((a,b) => b - a)

let valorrestante = valorDesejado

let indiceCedulaAtual = 0

let quantidadeCadaCedula = {}

try {
    

    while (valorrestante > 0){
        let cedulaAtual = cedulasDisponiveis[indiceCedulaAtual]

        quantidadeCadaCedula[cedulaAtual] = Math.floor(valorrestante / cedulaAtual)

        valorrestante %= cedulaAtual

        if (valorrestante > 0 && indiceCedulaAtual  ==  cedulasDisponiveis.length -1  ) {
            throw new Error(`Impossível sacar R$ ${valorDesejado},00. Cédulas 
            disponíveis: ${cedulasDisponiveis.map(c => `R$ ${c},00`)}`)
        }

        indiceCedulaAtual++
    }

    for(cedula in quantidadeCadaCedula){
        console.log(`${quantidadeCadaCedula[cedula]} cédulas de R$ ${cedula},00`)
    }
    /*node -- inspect-brk=9229 <digite aqui o nome do script>
        abra o chrome
        digite chrome://inspect
        já deve abrir o link do depurador
        comece a depuraar com f10       
    */
} catch (error) {
    console.log(error.message)
}