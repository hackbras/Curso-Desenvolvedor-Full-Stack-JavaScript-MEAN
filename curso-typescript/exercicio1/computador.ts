import {Processador} from "./processador"
import {Memoria} from "./memoria"
import {Hd} from "./hd"

export class Computador{
    constructor(
        public processador?:Processador //atributos complexos
        ,public memoria?:Memoria
        ,public hd?:Hd){}

    //public tipo:string
}