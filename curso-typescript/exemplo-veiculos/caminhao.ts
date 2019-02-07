import { Veiculo } from "./veiculo";
import { marchaCaminhao } from "./marchas"

export class caminhao extends Veiculo<marchaCaminhao>{
    public passarMarcha(): void {
        throw new Error("Method not implemented.");
    }
    public numeroPortas:number
}