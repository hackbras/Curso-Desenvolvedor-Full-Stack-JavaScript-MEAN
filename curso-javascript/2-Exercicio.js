//lodash biblioteca de vetor

/*
Gera números aleatórios antre 0 e 100:

    let v = []

    for (let i = 0 ; i < 100; i++) {
        v.push(Math.floor(Math.random() * 100))
    }

2-No vetor aleatório, conte quantos números são múltiplos de 7 e 3
    resposta:  console.log(v.filter(n => n % 3 == 0 && n % 7 == 0).length)

3-Calcule o valor da função f(x)=2x²+10 para cada  elemento do vetor aleatório
    resposta:console.log(v.map(n => Math.pow(n,2) * 2 + 10))

4-Obtenha   o 8° maior elemento do vetor
    resposta: console.log(v.sort((a,b) => b - a)[7])

5-Em vetores do javascript existe a função some, que retorna true caso algum teste de seu 
calback seja true. Sendo assim, verifique se existe algum elemento no vetor que é múltiplo de 13
    resposta: console.log(v.some(n => n % 13 == 0))
*/

let v = []
/*2-No vetor aleatório, conte quantos números são múltiplos de 7 e 3 */
for (let i = 0; i < 100; i++) {
    v.push(Math.floor(Math.random()*100))
}

let resultado=0

v.forEach(
    function multiplosde7e3(value) {
        if (value % 7 == 0 && value % 3 == 0)  {
            resultado++
        }
    }
    
    //deu erro
    //value => (value % 7 == 0 && value % 3 == 0) ? resultado++        
    
)
console.log(`Números Gerados em ordem ${v.sort((a,b) => b-a)}`)
console.log(`Múltiplos de 3 e 7: ${resultado}`)


/******3-Calcule o valor da função f(x)=2x²+10 para cada  elemento do vetor aleatório******/

for (let i = 0; i < v.length; i++) {
    console.log(`numero ${i }`+`${Math.pow(2*v[i],2)+10}`)    
}


/*4-Obtenha   o 8° maior elemento do vetor*/
let elementos =[]

elementos = v.sort((a,b) => b-a)

console.log(`Oitavo maior elemento ${elementos[7]}`)

/*5-Em vetores do javascript existe a função some, que retorna true caso algum teste de seu 
calback seja true. Sendo assim, verifique se existe algum elemento no vetor que é múltiplo de 13*/

let R = v.some(value => value % 13==0 )

console.log(`Existe algum múltiplo de 13? ${R}`)

