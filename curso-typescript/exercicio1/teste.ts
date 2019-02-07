import {Computador} from "./computador"
import {Memoria} from "./memoria"
import {Processador} from "./processador"
import {Hd} from "./hd"

let memoriaParam = new Memoria("DDR3",3)
let hdParam = new Hd("Seagate 11hb",500)
let processadorParam = new Processador("Intel Core i7","448",3.5)


let computador1 = new Computador(processadorParam,memoriaParam,hdParam)
console.log(`O Computador do Henrique tem um processador tem clock: ${computador1.processador.clock}`)
export class teste{
   

}

let computador2:Computador={
    processador:{
        marca:"intel",
        modelo:"intel i7",
        clock:2660
    },
    hd:{
        capacidade:500,
        marca:"Seagate"
    },
    memoria:{
        capacidade:8,
        tipo:"DDR3"
    }
}

console.log(`${computador2.hd.capacidade}`)