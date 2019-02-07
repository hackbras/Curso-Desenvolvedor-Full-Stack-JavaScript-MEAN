import { Computador } from "./computador"
import { Processador } from "./processador"
import { Memoria } from "./memoria"
import { Hd } from "./hd"

export class Notebook extends Computador{
    constructor(processador:Processador,memoria: Memoria ,hd:Hd){
        super(processador,memoria,hd)
    }
    public possuiTeclado:boolean
}