// Suponha que temos entidades de banco de dados pasra cada uma delas e 
//conjuntos de operações de entrada e saida em seus respectivos

export namespace usuario{
    export class entradaOperacaoFiltrar{
        nome: string
        dataCadastro:Date
    }
    export class SaidaOperacaoFiltrar{
        lista:{
            nome:string
            email:string
        }[]
    }
}
export namespace Pedido{
    export class entradaOperacaoFiltrar{
        nome: string
        dataCadastro:Date
    }
    export class SaidaOperacaoFiltrar{
        lista:{
            nome:string
            email:string
        }[]
    }
}