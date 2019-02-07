let v:[1,2,3]

let ordenacaoCrescente = (x:number,y:number)=>{
    return x-y
}
let ordenacaoDescrescente = (x:number,y:number)=>{
    return y - x
}


let tipoOrdenacao: "ASC" | "DESC" = "ASC"

console.log(v.sort(tipoOrdenacao == "ASC" ? ordenacaoCrescente : ordenacaoDescrescente))