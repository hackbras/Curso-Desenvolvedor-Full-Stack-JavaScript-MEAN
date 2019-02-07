import { Veiculo } from "./veiculo";
import { MarchaMoto } from "./marchas";

export class moto extends Veiculo<MarchaMoto>{//gener5cs
   
    constructor(placa:string, proprietario:string){
        super(placa,proprietario)
        this.marchaAtual = MarchaMoto.NEUTRO
    }
    
    public passarMarcha(proximamarcha: MarchaMoto): void {
        type GrafoTransicoes = {[key: number]: number[]} //alias para tipo

        let criarGrafoTransicoes = ():GrafoTransicoes=>{
            transicoesPossiveis[MarchaMoto.NEUTRO]=[
                MarchaMoto.PRIMEIRA, MarchaMoto.SEGUNDA
            ]
    
            transicoesPossiveis[MarchaMoto.PRIMEIRA] = [
                MarchaMoto.NEUTRO
            ]
    
            transicoesPossiveis[MarchaMoto.SEGUNDA]=[
                MarchaMoto.NEUTRO,MarchaMoto.TERCEIRA
            ]
    
            transicoesPossiveis[MarchaMoto.TERCEIRA]=[
                MarchaMoto.SEGUNDA,MarchaMoto.QUARTA
            ]
    
            transicoesPossiveis[MarchaMoto.QUARTA]=[
                MarchaMoto.TERCEIRA,MarchaMoto.QUINTA
            ]
    
            transicoesPossiveis[MarchaMoto.QUINTA]=[
                MarchaMoto.QUARTA
            ]

            return transicoesPossiveis
        }

        let transicoesPossiveis:GrafoTransicoes={}

        transicoesPossiveis = criarGrafoTransicoes()
         
        let transicoesPossiveisAPartirDaAtual:MarchaMoto[]=
            transicoesPossiveis[this.marchaAtual]

        if (transicoesPossiveisAPartirDaAtual.find(m => m == proximamarcha)== undefined) {
            throw new Error(
                `impossível ir da marcha ${MarchaMoto[this.marchaAtual]}  para a marcha ${MarchaMoto[proximamarcha]}`
            )
        } else {
            this.marchaAtual = proximamarcha
        }
    }
   

}