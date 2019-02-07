import { Computador } from "./exercicio1/computador";

export class ListaGenerica<E>{
    adicionar(e:E){}
    remover(e:E){}
    listar():E[]{
        return []
    }
}


//Usar a lista
let listaDeNumeros = new ListaGenerica<number>()
let listaDeComputadores = new ListaGenerica<Computador>()

listaDeNumeros.adicionar(1); listaDeNumeros.adicionar(2)
listaDeComputadores.adicionar(new Computador())
