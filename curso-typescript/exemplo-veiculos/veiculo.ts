export class Motor{
    cilindradas:number
}

export abstract class Veiculo<M>{
    public marchaAtual:M

    constructor (placa?:string, proprietario?:string){
        this.placa = placa
    }
    public placa:string //com "strictNullChecks": false no tsconfig.json (tsc --init)  ou private place:string | null=null     
    public proprietario:string
   

    public acelerar(){}
    public frear(){}
    public abstract passarMarcha(proximamarcha:M):void
}


let motor:Motor