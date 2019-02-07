import { Veiculo } from "./veiculo";
import { MarchaCarro } from "./marchas";

export class Carro extends Veiculo<MarchaCarro>{
    public passarMarcha(proximamarcha: MarchaCarro): void {
        throw new Error("Method not implemented.");
    }
    private _numeroPortas:number

    get numeroPortas(){
        return this._numeroPortas
    }       
    set numeroPortas(value){
        this._numeroPortas=value
    }

}