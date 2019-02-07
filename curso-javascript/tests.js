/*
*testes unitarios do backend node com mocha
*console.log("Hello world")
*ctr + , (configurar auto save 300 para salvar automaticamente)
*/
   
let x = 2
let y = "foo"
let z = true
let v =[]
console.log(`valor de x:${x}`)//Interpolação de string .Atenção: é cráse e não aspas simples
console.log(`valor de y ` + y)
console.log(`tamanho do vetor: ${v.length}`  ) 
   
if(x){
    console.log("x está ´preenchido")
}

x = null

if(!x){
    console.log("x não está preenchido")
}

let movie1 ={
    name: "Vingadores Guerra Infinita",
    releaseYear:2018,
    categoria:['Action','Comedy'],
    isOld: function(){
        return this.releaseYear <= 1990
    }
}
/*Cuidado ao  utilizar o this pois  ele pode não associar ao objeto corrente como em outras linguagens
Atualmente o arrow function corrigi isso

*/
console.log(`é antigo: ${movie1.isOld.bind(movie1)()}`) 

let movies = []

movies.push(movie1)

//for "of"=vetor e for=Vetor e em asinc e wait "in" ES6
for (let movie of movies) {
    for(let prop in movie){
        console.log(`${prop}: ${movie[prop]}`)
    }
    
}

/*for (let i = 0; i < 5; i++) {
    console.log = movies[i];
    
}*/