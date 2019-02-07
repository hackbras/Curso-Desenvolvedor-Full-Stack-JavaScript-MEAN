/*Algoritimo para identificar quantas vezes um numero aparece no array */
let v = [] //vetor

//nosql: Grande capaacidade de se adaptaar a mudanças e performance

for (let i = 0; i < 100; i++) {
    v.push(Math.floor(Math.random()*10))//Biblioteca Math com numeros aleatórios de  0 a 10
}

let count =  {} //objeto

for (let n of v) {
    if(count[n] == undefined){
        count[n] = 1
    }  else{
        count[n]++
    }
}

for(let n in count){
    console.log(`${n} aparece ${count[n]} vezes`)
}