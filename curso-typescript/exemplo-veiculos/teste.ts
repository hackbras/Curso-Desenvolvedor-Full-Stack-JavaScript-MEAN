import {Carro} from "./carro";
import {moto} from "./moto";
import { caminhao } from "./caminhao";
import { MarchaMoto } from "./marchas";

// let carro1 = new Carro()
// let carro2 = new Carro("abcd1234")
// let carro3 = new Carro("","João")
// let carro4 = new Carro("abcd12334","")


// carro1.placa = "abc1234"

// console.log(`a placa do carro é: ${carro1.placa}`)  

let moto1 = new moto("abc1234","joao")

moto1.passarMarcha(MarchaMoto.PRIMEIRA)

let caminhao1  = new caminhao()

//caminhao1.numeroPortas
